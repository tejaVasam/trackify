import { Component, inject, OnInit, signal } from '@angular/core';
import { HabitService } from '../../services/habit.service';
import { HabitLogService } from '../../services/habit-log.service';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { HabitFrequency } from '../../enums/habit-frequency.enum';
import { Days } from '../../enums/days.enum';

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
}

@Component({
  selector: 't-dashboard',
  standalone: true,
  imports: [MatIconModule, RouterModule],
  template: `
    <div class="p-24 df fd-c gap-6 font-inter" style="background-color: #f7f3f0; min-height: 100vh;">
      <!-- Header block -->
      <div class="df fd-c gap-1">
        <h1 class="m-0 fs-28 fw-700 text-primary" style="color: #212121;">Your Dashboard</h1>
        <p class="m-0 fs-14 fw-500" style="color: #6b7280;">See your progress and stay motivated</p>
      </div>

      <!-- 1. Today Progress -->
      <div class="w-100 br-16 p-24 position-relative overflow-hidden" 
           style="background: linear-gradient(135deg, #1f2937, #111827); color: #fff; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.2); box-sizing: border-box;">
        
        <div class="position-absolute" style="top: -20px; right: -20px; width: 150px; height: 150px; border-radius: 50%; background: rgba(255,255,255,0.05);"></div>
        
        <div class="df fd-r gap-6 ai-c position-relative z-1">
          <div class="df ai-c jc-c position-relative circular-wrapper" style="width: 80px; height: 80px;">
            <svg viewBox="0 0 36 36" style="width: 100%; height: 100%;">
              <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="3" />
              <path [attr.stroke-dasharray]="stats().todayPercentage + ', 100'"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none" stroke="#f97316" stroke-width="3" stroke-linecap="round" />
            </svg>
            <span class="position-absolute fs-18 fw-700">{{ stats().todayPercentage }}%</span>
          </div>
          
          <div class="df fd-c gap-2">
            <span class="fs-18 fw-700">Today's Progress</span>
            <span class="fs-14 fw-500" style="color: rgba(255,255,255,0.7); line-height: 1.4;">
              You've completed <b style="color: #f97316;">{{ stats().todayCompletedCount }}</b> out of {{ stats().todayTotalCount }} habits today. 
              @if(stats().todayCompletedCount === stats().todayTotalCount && stats().todayTotalCount > 0) {
                <b style="color: #10b981;"><br/>Perfect day! 🌟</b>
              }
            </span>
          </div>
        </div>
      </div>

      <div class="df fd-r flex-wrap gap-4 w-100">
        <!-- 2. Streak Card -->
        <div class="df fd-c gap-4 p-20 br-16 bg-white flex-1" style="min-width: 250px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05); box-sizing: border-box;">
          <div class="df jc-sb ai-c">
            <span class="fs-15 fw-700" style="color: #212121;">Current Streak</span>
            <div class="br-pill px-8 py-4 df ai-c gap-1" style="background-color: #ffedd5; color: #ea580c;">
               <mat-icon style="font-size: 16px; width:16px; height:16px;">local_fire_department</mat-icon>
               <span class="fs-12 fw-700">{{ stats().platformStreak }} Days</span>
            </div>
          </div>
          <div class="df fd-r gap-2 ai-fe">
            <span class="fs-32 fw-800" style="color: #212121; line-height: 1;">{{ stats().platformStreak }}</span>
            <span class="fs-14 fw-500 mb-2" style="color: #6b7280;">days in a row</span>
          </div>
          <div class="w-100 mt-auto pt-16 b-t-1-solid" style="border-color: #f3f4f6;">
            <span class="fs-12 fw-600" style="color: #9ca3af;">🏆 Personal Best: <b style="color: #4b5563;">{{ stats().platformBestStreak }} days</b></span>
          </div>
        </div>

        <!-- 3. Stats summary -->
        <div class="df fd-c gap-4 p-20 br-16 bg-white flex-1" style="min-width: 250px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05); box-sizing: border-box;">
           <div class="df jc-sb ai-c">
            <span class="fs-15 fw-700" style="color: #212121;">Total Habits</span>
            <mat-icon style="color: #10b981;">insights</mat-icon>
          </div>
          <div class="df fd-r gap-2 ai-fe">
            <span class="fs-32 fw-800" style="color: #212121; line-height: 1;">{{ stats().totalHabits }}</span>
            <span class="fs-14 fw-500 mb-2" style="color: #6b7280;">active habits</span>
          </div>
          <div class="w-100 mt-auto pt-16 b-t-1-solid" style="border-color: #f3f4f6;">
            <span class="fs-12 fw-600" style="color: #9ca3af;">Consistency 7D: <b style="color: #4b5563;">{{ stats().completionRate7Days }}%</b></span>
          </div>
        </div>
      </div>

      <!-- 4. Weekly Progress Chart -->
      <div class="bg-white p-24 br-16 w-100" style="box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05); box-sizing: border-box;">
        <h2 class="m-0 fs-16 fw-700 mb-24" style="color: #212121;">Weekly Timeline</h2>
        <div class="df fd-r ai-fe jc-sa w-100" style="height: 160px;">
          @for (day of weeklyGraph(); track day.dateLabel) {
            <div class="df fd-c ai-c gap-2 flex-1">
              <div class="w-100 br-8 overflow-hidden df fd-c jc-fe" 
                   style="max-width: 32px; height: 120px; background-color: #f8fafc;">
                 <div class="w-100 br-8" 
                      [style.height]="day.percentage + '%'" 
                      [style.background-color]="day.count > 0 ? '#10b981' : 'transparent'"
                      style="transition: height 0.6s cubic-bezier(0.4, 0, 0.2, 1); min-height: 4px;">
                 </div>
              </div>
              <span class="fs-12 fw-600" style="color: #9ca3af;">{{ day.dateLabel }}</span>
            </div>
          }
        </div>
      </div>

      <!-- 5. Insights Grid -->
      <div class="df fd-r flex-wrap gap-4 w-100 pb-24">
        <!-- Top Habit -->
        <div class="bg-white br-16 p-20 flex-1 df fd-r ai-c gap-4" style="min-width: 250px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05); box-sizing: border-box;">
            <div class="df ai-c jc-c br-pill text-white" style="width: 48px; height: 48px; background-color: #f59e0b; min-width: 48px;">
              <mat-icon>military_tech</mat-icon>
            </div>
            <div class="df fd-c overflow-hidden">
              <span class="fs-12 fw-600" style="color: #9ca3af;">Top Habit</span>
              <span class="fs-16 fw-700 truncate" style="color: #212121;">{{ stats().topHabitName }}</span>
            </div>
            <span class="ml-auto fs-16 fw-800" style="color: #f59e0b;">{{ stats().topHabitScore }}x</span>
        </div>

        <!-- Missed Habits -->
        <div class="bg-white br-16 p-20 flex-1 df fd-r ai-c gap-4" style="min-width: 250px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05); box-sizing: border-box;">
            <div class="df ai-c jc-c br-pill text-white" style="width: 48px; height: 48px; background-color: #ef4444; min-width: 48px;">
              <mat-icon>warning_amber</mat-icon>
            </div>
            <div class="df fd-c overflow-hidden">
              <span class="fs-12 fw-600" style="color: #9ca3af;">Missed Today</span>
              @if (stats().missedHabits.length > 0) {
                <span class="fs-14 fw-600 truncate" style="color: #212121;">
                  {{ stats().missedHabits.join(', ') }}
                </span>
              } @else {
                <span class="fs-14 fw-600" style="color: #10b981;">You're all caught up!</span>
              }
            </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './dashboard.scss' // Keeping a hook just in case, but styled perfectly inline
})
export class Dashboard implements OnInit {
  private habitService = inject(HabitService);
  private habitLogService = inject(HabitLogService);

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
    missedHabits: []
  });

  weeklyGraph = signal<{ dateLabel: string; count: number; percentage: number }[]>([]);

  async ngOnInit() {
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
        return Math.floor(new Date(Number(yy), Number(mm)-1, Number(dd)).getTime() / msInDay);
    });

    let bestStreak = 0;
    let currentStreak = 0;

    if (epochDays.length > 0) {
        let tempStreak = 1;
        bestStreak = 1;
        for (let i = 0; i < epochDays.length - 1; i++) {
            if (epochDays[i] - epochDays[i+1] === 1) {
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
                if (epochDays[i] - epochDays[i+1] === 1) {
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
      missedHabits
    });
  }
}
