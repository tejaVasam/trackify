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

    this.on('ready', async () => {
      if (await this.categories.count() === 0) {
        await this.categories.bulkAdd([
          { name: 'Health' },
          { name: 'Learning' },
          { name: 'Work' },
          { name: 'Fitness' }
        ]);
      }

      if (await this.habits.count() === 0) {
        await this.populate();
      }
    });
  }

  async populate() {
    await this.habits.bulkAdd([
      {
        id: 1,
        name: 'Drink Water',
        icon: 'water_drop',
        color: '#2196f3',
        description: 'Drink 8 glasses of water every day',
        frequency: HabitFrequency.Daily,
        category: { id: 1, name: 'Health' }
      },
      {
        id: 2,
        name: 'Read a Book',
        icon: 'menu_book',
        color: '#4caf50',
        description: 'Read at least 15 pages',
        frequency: HabitFrequency.Daily,
        category: { id: 2, name: 'Learning' }
      },
      {
        id: 3,
        name: 'Exercise',
        icon: 'fitness_center',
        color: '#f44336',
        description: 'Go to the gym or workout at home',
        frequency: HabitFrequency.Custom,
        days: [Days.Monday, Days.Wednesday, Days.Friday],
        category: { id: 1, name: 'Health' }
      }
    ]);
  }
}

export const db = new AppDB();
