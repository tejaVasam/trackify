import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HabitService } from '../../../services/habit.service';
import { HabitLogService } from '../../../services/habit-log.service';
import { Habit } from '../../../models/habit.model';
import { Days } from '../../../enums/days.enum';
import { HabitFrequency } from '../../../enums/habit-frequency.enum';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TitleCasePipe } from '@angular/common';

interface GridDay {
  date: Date;
  dateStr: string;
  dayNum: number;
  isToday: boolean;
  isInFuture: boolean;
  isCompleted: boolean;
  isConfiguredDay: boolean;
}

@Component({
  selector: 't-habit-details',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, RouterModule, TitleCasePipe],
  template: `
    <div class="df fd-c w-100 font-inter" style="background-color: #f7f3f0; min-height: 100vh; position: relative;">
      
      <!-- 1. Header Section -->
      <div class="df fd-r jc-sb ai-c p-24 w-100 pb-16 sticky top-0 bg-white" style="z-index: 10; box-shadow: 0 2px 10px rgba(0,0,0,0.02); box-sizing: border-box;">
        <div class="df fd-r gap-4 ai-c">
          <button mat-icon-button (click)="goBack()">
            <mat-icon>arrow_back</mat-icon>
          </button>
          <span class="fs-18 fw-700 truncate" style="max-width: 180px;">{{ habit()?.name || 'Loading...' }}</span>
        </div>
        <button mat-icon-button>
          <mat-icon>edit</mat-icon>
        </button>
      </div>

      <div class="p-24 df fd-c gap-6">

        <!-- 2. Habit Summary Card -->
        @if (habit()) {
          <div class="bg-white br-16 p-20 df fd-c gap-4 w-100" style="box-shadow: 0 8px 16px rgba(0,0,0,0.03); box-sizing: border-box;">
            <div class="df fd-r ai-c gap-4">
              <div class="df ai-c jc-c br-pill text-white" [style.background-color]="habit()?.color" style="width: 48px; height: 48px; min-width: 48px;">
                <mat-icon>{{ habit()?.icon }}</mat-icon>
              </div>
              <div class="df fd-c flex-1 overflow-hidden">
                <span class="fs-18 fw-800 text-primary truncate">{{ habit()?.name }}</span>
                <span class="fs-13 fw-600 text-secondary">{{ habit()?.description || 'Binary Tracking Habit' }}</span>
              </div>
            </div>
            
            <div class="mt-8 pt-16 b-t-1-solid df fd-r jc-sb ai-c" style="border-color: #f4f4f5;">
              <span class="fs-13 fw-600 text-secondary">Goal</span>
              <span class="fs-14 fw-700 p-8 br-8" style="background-color: #f4f4f5;">1 / Day</span>
            </div>
          </div>
        }

        <!-- 3. Streak & Key Stats -->
        <div class="df fd-r gap-4 w-100">
          <div class="bg-white br-16 p-16 flex-1 df fd-c gap-2" style="box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
            <mat-icon class="text-warn">local_fire_department</mat-icon>
            <span class="fs-12 fw-600 text-secondary">Current Streak</span>
            <span class="fs-24 fw-800 text-primary">{{ currentStreak() }}</span>
          </div>

          <div class="bg-white br-16 p-16 flex-1 df fd-c gap-2" style="box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
            <mat-icon class="text-accent">emoji_events</mat-icon>
            <span class="fs-12 fw-600 text-secondary">Best Streak</span>
            <span class="fs-24 fw-800 text-primary">{{ bestStreak() }}</span>
          </div>

          <div class="bg-white br-16 p-16 flex-1 df fd-c gap-2" style="box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
            <mat-icon class="text-primary">done_all</mat-icon>
            <span class="fs-12 fw-600 text-secondary">Total Done</span>
            <span class="fs-24 fw-800 text-primary">{{ totalCompletions() }}</span>
          </div>
        </div>

        <!-- 4. Calendar View -->
        <div class="bg-white br-16 p-20 w-100 df fd-c gap-4" style="box-shadow: 0 8px 16px rgba(0,0,0,0.03); box-sizing: border-box;">
          <div class="df fd-r jc-sb ai-c mb-8">
            <span class="fs-16 fw-700 text-primary">{{ activeMonthDisplay() }}</span>
            <div class="df fd-r gap-2">
              <button mat-icon-button (click)="shiftMonth(-1)" style="color: #6b7280; width: 36px; height: 36px;">
                <mat-icon style="font-size: 20px;">chevron_left</mat-icon>
              </button>
               <button mat-icon-button (click)="shiftMonth(1)" style="color: #6b7280; width: 36px; height: 36px;">
                <mat-icon style="font-size: 20px;">chevron_right</mat-icon>
              </button>
            </div>
          </div>

          <!-- Weekday Headers -->
          <div class="df fd-r w-100 mb-8" style="background-color: transparent;">
            @for (day of ['S', 'M', 'T', 'W', 'T', 'F', 'S']; track $index) {
              <div class="text-center fs-12 fw-700" style="flex: 0 0 14.28%; color: #a1a1aa;">{{ day }}</div>
            }
          </div>

          <!-- Calendar Grid -->
          <div class="df fd-r flex-wrap w-100 gap-y-2">
             @for (blank of emptyDaysPrefix(); track $index) {
               <div style="flex: 0 0 14.28%;"></div>
             }
             @for (cell of calendarDays(); track cell.dateStr) {
               <div class="df ai-c jc-c" style="flex: 0 0 14.28%; height: 40px;">
                  <button class="br-50 border-none df ai-c jc-c fw-600 fs-14 cursor-pointer transition-all"
                          [style.width]="'32px'"
                          [style.height]="'32px'"
                          [style.background-color]="getCellBg(cell)"
                          [style.color]="getCellColor(cell)"
                          [style.opacity]="cell.isInFuture ? '0.3' : '1'"
                          [disabled]="cell.isInFuture || !cell.isConfiguredDay"
                          (click)="onDateClick(cell)">
                    {{ cell.dayNum }}
                  </button>
               </div>
             }
          </div>
        </div>
      </div>

      <!-- 5. Today Action Section (Sticky Bottom) -->
      @if(habit() && isTodayConfigured()) {
      <div class="p-24 w-100 bg-white b-t-1-solid position-fixed" style="bottom: 0; left: 0; z-index: 100; border-color: #f4f4f5; box-shadow: 0 -4px 16px rgba(0,0,0,0.03); box-sizing: border-box;">
        <button mat-flat-button class="w-100 py-24 fw-800 br-12" 
                [style.background-color]="isDoneToday() ? '#f0fdf4' : habit()?.color"
                [style.color]="isDoneToday() ? '#166534' : 'white'"
                [style.border]="isDoneToday() ? '2px solid #22c55e' : 'none'"
                (click)="toggleToday()">
           <mat-icon class="mr-8">{{ isDoneToday() ? 'task_alt' : 'check_circle' }}</mat-icon>
           <span class="fs-16">{{ isDoneToday() ? 'Completed Today!' : 'Mark as Done' }}</span>
        </button>
      </div>
      }
      
      <!-- Padding box pushing past fixed sticky header -->
      <div style="height: 120px; width: 100%;"></div>

    </div>
  `
})
export class HabitDetails implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private habitService = inject(HabitService);
  private habitLogService = inject(HabitLogService);

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
        isConfiguredDay
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

    await this.habitLogService.toggleCompletion(id, cell.dateStr);
    await this.loadData();
  }

  async toggleToday() {
    const id = this.habitId();
    if (!id) return;
    
    await this.habitLogService.toggleCompletion(id, this.todayStr());
    await this.loadData();
  }
}
