import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { HabitService } from '../../services/habit.service';
import { HabitLogService } from '../../services/habit-log.service';
import { CategoryService } from '../../services/category.service';

import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { HabitFrequency } from '../../enums/habit-frequency.enum';
import { Days } from '../../enums/days.enum';
import { db, User } from '../../db/app.db';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

interface DashboardStats {
  todayCompletedCount: number;
  todayTotalCount: number;
  todayPercentage: number;
  platformStreak: number;
  platformBestStreak: number;
  completionRate7Days: number;
  totalHabits: number;
  topHabitName: string;
  topHabitScore: number;
  missedHabits: string[];
  insightMessage: string;
  insightHabitId?: number;
  showWelcome: boolean;
  noCategories: boolean;
}



interface WeeklyMatrixItem {
  habitId: number;
  name: string;
  days: { dateStr: string; status: 'completed' | 'pending' | 'missed' }[];
}


@Component({
  selector: 't-dashboard',
  standalone: true,
  imports: [MatIconModule, RouterModule, BaseChartDirective],
  template: `
    <div class="p-24 df fd-c gap-6 font-inter" style="background-color: var(--background-default); min-height: 100vh;">
      <!-- Welcome Message / Onboarding Prompt -->
      @if (stats().showWelcome) {
        <div class="w-100 br-24 p-24 mb-16 animate-fade-in" 
             style="background: linear-gradient(135deg, #10b981, #059669); color: #fff; box-shadow: 0 10px 20px rgba(16, 185, 129, 0.2);">
          <div class="df fd-r ai-c gap-4">
            <div class="df ai-c jc-c br-pill bg-white" style="width: 56px; height: 56px; min-width: 56px;">
                <mat-icon style="color: #10b981; font-size: 32px; width: 32px; height: 32px;">celebration</mat-icon>
            </div>
            <div class="df fd-c gap-1">
                <h2 class="m-0 fs-22 fw-800">Welcome to Trackify, {{ activeUser()?.name }}!</h2>
                <p class="m-0 fs-14 fw-500" style="opacity: 0.9;">Ready to build some life-changing habits?</p>
            </div>
          </div>
          
          @if (stats().noCategories) {
            <div class="mt-20 p-16 br-16" style="background-color: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.2);">
                <div class="df fd-r ai-c jc-sb flex-wrap gap-4">
                    <div class="df fd-c gap-1">
                        <span class="fs-15 fw-700">First Step: Create a Category</span>
                        <span class="fs-13 fw-500" style="opacity: 0.8;">Categories like 'Health' or 'Work' help you stay organized.</span>
                    </div>
                    <button routerLink="/categories" mat-flat-button class="br-12 fw-700 px-20" 
                            style="background-color: #fff; color: #059669;">
                        Setup Categories
                    </button>
                </div>
            </div>
          }
        </div>
      }

      <!-- Header block -->

      <div class="df fd-r jc-sb ai-c">
         <div class="df fd-c gap-1">
           <h1 class="m-0 fs-28 fw-700 text-primary" style="color: #212121;">
              {{ activeUser() ? 'Hello, ' + activeUser()!.name + '!' : 'Your Dashboard' }}
           </h1>
           <p class="m-0 fs-14 fw-500" style="color: #6b7280;">See your progress and stay motivated</p>
         </div>
      </div>

      <!-- 1. Smart Progress Card (Hero) -->
      <div class="w-100 br-24 p-24 position-relative overflow-hidden" 
           style="background: linear-gradient(135deg, #1e293b, #0f172a); color: #fff; box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.3); box-sizing: border-box;">
        

        <div class="df fd-r gap-8 ai-c position-relative z-1 flex-wrap">
          <!-- Circular Progress -->
          <div class="df ai-c jc-c position-relative" style="width: 100px; height: 100px; min-width: 100px;">
            <svg viewBox="0 0 36 36" style="width: 100%; height: 100%;">
              <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="3" />
              <path [attr.stroke-dasharray]="stats().todayPercentage + ', 100'"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none" stroke="#10b981" stroke-width="3" stroke-linecap="round" 
                    style="transition: stroke-dasharray 0.8s ease-out;" />
            </svg>
            <div class="df fd-c ai-c position-absolute">
                <span class="fs-22 fw-800">{{ stats().todayPercentage }}%</span>
                <span class="fs-10 fw-600 uppercase ls-1" style="opacity: 0.6;">Today</span>
            </div>
          </div>
          
          <!-- Insight Content -->
          <div class="df fd-c gap-3 flex-1" style="min-width: 200px;">
            <div class="df ai-c gap-2">
                <mat-icon class="fs-18" style="color: #f59e0b;">auto_awesome</mat-icon>
                <span class="fs-12 fw-700 uppercase ls-1" style="color: #f59e0b;">Smart Insight</span>
            </div>
            <p class="m-0 fs-16 fw-600" style="line-height: 1.4; color: #f8fafc;">
                {{ stats().insightMessage }}
            </p>
            @if (stats().insightHabitId) {
                <button (click)="quickLog(stats().insightHabitId!)" 
                        class="df ai-c jc-c gap-2 mt-2 px-16 py-8 br-12 border-none cursor-pointer hover-lift"
                        style="background-color: #f97316; color: #fff; width: fit-content; transition: transform 0.2s;">
                    <mat-icon style="font-size: 18px; width: 18px; height: 18px;">check_circle</mat-icon>
                    <span class="fs-13 fw-700">Quick Log</span>
                </button>
            }
          </div>
        </div>
      </div>

      <div class="df fd-r gap-4 w-100">
        <!-- Streak Card -->
        <div class="df fd-c gap-4 p-20 br-16 bg-white flex-1" style="min-width: 180px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05); box-sizing: border-box;">
          <div class="df jc-sb ai-c">
            <span class="fs-14 fw-700 uppercase ls-1" style="color: #94a3b8;">Streak</span>
            <div class="br-pill px-8 py-4 df ai-c gap-1" style="background-color: #fff7ed; color: #ea580c;">
               <mat-icon style="font-size: 14px; width:14px; height:14px;">local_fire_department</mat-icon>
               <span class="fs-11 fw-700">{{ stats().platformStreak }}d</span>
            </div>
          </div>
          <div class="df fd-r gap-2 ai-fe">
            <span class="fs-28 fw-800" style="color: #1e293b; line-height: 1;">{{ stats().platformStreak }}</span>
            <span class="fs-13 fw-500 mb-1" style="color: #64748b;">days total</span>
          </div>
        </div>

        <!-- Completion Card -->
        <div class="df fd-c gap-4 p-20 br-16 bg-white flex-1" style="min-width: 180px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05); box-sizing: border-box;">
           <div class="df jc-sb ai-c">
            <span class="fs-14 fw-700 uppercase ls-1" style="color: #94a3b8;">Consistency</span>
            <mat-icon style="color: #10b981; font-size: 18px;">insights</mat-icon>
          </div>
          <div class="df fd-r gap-2 ai-fe">
            <span class="fs-28 fw-800" style="color: #1e293b; line-height: 1;">{{ stats().completionRate7Days }}%</span>
            <span class="fs-13 fw-500 mb-1" style="color: #64748b;">7 day avg</span>
          </div>
        </div>
      </div>

      <!-- Activity Heat Chart -->
      <div class="bg-white p-24 br-16 w-100" style="box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05); box-sizing: border-box; margin-bottom: 8px;">
        <div class="df fd-r ai-c jc-sb flex-wrap gap-4 mb-16">
            <h2 class="m-0 fs-18 fw-700" style="color: var(--text-primary);">Activity Volume</h2>
            <span class="fs-12 fw-600 text-secondary ls-1 ml-auto">PAST 7 DAYS</span>
        </div>
        <div class="w-100 position-relative" style="height: 180px;">
           <canvas baseChart [data]="chartDataConfiguration()" [options]="chartOptions()" type="bar"></canvas>
        </div>
      </div>

      <!-- 4. Interactive Weekly Grid -->
      <div class="bg-white p-24 br-16 w-100" style="box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05); box-sizing: border-box;">
        <div class="df fd-r ai-c jc-sb flex-wrap gap-4 mb-20">
            <h2 class="m-0 fs-18 fw-700" style="color: #1e293b;">Weekly Tracker</h2>
            <span class="fs-12 fw-600 text-secondary ls-1 ml-auto">PAST 7 DAYS</span>
        </div>
        
        <div class="overflow-x-auto w-100 hide-scrollbar">
            <div class="df fd-c gap-4" style="min-width: 450px;">
                <!-- Header Row -->
                <div class="df fd-r ai-c py-4" style="border-bottom: 2px solid #f1f5f9;">
                    <div style="flex: 2; padding-right: 12px;"></div>
                    @for (day of weeklyGraph(); track day.dateLabel) {
                        <div class="df jc-c" style="flex: 1;">
                            <span class="fs-11 fw-700 text-secondary uppercase ls-1" style="opacity: 0.6;">{{ day.dateLabel }}</span>
                        </div>
                    }
                </div>

                <!-- Habit Rows -->
                @for (entry of weeklyMatrix(); track entry.habitId) {
                    <div class="df fd-r ai-c py-12" style="border-bottom: 1px solid #f8fafc;">
                        <div class="df fd-r ai-c gap-3 overflow-hidden" style="flex: 2; padding-right: 12px;">
                            <span class="fs-13 fw-600 truncate text-primary">{{ entry.name }}</span>
                        </div>
                        @for (day of entry.days; track day.dateStr) {
                            <div class="df jc-c" style="flex: 1;">
                                <div (click)="toggleGridHabit(entry.habitId, day.dateStr)" 
                                     class="df ai-c jc-c cursor-pointer transition-all"
                                     style="width: 28px; height: 28px; border-radius: 50%; border: 2px solid transparent;">
                                     
                                     @if (day.status === 'completed') {
                                        <div class="df ai-c jc-c br-pill bg-success" style="width: 20px; height: 20px; background-color: #10b981;">
                                            <mat-icon style="font-size: 14px; width: 14px; height: 14px; color: #fff;">check</mat-icon>
                                        </div>
                                     } @else if (day.status === 'missed') {
                                        <div class="df ai-c jc-c br-pill" style="width: 20px; height: 20px; background-color: #fee2e2;">
                                            <mat-icon style="font-size: 14px; width: 14px; height: 14px; color: #ef4444;">close</mat-icon>
                                        </div>
                                     } @else {
                                        <div class="br-pill" style="width: 16px; height: 16px; border: 2px solid #e2e8f0; background-color: #fff;"></div>
                                     }
                                </div>
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
      </div>

      <!-- 5. Secondary Insights -->
      <div class="df fd-r flex-wrap gap-4 w-100 pb-24">
        <!-- Top Habit -->
        <div class="bg-white br-16 p-20 flex-1 df fd-r ai-c gap-4" style="min-width: 250px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05); box-sizing: border-box;">
            <div class="df ai-c jc-c br-pill text-white" style="width: 44px; height: 44px; background-color: #f59e0b; min-width: 44px;">
              <mat-icon style="font-size: 20px; height: 20px; width: 20px;">military_tech</mat-icon>
            </div>
            <div class="df fd-c overflow-hidden">
              <span class="fs-11 fw-700 text-secondary uppercase ls-1">Record Habit</span>
              <span class="fs-15 fw-700 truncate" style="color: #1e293b;">{{ stats().topHabitName }}</span>
            </div>
            <span class="ml-auto fs-16 fw-800" style="color: #f59e0b;">{{ stats().topHabitScore }}x</span>
        </div>

        <!-- Missed Habits -->
        <div class="bg-white br-16 p-20 flex-1 df fd-r ai-c gap-4" style="min-width: 250px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05); box-sizing: border-box;">
            <div class="df ai-c jc-c br-pill text-white" style="width: 44px; height: 44px; background-color: #ef4444; min-width: 44px;">
              <mat-icon style="font-size: 20px; height: 20px; width: 20px;">error_outline</mat-icon>
            </div>
            <div class="df fd-c overflow-hidden">
              <span class="fs-11 fw-700 text-secondary uppercase ls-1">Pending Today</span>
              @if (stats().missedHabits.length > 0) {
                <span class="fs-14 fw-600 truncate" style="color: #1e293b;">
                  {{ stats().missedHabits.join(', ') }}
                </span>
              } @else {
                <span class="fs-14 fw-600" style="color: #10b981;">Perfect Day in progress!</span>
              }
            </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './dashboard.scss'
})

export class Dashboard implements OnInit {
  private habitService = inject(HabitService);
  private habitLogService = inject(HabitLogService);
  private categoryService = inject(CategoryService);


  stats = signal<DashboardStats>({
    todayCompletedCount: 0,
    todayTotalCount: 0,
    todayPercentage: 0,
    platformStreak: 0,
    platformBestStreak: 0,
    completionRate7Days: 0,
    totalHabits: 0,
    topHabitName: 'No Data',
    topHabitScore: 0,
    missedHabits: [],
    insightMessage: 'Loading insights...',
    showWelcome: false,
    noCategories: false
  });


  weeklyGraph = signal<{ dateLabel: string; count: number; percentage: number }[]>([]);
  weeklyMatrix = signal<WeeklyMatrixItem[]>([]);
  activeUser = signal<User | null>(null);

  chartDataConfiguration = computed<ChartConfiguration<'bar'>['data']>(() => {
    const data = this.weeklyGraph();
    return {
      labels: data.map(d => d.dateLabel),
      datasets: [{
        data: data.map(d => d.count),
        label: 'Completions',
        backgroundColor: '#3b82f6',
        borderRadius: 6,
        barPercentage: 0.6
      }]
    };
  });

  chartOptions = computed<ChartConfiguration<'bar'>['options']>(() => {
    const maxVal = Math.max(...this.weeklyGraph().map(d => d.count), 5);
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: true }
      },
      scales: {
        x: { grid: { display: false } },
        y: {
          beginAtZero: true,
          suggestedMax: maxVal + 1,
          ticks: { stepSize: 1, precision: 0 }
        }
      }
    };
  });

  async ngOnInit() {
    const loadedUser = await db.users.orderBy('id').first();
    if (loadedUser) {
      this.activeUser.set(loadedUser);
    }
    await this.calculateMetrics();
  }

  getLocalFormattedDate(date: Date): string {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  async calculateMetrics() {
    const habits = await this.habitService.loadHabits();
    const categories = await this.categoryService.getCategories();
    const allLogs = await this.habitLogService.getAllLogs();


    const todayDate = new Date();
    const todayMillis = new Date(todayDate).setHours(0, 0, 0, 0);
    const msInDay = 86400000;

    const todayStr = this.getLocalFormattedDate(todayDate);
    const jsDay = todayDate.getDay();
    const mapDayToEnum: Record<number, Days> = {
      0: Days.Sunday, 1: Days.Monday, 2: Days.Tuesday,
      3: Days.Wednesday, 4: Days.Thursday, 5: Days.Friday, 6: Days.Saturday
    };
    const activeEnumDay = mapDayToEnum[jsDay];

    // ============================================
    // 1. TODAY'S PROGRESS & MISSED HABITS
    // ============================================
    const targetActiveHabitsToday = habits.filter(habit => {
      if (habit.frequency === HabitFrequency.Daily) return true;
      if (habit.days && Array.isArray(habit.days) && habit.days.length > 0) {
        return habit.days.includes(activeEnumDay);
      }
      return false;
    });

    const todayLogs = allLogs.filter(l => l.dateStr === todayStr);
    const todayCompletedIds = new Set(todayLogs.map(l => l.habitId));

    let todayCompletedCount = 0;
    const missedHabits: string[] = [];

    for (const h of targetActiveHabitsToday) {
      if (todayCompletedIds.has(h.id!)) {
        todayCompletedCount++;
      } else {
        missedHabits.push(h.name);
      }
    }

    const todayTotalCount = targetActiveHabitsToday.length;
    const todayPercentage = todayTotalCount === 0 ? 0 : Math.round((todayCompletedCount / todayTotalCount) * 100);

    // ============================================
    // 2. STREAK MATRICES (Platform wide)
    // ============================================
    const distinctLogDates = Array.from(new Set(allLogs.map(l => l.dateStr))).sort().reverse();
    const epochDays = distinctLogDates.map(dStr => {
      const [yy, mm, dd] = dStr.split('-');
      return Math.floor(new Date(Number(yy), Number(mm) - 1, Number(dd)).getTime() / msInDay);
    });

    let bestStreak = 0;
    let currentStreak = 0;

    if (epochDays.length > 0) {
      let tempStreak = 1;
      bestStreak = 1;
      for (let i = 0; i < epochDays.length - 1; i++) {
        if (epochDays[i] - epochDays[i + 1] === 1) {
          tempStreak++;
          if (tempStreak > bestStreak) bestStreak = tempStreak;
        } else {
          tempStreak = 1;
        }
      }

      const todayEpoch = Math.floor(todayMillis / msInDay);
      // Valid streak if latest log is exactly today or yesterday
      if (epochDays[0] === todayEpoch || epochDays[0] === todayEpoch - 1) {
        currentStreak = 1;
        for (let i = 0; i < epochDays.length - 1; i++) {
          if (epochDays[i] - epochDays[i + 1] === 1) {
            currentStreak++;
          } else {
            break;
          }
        }
      }
    }

    // ============================================
    // 3. WEEKLY PROGRESS CHART & COMPLETION RATE
    // ============================================
    const graphPoints: { dateLabel: string; count: number; percentage: number }[] = [];
    const graphMap = new Map<string, number>();
    let logsLast7Days = 0;

    for (let i = 6; i >= 0; i--) {
      const d = new Date(todayMillis - (i * msInDay));
      const dateStr = this.getLocalFormattedDate(d);
      const dayLetter = d.toLocaleDateString('en-US', { weekday: 'short' });

      graphPoints.push({
        dateLabel: dayLetter,
        count: 0,
        percentage: 0
      });
      graphMap.set(dateStr, 6 - i);
    }

    const last7DaysStr = graphPoints.map((_, i) => this.getLocalFormattedDate(new Date(todayMillis - ((6 - i) * msInDay))));

    // ============================================
    // WEEKLY MATRIX DATA
    // ============================================
    const matrix: WeeklyMatrixItem[] = habits.map(h => {
      return {
        habitId: h.id!,
        name: h.name,
        days: last7DaysStr.map(dateStr => {
          const log = allLogs.find(l => l.habitId === h.id && l.dateStr === dateStr);
          const isCompleted = !!log;

          // Determine if it was missed (past date, not completed, and was an active day for this habit)
          let status: 'completed' | 'pending' | 'missed' = isCompleted ? 'completed' : 'pending';

          if (!isCompleted && dateStr < todayStr) {
            const dObj = new Date(dateStr);
            const dEnum = mapDayToEnum[dObj.getDay()];
            if (h.frequency === HabitFrequency.Daily || (h.days && h.days.includes(dEnum))) {
              status = 'missed';
            }
          }
          return { dateStr, status };
        })
      };
    });
    this.weeklyMatrix.set(matrix);

    const sevenDaysAgoCutoffStr = this.getLocalFormattedDate(new Date(todayMillis - (6 * msInDay)));

    // Top Habit tracker
    const habitCounts: Record<number, number> = {};

    for (const log of allLogs) {
      // Tally for Top Habit
      habitCounts[log.habitId] = (habitCounts[log.habitId] || 0) + 1;

      // Track 7 days metrics
      if (log.dateStr >= sevenDaysAgoCutoffStr) {
        logsLast7Days++;
        const pIdx = graphMap.get(log.dateStr);
        if (pIdx !== undefined) {
          graphPoints[pIdx].count++;
        }
      }
    }

    // Assign max visual bounds to chart
    const maxDailyCountInGraph = Math.max(...graphPoints.map(p => p.count), 1);
    for (const p of graphPoints) {
      p.percentage = (p.count / maxDailyCountInGraph) * 100;
    }

    // Approximation for completion rate 7 days (Total logs / (Total Habits * 7)) * 100
    // If you only want an arbitrary metric, realistically you evaluate Active Targets. 
    // Here we compute average volume roughly. To be safe, if habits.length * 7 is denominator:
    const possibleHits = habits.length * 7;
    const completionRate7Days = possibleHits === 0 ? 0 : Math.round((logsLast7Days / possibleHits) * 100);

    // ============================================
    // 4. TOP HABIT
    // ============================================
    let topHabitName = 'No Data';
    let topHabitScore = 0;

    for (const [hIdStr, score] of Object.entries(habitCounts)) {
      if (score > topHabitScore) {
        topHabitScore = score;
        const ref = habits.find(h => h.id === Number(hIdStr));
        if (ref) topHabitName = ref.name;
      }
    }

    // ============================================
    // 5. SMART INSIGHTS
    // ============================================
    let insightMessage = "You're doing great! Keep up the consistency.";
    let insightHabitId: number | undefined;

    // Check for streak at risk (yesterday done, today not)
    for (const h of habits) {
      const hLogs = allLogs.filter(l => l.habitId === h.id);
      const yesterdayStr = this.getLocalFormattedDate(new Date(todayMillis - msInDay));
      const doneYesterday = hLogs.some(l => l.dateStr === yesterdayStr);
      const doneToday = hLogs.some(l => l.dateStr === todayStr);

      if (doneYesterday && !doneToday) {
        insightMessage = `Your streak for "${h.name}" is at risk! Log it now to keep it alive.`;
        insightHabitId = h.id;
        break;
      }
    }

    // If no streak at risk, check if almost all habits done today
    if (!insightHabitId && todayPercentage > 0 && todayPercentage < 100) {
      insightMessage = `You're just ${todayTotalCount - todayCompletedCount} habit away from a perfect day!`;
      insightHabitId = habits.find(h => !todayCompletedIds.has(h.id!))?.id;
    }

    // Set Signals to render UI!
    this.weeklyGraph.set(graphPoints);
    this.stats.set({
      todayCompletedCount,
      todayTotalCount,
      todayPercentage,
      platformStreak: currentStreak,
      platformBestStreak: bestStreak,
      completionRate7Days,
      totalHabits: habits.length,
      topHabitName,
      topHabitScore,
      missedHabits,
      insightMessage,
      insightHabitId,
      showWelcome: habits.length === 0,
      noCategories: categories.length === 0
    });
  }


  async toggleGridHabit(habitId: number, dateStr: string) {
    await this.habitLogService.toggleCompletion(habitId, dateStr);
    await this.calculateMetrics();
  }

  async quickLog(habitId: number) {
    const todayStr = this.getLocalFormattedDate(new Date());
    await this.habitLogService.markHabitAsCompleted(habitId, todayStr);
    await this.calculateMetrics();
  }
}

