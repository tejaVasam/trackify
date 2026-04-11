import { Injectable, signal } from '@angular/core';
import { db } from '../db/app.db';
import { Habit } from '../models/habit.model';

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  // Signal to hold the current list of habits for reactive UI
  habits = signal<Habit[]>([]);

  constructor() {
    this.loadHabits();
  }

  // Reload habits from Dexie and update signal
  async loadHabits(): Promise<void> {
    const allHabits = await db.habits.toArray();
    this.habits.set(allHabits);
  }

  // Get a single habit by ID
  async getHabit(id: number): Promise<Habit | undefined> {
    return db.habits.get(id);
  }

  // Create a new habit
  async addHabit(habit: Omit<Habit, 'id'>): Promise<number> {
    const id = await db.habits.add(habit as Habit);
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

  // Delete a habit
  async deleteHabit(id: number): Promise<void> {
    await db.habits.delete(id);
    await this.loadHabits();
  }
}
