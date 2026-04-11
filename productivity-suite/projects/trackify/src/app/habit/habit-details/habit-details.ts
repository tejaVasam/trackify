import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HabitService } from '../../../services/habit.service';
import { HabitLogService } from '../../../services/habit-log.service';
import { Habit } from '../../../models/habit.model';
import { Days } from '../../../enums/days.enum';
import { HabitFrequency } from '../../../enums/habit-frequency.enum';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
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
  note?: string;
}


@Component({
  selector: 't-habit-details',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, RouterModule, MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, BaseChartDirective, MatTabsModule],


  template: `
    <div class="df fd-c w-100 font-inter" style="background-color: var(--background-default); min-height: 100vh; position: relative;">

      
      <!-- 1. Header Navigation -->
      <div class="df fd-r jc-sb ai-c p-20 w-100 sticky top-0 bg-white" style="z-index: 10; box-shadow: 0 2px 10px rgba(0,0,0,0.02); box-sizing: border-box;">
        <div class="df fd-r gap-3 ai-c">
          <button mat-icon-button (click)="goBack()" style="background-color: var(--surface-alt); border: 1px solid var(--border-subtle);">
            <mat-icon style="color: var(--text-secondary);">arrow_back</mat-icon>
          </button>
          <div class="df fd-c">
            <span class="fs-12 fw-600 text-secondary uppercase ls-1">Habit Details</span>
            <span class="fs-18 fw-800 truncate text-primary" style="max-width: 180px;">{{ habit()?.name || 'Loading...' }}</span>
          </div>
        </div>
      </div>

      <div class="p-24 df fd-c gap-6">

        <!-- 2. Habit Summary Card -->
        @if (habit()) {
          <div class="bg-white br-24 p-24 df fd-c gap-4 w-100 position-relative" style="box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05); box-sizing: border-box; overflow: hidden;">
            <div style="position: absolute; top: -20px; right: -20px; width: 140px; height: 140px; background: radial-gradient(circle, {{ habit()?.color }}20 0%, transparent 60%); border-radius: 50%;"></div>

            
            <div class="df fd-r ai-fs jc-sb position-relative z-1" style="z-index: 1;">
              <div class="df fd-r ai-c gap-4">
                <div class="df ai-c jc-c br-16 text-white" [style.background-color]="habit()?.color" style="width: 56px; height: 56px; min-width: 56px; box-shadow: 0 8px 16px -4px {{ habit()?.color }}60;">
                    <mat-icon style="font-size: 28px; width: 28px; height: 28px;">{{ habit()?.icon }}</mat-icon>
                </div>
                <div class="df fd-c flex-1 overflow-hidden">
                    <h1 class="m-0 fs-22 fw-800 text-primary truncate">{{ habit()?.name }}</h1>
                    <span class="fs-14 fw-500 text-secondary">{{ habit()?.description || 'Build consistency every day.' }}</span>
                </div>
              </div>
              <div class="df fd-r gap-1">
                <button mat-icon-button (click)="shiftMonth(0)" style="color: #64748b;"><mat-icon style="font-size: 20px;">edit</mat-icon></button>
                <button mat-icon-button color="warn"><mat-icon style="font-size: 20px;">delete_outline</mat-icon></button>
              </div>
            </div>
            
            <div class="mt-12 pt-20 df fd-r jc-sb ai-c gap-4 flex-wrap" style="border-top: 1px solid var(--border-subtle);">
               <div class="df fd-r ai-c gap-2 flex-wrap">
                   <div class="px-10 py-4 br-8 fs-11 fw-700 uppercase ls-1" [style.background-color]="habit()?.color + '15'" [style.color]="habit()?.color">
                       {{ habit()?.frequency === 0 ? 'Daily' : 'Weekly' }}
                   </div>
                   <span class="fs-13 fw-600 text-secondary">Active monitoring</span>
               </div>
               <div class="df fd-r ai-c gap-1">
                   <span class="fs-12 fw-700 text-secondary">Target:</span>
                   <span class="fs-13 fw-800 text-primary">100% Consistency</span>
               </div>
            </div>
          </div>
        }

        <!-- 3. Streak & Key Stats Grid -->
        <div class="df fd-r flex-wrap gap-4 w-100">
          <div class="bg-white br-20 p-20 flex-1 df fd-c gap-2 min-w-140" style="box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
            <div class="df ai-c jc-c br-10 mb-8" style="width: 36px; height: 36px; background-color: #fff7ed; border: 1px solid #ffedd5;">
                <mat-icon style="color: #ea580c; font-size: 20px; width: 20px; height: 20px;">local_fire_department</mat-icon>
            </div>
            <span class="fs-11 fw-700 text-secondary uppercase ls-1">Current</span>
            <span class="fs-24 fw-900 text-primary">{{ currentStreak() }}</span>
          </div>

          <div class="bg-white br-20 p-20 flex-1 df fd-c gap-2 min-w-140" style="box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
            <div class="df ai-c jc-c br-10 mb-8" style="width: 36px; height: 36px; background-color: #f0f9ff; border: 1px solid #e0f2fe;">
                <mat-icon style="color: #0284c7; font-size: 20px; width: 20px; height: 20px;">emoji_events</mat-icon>
            </div>
            <span class="fs-11 fw-700 text-secondary uppercase ls-1">Record</span>
            <span class="fs-24 fw-900 text-primary">{{ bestStreak() }}</span>
          </div>

          <div class="bg-white br-20 p-20 flex-1 df fd-c gap-2 min-w-140" style="box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
            <div class="df ai-c jc-c br-10 mb-8" style="width: 36px; height: 36px; background-color: #f0fdf4; border: 1px solid #dcfce7;">
                <mat-icon style="color: #166534; font-size: 20px; width: 20px; height: 20px;">task_alt</mat-icon>
            </div>
            <span class="fs-11 fw-700 text-secondary uppercase ls-1">Success</span>
            <span class="fs-24 fw-900" [style.color]="getSuccessRateColor()">{{ monthlySuccessRate() }}%</span>
          </div>

          <div class="bg-white br-20 p-20 flex-1 df fd-c gap-2 min-w-140" style="box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
            <div class="df ai-c jc-c br-10 mb-8" style="width: 36px; height: 36px; background-color: #f8fafc; border: 1px solid #f1f5f9;">
                <mat-icon style="color: #64748b; font-size: 20px; width: 20px; height: 20px;">done_all</mat-icon>
            </div>
            <span class="fs-11 fw-700 text-secondary uppercase ls-1">Total</span>
            <span class="fs-24 fw-900 text-primary">{{ totalCompletions() }}</span>
          </div>
        </div>

        <!-- 4. Calendar View Heatmap -->
        <div class="bg-white br-24 p-24 w-100 df fd-c gap-6 mt-12" style="box-shadow: 0 10px 25px -5px rgba(0,0,0,0.03); box-sizing: border-box;">
          <div class="df fd-r jc-sb ai-c mb-20">
            <div class="df fd-c">
                <span class="fs-13 fw-700 text-secondary uppercase ls-1">Consistency Map</span>
                <span class="fs-20 fw-800 text-primary">{{ activeMonthDisplay() }}</span>
            </div>
            <div class="df fd-r gap-2" style="background-color: #f8fafc; padding: 4px; border-radius: 12px; border: 1px solid #f1f5f9;">
              <button mat-icon-button (click)="shiftMonth(-1)" style="color: #64748b; width: 36px; height: 36px;">
                <mat-icon style="font-size: 20px;">chevron_left</mat-icon>
              </button>
               <button mat-icon-button (click)="shiftMonth(1)" style="color: #64748b; width: 36px; height: 36px;">
                <mat-icon style="font-size: 20px;">chevron_right</mat-icon>
              </button>
            </div>
          </div>

          <!-- Weekday Headers -->
          <div class="df fd-r w-100 mb-8" style="background-color: transparent;">
            @for (day of ['S', 'M', 'T', 'W', 'T', 'F', 'S']; track $index) {
              <div class="text-center fs-11 fw-800" style="flex: 0 0 14.28%; color: #94a3b8; letter-spacing: 0.5px;">{{ day }}</div>
            }
          </div>

          <!-- Calendar Grid -->
          <div class="df fd-r flex-wrap w-100 gap-y-1">
             @for (blank of emptyDaysPrefix(); track $index) {
               <div style="flex: 0 0 14.28%;"></div>
             }
             @for (cell of calendarDays(); track cell.dateStr) {
               <div class="df ai-c jc-c position-relative" style="flex: 0 0 14.28%; height: 48px;">
                  <button class="br-12 border-none df fd-c ai-c jc-c fw-700 fs-15 cursor-pointer transition-all"
                          [style.width]="'40px'"
                          [style.height]="'40px'"
                          [style.background-color]="getCellBg(cell)"
                          [style.color]="getCellColor(cell)"
                          [style.opacity]="cell.isInFuture ? '0.3' : '1'"
                          [style.border]="cell.isToday ? '2px solid #1e293b' : 'none'"
                          [disabled]="cell.isInFuture || !cell.isConfiguredDay"
                          (click)="onDateClick(cell)">
                    {{ cell.dayNum }}
                    
                    @if (cell.note) {
                        <div class="position-absolute" style="bottom: 8px; width: 4px; height: 4px; border-radius: 50%; background-color: currentColor; opacity: 0.6;"></div>
                    }
                  </button>
               </div>
             }
          </div>

          <!-- Legend -->
          <div class="df fd-r jc-c gap-4 mt-20 pt-20" style="border-top: 1px solid #f1f5f9;">
              <div class="df ai-c gap-1">
                  <div class="br-4" style="width: 12px; height: 12px; background-color: #10b981;"></div>
                  <span class="fs-11 fw-600 text-secondary">Done</span>
              </div>
              <div class="df ai-c gap-1 ml-4">
                  <div class="br-4" style="width: 12px; height: 12px; background-color: #f0fdf4; border: 1px solid #dcfce7;"></div>
                  <span class="fs-11 fw-600 text-secondary">Missed</span>
              </div>
              <div class="df ai-c gap-1 ml-4">
                  <div class="br-4" style="width: 12px; height: 12px; background-color: transparent; border: 1px solid #e2e8f0;"></div>
                  <span class="fs-11 fw-600 text-secondary">Locked</span>
              </div>
          </div>
        </div>

        <!-- 5. Trends & Reports Chart -->
        <div class="bg-white br-24 p-24 w-100 df fd-c gap-6 mt-12" style="box-shadow: 0 10px 25px -5px rgba(0,0,0,0.03); box-sizing: border-box;">
           <div class="df fd-r jc-sb ai-c mb-8">
              <span class="fs-18 fw-800 text-primary">Trends</span>
           </div>

           <!-- Switcher -->
           <mat-tab-group [selectedIndex]="0" (selectedIndexChange)="onTabChange($event)" fitInkBarToContent style="width: 100%;">
              <mat-tab label="Weekly"></mat-tab>
              <mat-tab label="Monthly"></mat-tab>
              <mat-tab label="Yearly"></mat-tab>
           </mat-tab-group>

           <!-- Chart Rendering -->
           <div class="w-100 mt-16 position-relative" style="height: 180px;">
              <canvas baseChart
                  [data]="chartDataConfiguration()"
                  [options]="chartOptions()"
                  type="line">
              </canvas>
           </div>
        </div>
      </div>

      <!-- 6. Today Action Section (Sticky Bottom) -->
      @if(habit() && isTodayConfigured()) {
      <div class="p-24 w-100 bg-white b-t-1-solid position-fixed" style="bottom: 0; left: 0; z-index: 100; border-color: #f4f4f5; box-shadow: 0 -10px 25px -5px rgba(0,0,0,0.05); box-sizing: border-box;">
        <button mat-flat-button class="w-100 py-32 fw-800 br-16 transition-all" 
                [style.background-color]="isDoneToday() ? '#f0fdf4' : habit()?.color"
                [style.color]="isDoneToday() ? '#10b981' : 'white'"
                [style.border]="isDoneToday() ? '2px solid #10b981' : 'none'"
                (click)="toggleToday()">
           <div class="df ai-c jc-c gap-3">
               <mat-icon style="font-size: 24px; width: 24px; height: 24px;">{{ isDoneToday() ? 'task_alt' : 'check_circle' }}</mat-icon>
               <span class="fs-17">{{ isDoneToday() ? 'Marked as Done!' : 'Mark Today as Done' }}</span>
           </div>
        </button>
      </div>
      }
      
      <!-- Padding box pushing past fixed sticky bottom -->
      <div style="height: 140px; width: 100%;"></div>

    </div>

  `
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
  logsWithNotes = signal<Map<string, string>>(new Map()); // dateStr -> note

  monthlySuccessRate = signal<number>(0);

  // Line Chart State
  reportType = signal<'weekly' | 'monthly' | 'yearly'>('weekly'); // Defaults to weekly to match tab index 0

  onTabChange(index: number) {
      const types: ('weekly' | 'monthly' | 'yearly')[] = ['weekly', 'monthly', 'yearly'];
      if(types[index]) this.reportType.set(types[index]);
  }

  chartData = computed(() => {
    const type = this.reportType();
    const dates = this.completedDateStrings();
    const result: { label: string, value: number }[] = [];
    const today = new Date();
    today.setHours(0,0,0,0);

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
          for(let j = 0; j < 7; j++) {
              const d = new Date(today);
              d.setDate(d.getDate() - (i*7 + j));
              if (dates.has(this.getLocalFormattedDate(d))) completions++;
          }
          result.push({
             label: `W${4-i}`,
             value: completions
          });
       }
    } else {
       // Yearly: Last 6 months
       for (let i = 5; i >= 0; i--) {
          const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
          const monthPrefix = d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2, '0');
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

    const notesMap = new Map<string, string>();
    habitLogs.forEach(l => {
        if (l.note) notesMap.set(l.dateStr, l.note);
    });
    this.logsWithNotes.set(notesMap);

    // Success Rate for current month
    this.calculateMonthlySuccessRate(habitLogs);

    // Compute Streak algorithm locally (similar to dashboard but filtered to explicitly this habit context)
    const distinctLogDates = Array.from(setDates).sort().reverse();

    const epochDays = distinctLogDates.map(dStr => {
        const [yy, mm, dd] = dStr.split('-');
        return Math.floor(new Date(Number(yy), Number(mm)-1, Number(dd)).getTime() / 86400000);
    });

    let best = 0;
    let curr = 0;

    if (epochDays.length > 0) {
        let temp = 1;
        best = 1;
        for (let i = 0; i < epochDays.length - 1; i++) {
            if (epochDays[i] - epochDays[i+1] === 1) {
                temp++;
                if (temp > best) best = temp;
            } else {
                temp = 1;
            }
        }
        
        const todayMillis = new Date().setHours(0,0,0,0);
        const todayEpoch = Math.floor(todayMillis / 86400000);
        
        if (epochDays[0] === todayEpoch || epochDays[0] === todayEpoch - 1) {
            curr = 1;
            for (let i = 0; i < epochDays.length - 1; i++) {
                if (epochDays[i] - epochDays[i+1] === 1) {
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
      now.setHours(0,0,0,0);
      
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

      grid.push({
        date: activeDate,
        dateStr,
        dayNum,
        isToday: dateStr === todayStr,
        isInFuture,
        isCompleted,
        isConfiguredDay,
        note: this.logsWithNotes().get(dateStr)
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

  async onDateClick(cell: GridDay) {
    if (cell.isInFuture || !cell.isConfiguredDay) return;
    const id = this.habitId();
    if (!id) return;

    // Show date details / note modal
    const dialogRef = this.dialog.open(HabitLogNoteDialog, {
        width: '400px',
        data: {
            dateStr: cell.dateStr,
            habitName: this.habit()?.name,
            isCompleted: cell.isCompleted,
            note: cell.note
        }
    });

    dialogRef.afterClosed().subscribe(async (result) => {
        if (!result) return;
        
        if (result.action === 'toggle') {
            await this.habitLogService.toggleCompletion(id, cell.dateStr);
        } else if (result.action === 'saveNote') {
            await this.habitLogService.saveNote(id, cell.dateStr, result.note);
        }
        await this.loadData();
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
  imports: [MatIconModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule],
  template: `
    <div class="p-24 df fd-c gap-4">
        <div class="df fd-r jc-sb ai-c mb-8">
            <h2 class="m-0 fs-18 fw-700">{{ data.habitName }}</h2>
            <span class="fs-13 fw-600 text-secondary">{{ data.dateStr }}</span>
        </div>

        <div class="df fd-r ai-c gap-2 mb-16 p-12 br-12" 
             [style.background-color]="data.isCompleted ? '#f0fdf4' : '#fef2f2'"
             [style.border]="data.isCompleted ? '1px solid #dcfce7' : '1px solid #fee2e2'">
            <mat-icon [style.color]="data.isCompleted ? '#166534' : '#991b1b'">
                {{ data.isCompleted ? 'check_circle' : 'cancel' }}
            </mat-icon>
            <span class="fs-14 fw-700" [style.color]="data.isCompleted ? '#166534' : '#991b1b'">
                {{ data.isCompleted ? 'Completed' : 'Not completed' }}
            </span>
            <button mat-button color="primary" class="ml-auto" (click)="toggle()">
                {{ data.isCompleted ? 'Mark as Not Done' : 'Mark as Done' }}
            </button>
        </div>

        <div class="df fd-c gap-2">
            <span class="fs-13 fw-700 text-secondary uppercase">Journal Note</span>
            <mat-form-field appearance="outline" class="w-100 hide-subscript">
                <textarea matInput [(ngModel)]="note" placeholder="How did it go? (max 200 chars)" maxlength="200" rows="3"></textarea>
            </mat-form-field>
        </div>

        <div class="df fd-r jc-e gap-2 mt-16">
            <button mat-button (click)="close()">Cancel</button>
            <button mat-flat-button color="primary" class="br-8" (click)="saveNote()">Save Note</button>
        </div>
    </div>
  `
})
export class HabitLogNoteDialog {
    private dialogRef = inject(MatDialogRef<HabitLogNoteDialog>);
    data = inject(MAT_DIALOG_DATA);
    note = this.data.note || '';

    toggle() {
        this.dialogRef.close({ action: 'toggle' });
    }

    saveNote() {
        this.dialogRef.close({ action: 'saveNote', note: this.note });
    }

    close() {
        this.dialogRef.close();
    }
}

