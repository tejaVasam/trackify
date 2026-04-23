import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { HabitService } from '../../services/habit.service';
import { HabitLogService } from '../../services/habit-log.service';
import { CelebrationService } from '../../services/celebration.service';
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
import { db } from '../../db/app.db';
import { TimeAvailabilityComponent } from '../shared/components/time-availability/time-availability';
import { DurationPipe } from '../shared/pipes/duration.pipe';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { HabitLogNoteDialog } from '../shared/components/habit-log-note-dialog/habit-log-note-dialog';

interface TodayHabitView {
  habit: Habit;
  completed: boolean;
  streak: number;
  hasNote: boolean;
}

@Component({
  selector: 't-today',
  standalone: true,
  imports: [MatListModule, MatIconModule, MatCheckboxModule, MatButtonModule, RouterModule, DateStripComponent, TimeAvailabilityComponent, MatDialogModule, DurationPipe, MatSnackBarModule],
  templateUrl: './today.html',
  styleUrl: './today.scss',
})
export class Today implements OnInit {
  private habitService = inject(HabitService);
  private habitLogService = inject(HabitLogService);
  private celebrationService = inject(CelebrationService);
  private dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);

  activeDateStr = signal<string>('');
  habitsView = signal<TodayHabitView[]>([]);

  totalDedicatedMinutes = computed(() => {
    return this.habitsView().reduce((acc, item) => acc + (item.habit.duration || 0), 0);
  });

  completedMinutes = computed(() => {
    return this.habitsView()
      .filter(item => item.completed)
      .reduce((acc, item) => acc + (item.habit.duration || 0), 0);
  });

  activeDateDisplay = computed(() => {
    const dStr = this.activeDateStr();
    if (!dStr) return '';
    const [y, m, d] = dStr.split('-');
    const dateObj = new Date(Number(y), Number(m) - 1, Number(d));
    return dateObj.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  });

  userName = signal<string>('Budi');
  greeting = computed(() => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Morning';
    if (hour < 17) return 'Afternoon';
    return 'Evening';
  });

  async ngOnInit() {
    this.activeDateStr.set(this.getLocalFormattedDate(new Date()));
    this.loadHabitsForActiveDate();

    const loadedUser = await db.users.orderBy('id').first();
    if (loadedUser) {
      this.userName.set(loadedUser.name.split(' ')[0]);
    }
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

    const completedIds = new Set(currentLogs.filter(l => l.isCompleted).map(l => l.habitId));

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

    const viewData = await Promise.all(targetActiveHabits.map(async (habit) => {
      const stats = await this.habitLogService.getStreakStatus(habit.id!);
      const log = currentLogs.find(l => l.habitId === habit.id);
      return {
        habit,
        completed: completedIds.has(habit.id!),
        streak: stats.current,
        hasNote: !!(log?.reflectionNote || log?.planNote || log?.mood || (log?.tags && log.tags.length > 0))
      };
    }));

    this.habitsView.set(viewData);
  }

  async toggleHabit(habitId: number) {
    const newState = await this.habitLogService.toggleCompletion(habitId, this.activeDateStr());

    // Get habit name for the message
    const habitItem = this.habitsView().find(h => h.habit.id === habitId);
    const habitName = habitItem?.habit.name || 'Habit';

    const message = newState
      ? `${habitName} marked as completed! 🎉`
      : `${habitName} uncompleted.`;

    if (newState) {
      this.celebrationService.celebrate();
    } else {
      this.celebrationService.uncelebrate();
    }

    this.snackBar.open(message, 'Dismiss', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: newState ? ['success-snackbar'] : ['error-snackbar']
    });

    // Refresh stats for this specific habit to update streak immediately
    const updatedStats = await this.habitLogService.getStreakStatus(habitId);
    
    this.habitsView.update(current =>
      current.map(item =>
        item.habit.id === habitId ? { ...item, completed: newState, streak: updatedStats.current } : item
      )
    );
  }

  async openNoteEditor(item: TodayHabitView) {
    const activeDateStr = this.activeDateStr();
    const [y, m, d] = activeDateStr.split('-');
    const activeDate = new Date(Number(y), Number(m) - 1, Number(d));
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const isInFuture = activeDate.getTime() > now.getTime();

    const logs = await this.habitLogService.getLogsForDate(activeDateStr);
    const log = logs.find(l => l.habitId === item.habit.id) || { 
      habitId: item.habit.id, 
      dateStr: activeDateStr, 
      completedAt: Date.now() 
    };

    const dialogRef = this.dialog.open(HabitLogNoteDialog, {
      width: '450px',
      autoFocus: false,
      restoreFocus: false,
      data: {
        dateStr: activeDateStr,
        habitName: item.habit.name,
        isCompleted: item.completed,
        isInFuture: isInFuture,
        log: log
      }
    });

    dialogRef.afterClosed().subscribe(async (result) => {
      if (result) {
        await this.habitLogService.saveLogData(item.habit.id!, activeDateStr, result);
        this.loadHabitsForActiveDate(); // Refresh to show note indicator if implemented
      }
    });
  }
}
