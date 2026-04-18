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

  async updateAllSchedules() {
    if (!('Notification' in window) || Notification.permission !== 'granted') return;
    
    const habits = await this.habitService.loadHabits();
    const registration = await navigator.serviceWorker.ready;

    // Clear existing notifications that might be scheduled (or just overwrite them by tag)
    // The Triggers API will handle overwriting if we use the same tag: habit-{id}

    for (const habit of habits) {
      if (habit.reminderEnabled && habit.startTime) {
        await this.scheduleNotification(habit);
      }
    }
  }

  private async scheduleNotification(habit: any) {
    const registration = await navigator.serviceWorker.ready;
    
    // Calculate next occurrence
    const nextTriggerTime = this.calculateNextTrigger(habit.startTime, habit.reminderOffset || 0, habit.frequency, habit.days);
    
    if (!nextTriggerTime) return;

    const options: any = {
      body: `Time for your habit: ${habit.name}!`,
      icon: `/assets/icons/icon-128x128.png`,
      badge: `/assets/icons/icon-72x72.png`,
      data: { habitId: habit.id },
      vibrate: [200, 100, 200],
      tag: `habit-${habit.id}`,
      actions: [
        { action: 'mark-done', title: 'Mark as Done' },
        { action: 'close', title: 'Close' }
      ]
    };

    // Check for Trigger Support
    if (('showTrigger' in Notification.prototype) && ('TimestampTrigger' in window)) {
      (options as any).showTrigger = new (window as any).TimestampTrigger(nextTriggerTime);
    }

    try {
      await registration.showNotification(`Trackify: ${habit.name}`, options);
      console.log(`Scheduled notification for ${habit.name} at ${new Date(nextTriggerTime).toLocaleString()}`);
    } catch (err) {
      console.error('Error scheduling notification', err);
    }
  }

  private calculateNextTrigger(startTimeStr: string, offsetMins: number, frequency: number, days?: number[]): number | null {
    const [hours, minutes] = startTimeStr.split(':').map(Number);
    const now = new Date();
    let triggerDate = new Date();
    triggerDate.setHours(hours, minutes, 0, 0);

    // Apply offset
    if (offsetMins > 0) {
      triggerDate.setMinutes(triggerDate.getMinutes() - offsetMins);
    }

    // If time has already passed today, move to tomorrow as a baseline
    if (triggerDate <= now) {
      triggerDate.setDate(triggerDate.getDate() + 1);
    }

    // Specific Days logic (Weekly)
    if (frequency === 1 && days && days.length > 0) {
      // HabitFrequency.Weekly is 1
      // Find the next day in the list
      // 0=Sunday, 1=Monday, ..., 6=Saturday (Check your enum mapping)
      // Assuming 0 is Sunday based on getDay()
      
      let found = false;
      for (let i = 0; i < 7; i++) {
        const currentDay = triggerDate.getDay();
        if (days.includes(currentDay)) {
          found = true;
          break;
        }
        triggerDate.setDate(triggerDate.getDate() + 1);
      }
      if (!found) return null;
    }

    return triggerDate.getTime();
  }

  async markHabitAsDone(habitId: number) {
    const dateStr = new Date().toISOString().split('T')[0];
    await this.habitLogService.markHabitAsCompleted(habitId, dateStr);
    this.snackBar.open('Habit marked as done!', 'OK', { duration: 2000 });
    
    // Reschedule the next one after marking as done
    const habit = await this.habitService.getHabit(habitId);
    if (habit) {
      this.scheduleNotification(habit);
    }
  }
}

