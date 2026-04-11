import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { HabitService } from '../../services/habit.service';
import { HabitLogService } from '../../services/habit-log.service';
import { Habit } from '../../models/habit.model';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { TitleCasePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HabitFrequency } from '../../enums/habit-frequency.enum';
import { Days } from '../../enums/days.enum';
import { DateStripComponent } from '../shared/components/date-strip/date-strip';

interface TodayHabitView {
  habit: Habit;
  completed: boolean;
}



@Component({
  selector: 't-today',
  standalone: true,
  imports: [MatListModule, MatIconModule, MatCheckboxModule, MatButtonModule, TitleCasePipe, RouterModule, DateStripComponent],
  templateUrl: './today.html',
  styleUrl: './today.scss',
})
export class Today implements OnInit {
  private habitService = inject(HabitService);
  private habitLogService = inject(HabitLogService);

  activeDateStr = signal<string>('');
  habitsView = signal<TodayHabitView[]>([]);

  activeDateDisplay = computed(() => {
    const dStr = this.activeDateStr();
    if (!dStr) return '';
    const [y, m, d] = dStr.split('-');
    const dateObj = new Date(Number(y), Number(m) - 1, Number(d));
    return dateObj.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  });

  ngOnInit() {
    this.activeDateStr.set(this.getLocalFormattedDate(new Date()));
    this.loadHabitsForActiveDate();
  }

  getLocalFormattedDate(date: Date): string {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  selectDate(dateStr: string) {
    this.activeDateStr.set(dateStr);
    this.loadHabitsForActiveDate();
  }

  async loadHabitsForActiveDate() {
    const allHabits = await this.habitService.loadHabits();
    const currentLogs = await this.habitLogService.getLogsForDate(this.activeDateStr());

    const completedIds = new Set(currentLogs.map(l => l.habitId));

    // Construct local explicit Date parsing mitigating timezone displacement risks
    const [y, m, d] = this.activeDateStr().split('-');
    const activeDateObj = new Date(Number(y), Number(m) - 1, Number(d));

    const jsDay = activeDateObj.getDay();
    const mapDayToEnum: Record<number, Days> = {
      0: Days.Sunday,
      1: Days.Monday,
      2: Days.Tuesday,
      3: Days.Wednesday,
      4: Days.Thursday,
      5: Days.Friday,
      6: Days.Saturday
    };
    const activeEnumDay = mapDayToEnum[jsDay];

    const targetActiveHabits = allHabits.filter(habit => {
      // Strict universal daily habits pass naturally
      if (habit.frequency === HabitFrequency.Daily) {
        return true;
      }

      // For Weekly (or legacy Custom) configurations, strict inclusion logic applies
      if (habit.days && Array.isArray(habit.days) && habit.days.length > 0) {
        return habit.days.includes(activeEnumDay);
      }

      // If it is NOT daily, but has NO explicitly bound custom days defined, 
      // it suppresses defensively rather than spanning across every invalid day arbitrarily.
      return false;
    });

    this.habitsView.set(targetActiveHabits.map(habit => ({
      habit,
      completed: completedIds.has(habit.id!)
    })));
  }

  async toggleHabit(habitId: number) {
    const newState = await this.habitLogService.toggleCompletion(habitId, this.activeDateStr());
    this.habitsView.update(current =>
      current.map(item =>
        item.habit.id === habitId ? { ...item, completed: newState } : item
      )
    );
  }
}
