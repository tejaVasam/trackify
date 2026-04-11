import Dexie, { Table } from 'dexie';
import { Habit } from '../models/habit.model';
import { HabitFrequency } from '../enums/habit-frequency.enum';
import { Days } from '../enums/days.enum';
import { Category } from '../models/category.model';

export interface HabitLog {
  id?: number;
  habitId: number;
  dateStr: string; // e.g., 'YYYY-MM-DD'
  completedAt: number; // Unix timestamp
}

export class AppDB extends Dexie {
  habits!: Table<Habit, number>;
  habitLogs!: Table<HabitLog, number>;
  categories!: Table<Category, number>;

  constructor() {
    super('TrackifyDB');

    this.version(1).stores({
      habits: '++id, name, frequency', // Primary key and indexed props
    });

    this.version(2).stores({
      habitLogs: '++id, habitId, dateStr, [habitId+dateStr]' // Combined index to query per-date stats easily
    });

    this.version(3).stores({
      categories: '++id, name' // Standard category table
    });


  }


}

export const db = new AppDB();
