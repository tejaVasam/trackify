import { Injectable } from '@angular/core';
import { db, HabitLog } from '../db/app.db';

@Injectable({
  providedIn: 'root'
})
export class HabitLogService {
  
  async markHabitAsCompleted(habitId: number, dateStr: string): Promise<number> {
    const log: HabitLog = {
      habitId,
      dateStr,
      completedAt: Date.now()
    };
    return db.habitLogs.add(log);
  }

  async removeCompletion(habitId: number, dateStr: string): Promise<void> {
    const existing = await db.habitLogs.where({ habitId, dateStr }).first();
    if (existing && existing.id) {
      await db.habitLogs.delete(existing.id);
    }
  }

  async toggleCompletion(habitId: number, dateStr: string): Promise<boolean> {
    const isCompleted = await this.isCompleted(habitId, dateStr);
    if (isCompleted) {
      await this.removeCompletion(habitId, dateStr);
      return false; // Habit uncompleted
    } else {
      await this.markHabitAsCompleted(habitId, dateStr);
      return true; // Habit logged as completed
    }
  }

  async isCompleted(habitId: number, dateStr: string): Promise<boolean> {
    const count = await db.habitLogs.where({ habitId, dateStr }).count();
    return count > 0;
  }

  async getLogsForDate(dateStr: string): Promise<HabitLog[]> {
    return db.habitLogs.where('dateStr').equals(dateStr).toArray();
  }

  async getHabitStats(habitId: number): Promise<number> {
    return db.habitLogs.where('habitId').equals(habitId).count();
  }

  async getAllLogs(): Promise<HabitLog[]> {
    return db.habitLogs.toArray();
  }
}
