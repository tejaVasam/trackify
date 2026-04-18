import { Injectable } from '@angular/core';
import { db } from '../db/app.db';
import { HabitLog } from '../models/habit-log.model';

@Injectable({
  providedIn: 'root'
})
export class HabitLogService {

  async markHabitAsCompleted(habitId: number, dateStr: string, note?: string): Promise<number | void> {
    const existing = await db.habitLogs.where({ habitId, dateStr }).first();
    if (existing && existing.id) {
      return db.habitLogs.update(existing.id, { isCompleted: true, completedAt: Date.now(), note: note || existing.note });
    } else {
      const log: HabitLog = {
        habitId,
        dateStr,
        isCompleted: true,
        completedAt: Date.now(),
        note
      };
      return db.habitLogs.add(log);
    }
  }

  async saveNote(habitId: number, dateStr: string, note: string): Promise<void> {
    const existing = await db.habitLogs.where({ habitId, dateStr }).first();
    if (existing && existing.id) {
      await db.habitLogs.update(existing.id, { note });
    } else {
      await this.markHabitAsCompleted(habitId, dateStr, note);
    }
  }

  async saveLogData(habitId: number, dateStr: string, data: Partial<HabitLog>): Promise<void> {
    const existing = await db.habitLogs.where({ habitId, dateStr }).first();
    if (existing && existing.id) {
      await db.habitLogs.update(existing.id, data);
    } else {
      const log: HabitLog = {
        habitId,
        dateStr,
        isCompleted: false, // Default to false when just adding note/mood
        ...data
      };
      await db.habitLogs.add(log);
    }
  }

  async getLog(habitId: number, dateStr: string): Promise<HabitLog | undefined> {
    return db.habitLogs.where({ habitId, dateStr }).first();
  }


  async removeCompletion(habitId: number, dateStr: string): Promise<void> {
    const existing = await db.habitLogs.where({ habitId, dateStr }).first();
    if (existing && existing.id) {
      await db.habitLogs.update(existing.id, { isCompleted: false, completedAt: undefined });
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
    const log = await db.habitLogs.where({ habitId, dateStr }).first();
    return !!log?.isCompleted;
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

  async getStreakStatus(habitId: number): Promise<{ current: number; longest: number }> {
    const allLogs = await db.habitLogs.where('habitId').equals(habitId).toArray();
    const logs = allLogs.filter(l => l.isCompleted);
    if (logs.length === 0) return { current: 0, longest: 0 };

    // Sort logs by date ascending
    const dates = logs.map(l => l.dateStr).sort();

    const toDate = (str: string) => {
      const parts = str.split('-').map(Number);
      return new Date(parts[0], parts[1] - 1, parts[2]);
    };

    let longest = 0;
    let currentSeq = 0;
    let lastDate: Date | null = null;

    for (const dateStr of dates) {
      const currDate = toDate(dateStr);
      if (lastDate) {
        const diff = Math.round((currDate.getTime() - lastDate.getTime()) / (1000 * 3600 * 24));
        if (diff === 1) {
          currentSeq++;
        } else {
          longest = Math.max(longest, currentSeq);
          currentSeq = 1;
        }
      } else {
        currentSeq = 1;
      }
      lastDate = currDate;
    }
    longest = Math.max(longest, currentSeq);

    // Current Streak logic
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const lastLogDate = toDate(dates[dates.length - 1]);
    const diff = Math.round((today.getTime() - lastLogDate.getTime()) / (1000 * 3600 * 24));

    let current = 0;
    if (diff === 0 || diff === 1) {
      // Find the sequence ending at the last log
      let streak = 1;
      for (let i = dates.length - 2; i >= 0; i--) {
        const d1 = toDate(dates[i + 1]);
        const d2 = toDate(dates[i]);
        const dDiff = Math.round((d1.getTime() - d2.getTime()) / (1000 * 3600 * 24));
        if (dDiff === 1) {
          streak++;
        } else {
          break;
        }
      }
      current = streak;
    }

    return { current, longest };
  }
}

