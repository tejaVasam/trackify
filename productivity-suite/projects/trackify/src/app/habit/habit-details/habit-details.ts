import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HabitService } from '../../../services/habit.service';
import { HabitLogService } from '../../../services/habit-log.service';
import { Habit } from '../../../models/habit.model';
import { Days } from '../../../enums/days.enum';
import { HabitFrequency } from '../../../enums/habit-frequency.enum';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { HabitLog } from '../../../db/app.db';
import { TitleCasePipe } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';


interface GridDay {
  date: Date;
  dateStr: string;
  dayNum: number;
  isToday: boolean;
  isInFuture: boolean;
  isCompleted: boolean;
  isConfiguredDay: boolean;
  hasNote: boolean;
  mood?: string;
  tags?: string[];
  planNote?: string;
  reflectionNote?: string;
}


@Component({
  selector: 't-habit-details',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, RouterModule, BaseChartDirective, MatTabsModule, MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatChipsModule],


  templateUrl: './habit-details.html',
})
export class HabitDetails implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private habitService = inject(HabitService);
  private habitLogService = inject(HabitLogService);
  private dialog = inject(MatDialog);


  habitId = signal<number | null>(null);
  habit = signal<Habit | null>(null);

  // Analytics State
  currentStreak = signal<number>(0);
  bestStreak = signal<number>(0);
  totalCompletions = signal<number>(0);

  // Calendar State
  activeMonthDate = signal<Date>(new Date());
  calendarDays = signal<GridDay[]>([]);
  emptyDaysPrefix = signal<number[]>([]);
  completedDateStrings = signal<Set<string>>(new Set());
  logsMap = signal<Map<string, HabitLog>>(new Map()); // dateStr -> log data


  monthlySuccessRate = signal<number>(0);

  // Line Chart State
  reportType = signal<'weekly' | 'monthly' | 'yearly'>('weekly'); // Defaults to weekly to match tab index 0

  onTabChange(index: number) {
    const types: ('weekly' | 'monthly' | 'yearly')[] = ['weekly', 'monthly', 'yearly'];
    if (types[index]) this.reportType.set(types[index]);
  }

  chartData = computed(() => {
    const type = this.reportType();
    const dates = this.completedDateStrings();
    const result: { label: string, value: number }[] = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (type === 'weekly') {
      // Last 7 days
      for (let i = 6; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        const dStr = this.getLocalFormattedDate(d);
        result.push({
          label: d.toLocaleDateString('en-US', { weekday: 'short' }),
          value: dates.has(dStr) ? 1 : 0
        });
      }
    } else if (type === 'monthly') {
      // Last 4 weeks (28 days)
      for (let i = 3; i >= 0; i--) {
        let completions = 0;
        // Count backwards blocks of 7 days
        for (let j = 0; j < 7; j++) {
          const d = new Date(today);
          d.setDate(d.getDate() - (i * 7 + j));
          if (dates.has(this.getLocalFormattedDate(d))) completions++;
        }
        result.push({
          label: `W${4 - i}`,
          value: completions
        });
      }
    } else {
      // Yearly: Last 6 months
      for (let i = 5; i >= 0; i--) {
        const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
        const monthPrefix = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0');
        let completions = 0;
        dates.forEach(ds => {
          if (ds.startsWith(monthPrefix)) completions++;
        });
        result.push({
          label: d.toLocaleDateString('en-US', { month: 'short' }),
          value: completions
        });
      }
    }
    return result;
  });

  chartDataConfiguration = computed<ChartConfiguration<'line'>['data']>(() => {
    const data = this.chartData();
    const h = this.habit();
    const color = h ? h.color : '#3b82f6';

    return {
      labels: data.map(d => d.label),
      datasets: [{
        data: data.map(d => d.value),
        label: 'Completions',
        backgroundColor: color + '33', // 20% opacity
        borderColor: color,
        pointBackgroundColor: color,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: color,
        fill: 'origin',
        tension: 0.4
      }]
    };
  });

  chartOptions = computed<ChartOptions<'line'>>(() => {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          enabled: true,
          mode: 'index',
          intersect: false
        }
      },
      scales: {
        x: {
          grid: { display: false }
        },
        y: {
          beginAtZero: true,
          suggestedMax: this.reportType() === 'weekly' ? 1 :
            this.reportType() === 'monthly' ? 7 : 31
        }
      }
    };
  });

  // Today State
  todayStr = signal<string>('');
  isDoneToday = computed(() => this.completedDateStrings().has(this.todayStr()));
  isTodayConfigured = signal<boolean>(false);

  activeMonthDisplay = computed(() => {
    return this.activeMonthDate().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  });

  async ngOnInit() {
    this.todayStr.set(this.getLocalFormattedDate(new Date()));

    this.route.paramMap.subscribe(async params => {
      const id = params.get('id');
      if (id) {
        this.habitId.set(Number(id));
        await this.loadData();
      }
    });

    // Sync baseline
    const today = new Date();
    today.setDate(1);
    this.activeMonthDate.set(today);
  }

  goBack() {
    this.router.navigate(['/habits']);
  }

  getLocalFormattedDate(date: Date): string {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  async loadData() {
    const id = this.habitId();
    if (!id) return;

    const data = await this.habitService.getHabit(id);
    if (data) this.habit.set(data);

    // Load logs across all history
    const allLogs = await this.habitLogService.getAllLogs();
    const habitLogs = allLogs.filter(l => l.habitId === id);

    // Seed Analytics
    this.totalCompletions.set(habitLogs.length);

    const setDates = new Set(habitLogs.map(l => l.dateStr));
    this.completedDateStrings.set(setDates);

    const logsMap = new Map<string, HabitLog>();
    habitLogs.forEach(l => {
      logsMap.set(l.dateStr, l);
    });
    this.logsMap.set(logsMap);



    // Success Rate for current month
    this.calculateMonthlySuccessRate(habitLogs);

    // Compute Streak algorithm locally (similar to dashboard but filtered to explicitly this habit context)
    const distinctLogDates = Array.from(setDates).sort().reverse();

    const epochDays = distinctLogDates.map(dStr => {
      const [yy, mm, dd] = dStr.split('-');
      return Math.floor(new Date(Number(yy), Number(mm) - 1, Number(dd)).getTime() / 86400000);
    });

    let best = 0;
    let curr = 0;

    if (epochDays.length > 0) {
      let temp = 1;
      best = 1;
      for (let i = 0; i < epochDays.length - 1; i++) {
        if (epochDays[i] - epochDays[i + 1] === 1) {
          temp++;
          if (temp > best) best = temp;
        } else {
          temp = 1;
        }
      }

      const todayMillis = new Date().setHours(0, 0, 0, 0);
      const todayEpoch = Math.floor(todayMillis / 86400000);

      if (epochDays[0] === todayEpoch || epochDays[0] === todayEpoch - 1) {
        curr = 1;
        for (let i = 0; i < epochDays.length - 1; i++) {
          if (epochDays[i] - epochDays[i + 1] === 1) {
            curr++;
          } else {
            break;
          }
        }
      }
    }

    this.bestStreak.set(best);
    this.currentStreak.set(curr);

    this.generateCalendar();
  }

  calculateMonthlySuccessRate(habitLogs: any[]) {
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const todayStr = this.todayStr();

    // Find logs in current month up to today
    const monthLogs = habitLogs.filter(l => {
      return l.dateStr.startsWith(todayStr.substring(0, 7)); // 'YYYY-MM'
    });

    const daysPassed = now.getDate();
    const rate = Math.round((monthLogs.length / daysPassed) * 100);
    this.monthlySuccessRate.set(rate);
  }

  getSuccessRateColor(): string {
    const rate = this.monthlySuccessRate();
    if (rate >= 80) return '#10b981';
    if (rate >= 50) return '#f59e0b';
    return '#ef4444';
  }


  shiftMonth(diff: number) {
    const newDate = new Date(this.activeMonthDate());
    newDate.setMonth(newDate.getMonth() + diff);
    this.activeMonthDate.set(newDate);
    this.generateCalendar();
  }

  generateCalendar() {
    const d = new Date(this.activeMonthDate());
    const year = d.getFullYear();
    const month = d.getMonth();

    const firstDayIndex = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    this.emptyDaysPrefix.set(Array.from({ length: firstDayIndex }));

    const grid: GridDay[] = [];
    const todayStr = this.todayStr();

    let localIsTodayConfigured = false;

    // Helper map
    const mapDayToEnum: Record<number, Days> = {
      0: Days.Sunday, 1: Days.Monday, 2: Days.Tuesday,
      3: Days.Wednesday, 4: Days.Thursday, 5: Days.Friday, 6: Days.Saturday
    };

    for (let dayNum = 1; dayNum <= daysInMonth; dayNum++) {
      const activeDate = new Date(year, month, dayNum);
      const dateStr = this.getLocalFormattedDate(activeDate);

      // We normalize to midnight
      const now = new Date();
      now.setHours(0, 0, 0, 0);

      const isInFuture = activeDate.getTime() > now.getTime();
      const isCompleted = this.completedDateStrings().has(dateStr);

      const cellDayEnum = mapDayToEnum[activeDate.getDay()];
      let isConfiguredDay = false;
      const h = this.habit();
      if (h) {
        if (h.frequency === HabitFrequency.Daily) {
          isConfiguredDay = true;
        } else if (h.days && Array.isArray(h.days) && h.days.includes(cellDayEnum)) {
          isConfiguredDay = true;
        }
      }

      if (dateStr === todayStr) {
        localIsTodayConfigured = isConfiguredDay;
      }

      const log = this.logsMap().get(dateStr);

      grid.push({
        date: activeDate,
        dateStr,
        dayNum,
        isToday: dateStr === todayStr,
        isInFuture,
        isCompleted,
        isConfiguredDay,
        hasNote: !!(log?.reflectionNote || log?.planNote || log?.mood || (log?.tags && log.tags.length > 0)),
        mood: log?.mood,
        tags: log?.tags,
        planNote: log?.planNote,
        reflectionNote: log?.reflectionNote
      });

    }

    this.isTodayConfigured.set(localIsTodayConfigured);
    this.calendarDays.set(grid);
  }

  getCellBg(cell: GridDay): string {
    if (cell.isCompleted) return '#10b981'; // Valid completed overrides all
    if (!cell.isConfiguredDay) return 'transparent'; // Not supposed to run at all
    // Configured but uncompleted behaviors:
    if (cell.isToday) return '#f3f4f6'; // Neutral grey indicating immediate action
    return '#f0fdf4'; // Light green highlighting meaning this was an active tracking day
  }

  getCellColor(cell: GridDay): string {
    if (cell.isCompleted) return '#ffffff'; // White text on completely green backgrounds
    if (!cell.isConfiguredDay) return '#d1d5db'; // Faded out text (gray-300) identifying locked inactive zones
    if (cell.isToday) return '#111827'; // Dark text indicating focus
    return '#10b981'; // Vivid green text highlighting it's a target
  }

  // Long Press Handling
  private longPressTimer: any;
  private isLongPress = false;

  onDatePointerDown(cell: GridDay) {
    if (cell.isInFuture && !cell.isConfiguredDay) return; // Allow notes on future days even if not configured? 
    // The prompt says: "Future Days (Locked): Focus on 'What’s the plan?' (Scheduling)."
    // So let's allow it.

    this.isLongPress = false;
    this.longPressTimer = setTimeout(() => {
      this.isLongPress = true;
      this.openNoteEditor(cell);
    }, 500); // 500ms for long press
  }

  onDatePointerUp(cell: GridDay) {
    clearTimeout(this.longPressTimer);
    if (!this.isLongPress) {
      this.onDateClick(cell);
    }
  }

  async onDateClick(cell: GridDay) {
    if (cell.isInFuture || !cell.isConfiguredDay) return;
    const id = this.habitId();
    if (!id) return;

    await this.habitLogService.toggleCompletion(id, cell.dateStr);
    await this.loadData();
  }

  openNoteEditor(cell: GridDay) {
    const id = this.habitId();
    if (!id) return;

    const dialogRef = this.dialog.open(HabitLogNoteDialog, {
      width: '450px',
      data: {
        dateStr: cell.dateStr,
        habitName: this.habit()?.name,
        isCompleted: cell.isCompleted,
        isInFuture: cell.isInFuture,
        log: this.logsMap().get(cell.dateStr) || { habitId: id, dateStr: cell.dateStr, completedAt: Date.now() }
      }
    });

    dialogRef.afterClosed().subscribe(async (result) => {
      if (result) {
        await this.habitLogService.saveLogData(id, cell.dateStr, result);
        await this.loadData();
      }
    });
  }

  async toggleToday() {
    const id = this.habitId();
    if (!id) return;

    await this.habitLogService.toggleCompletion(id, this.todayStr());
    await this.loadData();
  }

  deleteHabit() {
    // implementation for delete...
  }
}

