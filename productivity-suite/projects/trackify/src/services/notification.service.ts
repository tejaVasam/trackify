import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HabitService } from './habit.service';
import { HabitLogService } from './habit-log.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private snackBar = inject(MatSnackBar);
  private habitService = inject(HabitService);
  private habitLogService = inject(HabitLogService);
  constructor() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.action === 'mark-done') {
          this.markHabitAsDone(event.data.habitId);
        }
      });
    }
  }

  private notifiedToday = new Set<string>();

  async requestPermission(): Promise<boolean> {
    if (!('Notification' in window)) {
      this.snackBar.open('This browser does not support notifications.', 'OK', { duration: 3000 });
      return false;
    }

    if (Notification.permission === 'granted') {
      return true;
    }

    const permission = await Notification.requestPermission();
    if (permission !== 'granted') {
      this.snackBar.open('Notification permission was denied. Reminders won\'t work.', 'OK', {
        duration: 5000,
      });
      return false;
    }

    return true;
  }

  async sendNotification(habitId: number, name: string, icon: string) {
    if (Notification.permission !== 'granted') return;

    try {
      const registration = await navigator.serviceWorker.ready;
      
      const options: any = {
        body: `Time for your habit: ${name}!`,
        icon: `/assets/icons/icon-128x128.png`,
        badge: `/assets/icons/icon-72x72.png`,
        data: { habitId },
        vibrate: [200, 100, 200],
        tag: `habit-${habitId}`,
        actions: [
          { action: 'mark-done', title: 'Mark as Done' },
          { action: 'close', title: 'Close' }
        ]
      };


      await registration.showNotification(`Trackify: ${name}`, options);
    } catch (err) {
      console.error('Error showing notification', err);
      // Fallback if SW not ready
      new Notification(`Trackify: ${name}`, { body: `Time to ${name}!` });
    }
  }

  async checkReminders() {
    const habits = await this.habitService.loadHabits();
    const now = new Date();
    const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    const dateStr = now.toISOString().split('T')[0];
    
    // Cleanup old notified set if date changed
    const todayPrefix = `${dateStr}-`;
    // (In a real app, I'd clear old ones, but for simplicity here we just check if it's already in the set)

    const sub = habits.filter(h => 
        h.reminderEnabled && 
        h.reminderTime === currentTime && 
        !this.notifiedToday.has(`${dateStr}-${h.id}`)
    );
    
    for (const habit of sub) {
        const isAlreadyDone = await this.habitLogService.isCompleted(habit.id, dateStr);
        if (!isAlreadyDone) {
            this.sendNotification(habit.id, habit.name, habit.icon);
            this.notifiedToday.add(`${dateStr}-${habit.id}`);
        }
    }
  }

  async markHabitAsDone(habitId: number) {
    const dateStr = new Date().toISOString().split('T')[0];
    await this.habitLogService.markHabitAsCompleted(habitId, dateStr);
    this.snackBar.open('Habit marked as done!', 'OK', { duration: 2000 });
  }
}

