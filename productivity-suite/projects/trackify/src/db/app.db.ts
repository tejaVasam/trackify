import Dexie, { Table } from 'dexie';
import { Habit } from '../models/habit.model';
import { Category } from '../models/category.model';
import { HabitLog } from '../models/habit-log.model';
import { User } from '../models/user.model';
import { Task } from '../models/task.model';
export class AppDB extends Dexie {
  habits!: Table<Habit, number>;
  habitLogs!: Table<HabitLog, number>;
  categories!: Table<Category, number>;
  users!: Table<User, number>;
  tasks!: Table<Task, number>;

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

    this.version(4).stores({
      users: '++id, name' // Users profile configuration tracking table
    });

    this.version(5).stores({
      habitLogs: '++id, habitId, dateStr, [habitId+dateStr]'
    });

    this.version(6).stores({
      habits: '++id, name, frequency, position'
    }).upgrade(async tx => {
      const habits = await tx.table('habits').toArray();
      await Promise.all(habits.map((habit, index) => {
        return tx.table('habits').update(habit.id, { position: habit.position ?? index });
      }));
    });

    this.version(7).stores({
      tasks: '++id, title, completed, priority, dueDate'
    });
  }

}

export const db = new AppDB();