// Internal Note Dialog Component
@Component({
  selector: 't-habit-log-note-dialog',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatChipsModule, TitleCasePipe],
  template: `
    <div class="p-24 df fd-c gap-4">
        <div class="df fd-r jc-sb ai-c mb-8">
            <h2 class="m-0 fs-18 fw-800 text-primary">{{ data.habitName }}</h2>
            <span class="fs-13 fw-600 px-8 py-4 br-8" style="background: var(--surface-alt); color: var(--text-secondary)">{{ data.dateStr }}</span>
        </div>

        <!-- Mood Selector -->
        <div class="df fd-c gap-2 mb-8">
            <span class="fs-12 fw-700 text-secondary uppercase ls-1">How do you feel?</span>
            <div class="df fd-r gap-3 fs-24 py-8">
                @for (m of moods; track m) {
                    <span class="cursor-pointer transition-all hover-scale" 
                          [style.opacity]="mood === m ? '1' : '0.4'"
                          [style.filter]="mood === m ? 'grayscale(0)' : 'grayscale(1)'"
                          (click)="mood = m">{{ m }}</span>
                }
            </div>
        </div>

        <!-- Tags -->
        <div class="df fd-c gap-2 mb-12">
            <span class="fs-12 fw-700 text-secondary uppercase ls-1">Quick Tags</span>
            <div class="df fd-r flex-wrap gap-2 pt-4">
                @for (t of availableTags; track t) {
                    <div class="px-10 py-4 br-12 fs-12 fw-600 transition-all cursor-pointer"
                         [style.background-color]="selectedTags.has(t) ? 'var(--primary-light)' : 'var(--surface-alt)'"
                         [style.color]="selectedTags.has(t) ? 'var(--primary-default)' : 'var(--text-secondary)'"
                         [style.border]="selectedTags.has(t) ? '1px solid var(--primary-default)' : '1px solid var(--border-subtle)'"
                         (click)="toggleTag(t)">
                        {{ t }}
                    </div>
                }
            </div>
        </div>

        <!-- Notes (Plan / Reflection) -->
        <div class="df fd-c gap-2">
            <span class="fs-12 fw-700 text-secondary uppercase ls-1">
                {{ data.isInFuture ? 'Planning' : 'Reflection' }}
            </span>
            <mat-form-field appearance="outline" class="w-100 hide-subscript">
                <textarea matInput 
                          [(ngModel)]="tempNote" 
                          [placeholder]="data.isInFuture ? 'What is the plan for this day?' : 'How did it go today?'" 
                          maxlength="300" 
                          rows="4"></textarea>
            </mat-form-field>
        </div>

        <div class="df fd-r jc-e gap-2 mt-20">
            <button mat-button (click)="close()">Cancel</button>
            <button mat-flat-button color="primary" class="br-12 px-20 text-bg" (click)="save()">Save Entry</button>
        </div>
    </div>
  `,
  styles: [`
    .hover-scale { transition: transform 0.2s; }
    .hover-scale:hover { transform: scale(1.2); }
    .ls-1 { letter-spacing: 0.5px; }
  `]
})
export class HabitLogNoteDialog {
  private dialogRef = inject(MatDialogRef<HabitLogNoteDialog>);
  data = inject(MAT_DIALOG_DATA);
  
  moods = ['🔥', '⚡', '😇', '😴', '🤒', '🚀', '🌈'];
  availableTags = ['#Sick', '#Travel', '#HighEnergy', '#WorkStress', '#Weekend', '#Social'];
  
  mood = this.data.log.mood || '';
  selectedTags = new Set<string>(this.data.log.tags || []);
  tempNote = this.data.isInFuture ? (this.data.log.planNote || '') : (this.data.log.reflectionNote || '');

  toggleTag(tag: string) {
    if (this.selectedTags.has(tag)) {
      this.selectedTags.delete(tag);
    } else {
      this.selectedTags.add(tag);
    }
  }

  save() {
    const result: Partial<HabitLog> = {
      mood: this.mood,
      tags: Array.from(this.selectedTags)
    };
    if (this.data.isInFuture) {
      result.planNote = this.tempNote;
    } else {
      result.reflectionNote = this.tempNote;
    }
    this.dialogRef.close(result);
  }

  close() {
    this.dialogRef.close();
  }
}



