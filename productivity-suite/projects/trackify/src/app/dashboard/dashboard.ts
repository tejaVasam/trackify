import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ProgressChartComponent } from '../shared/components/progress-chart/progress-chart.component';

import { HabitService } from '../../services/habit.service';
import { HabitLogService } from '../../services/habit-log.service';
import { CategoryService } from '../../services/category.service';

import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { HabitFrequency } from '../../enums/habit-frequency.enum';
import { Days } from '../../enums/days.enum';
import { db } from '../../db/app.db';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { WeeklyTrackerComponent } from '../shared/components/weekly-tracker/weekly-tracker.component';
import { User } from '../../models/user.model';

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
  imports: [MatIconModule, RouterModule, BaseChartDirective, ProgressChartComponent, WeeklyTrackerComponent],
  templateUrl: './dashboard.html',
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
      showWelcome: habits.length === 0,
      noCategories: categories.length === 0
    });
  }


  async toggleGridHabit(habitId: number, dateStr: string) {
    await this.habitLogService.toggleCompletion(habitId, dateStr);
    await this.calculateMetrics();
  }


}

