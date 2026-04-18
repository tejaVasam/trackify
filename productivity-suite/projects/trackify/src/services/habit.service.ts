import { Injectable, signal } from '@angular/core';
import { db } from '../db/app.db';
import { Habit } from '../models/habit.model';

@Injectable({
  providedIn: 'root'
})
export class HabitService {
 

  constructor() {
    this.loadHabits();
  }

  // Reload habits from Dexie and update signal
  async loadHabits(): Promise<Habit[]> {
   return db.habits.orderBy('position').toArray();
  }

  // Get a single habit by ID
  async getHabit(id: number): Promise<Habit | undefined> {
    return db.habits.get(id);
  }

  // Create a new habit
  async addHabit(habit: Omit<Habit, 'id' | 'position'>): Promise<number> {
    const allHabits = await this.loadHabits();
    const maxPosition = allHabits.length > 0 ? Math.max(...allHabits.map(h => h.position ?? 0)) : -1;
    const id = await db.habits.add({ ...habit, position: maxPosition + 1 } as Habit);
    await this.loadHabits();
    return id;
  }

  // Update an existing habit
  async updateHabit(id: number, updates: Partial<Omit<Habit, 'id'>>): Promise<number> {
    const updatedCount = await db.habits.update(id, updates);
    if (updatedCount) {
      await this.loadHabits();
    }
    return updatedCount;
  }

  // Update multiple habits (used for reordering)
  async updateHabitPositions(habits: Habit[]): Promise<void> {
    const cleanHabits = habits.map(({ currentStreak, longestStreak, ...h }: any) => h);
    await db.habits.bulkPut(cleanHabits);
    await this.loadHabits();
  }

  // Delete a habit
  async deleteHabit(id: number): Promise<void> {
    await db.habits.delete(id);
    // Explicitly cascade delete habit history records natively tracking to this parent
    await db.habitLogs.where('habitId').equals(id).delete(); 
    await this.loadHabits();
  }
}
