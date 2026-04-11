import Dexie, { Table } from 'dexie';
import { Habit } from '../models/habit.model';

export class AppDB extends Dexie {
  habits!: Table<Habit, number>;

  constructor() {
    super('TrackifyDB');
    this.version(1).stores({
      habits: '++id, name, frequency', // Primary key and indexed props
    });
  }
}

export const db = new AppDB();
