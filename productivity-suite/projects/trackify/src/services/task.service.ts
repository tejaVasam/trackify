import { Injectable } from '@angular/core';
import { db } from '../db/app.db';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  async getTasks(): Promise<Task[]> {
    return db.tasks.reverse().sortBy('createdAt');
  }

  async addTask(task: Omit<Task, 'id'>): Promise<number> {
    return db.tasks.add(task as Task);
  }

  async updateTask(id: number, changes: Partial<Task>): Promise<number> {
    return db.tasks.update(id, changes);
  }

  async deleteTask(id: number): Promise<void> {
    await db.tasks.delete(id);
  }

  async toggleTaskStatus(id: number, currentStatus: boolean): Promise<number> {
    return db.tasks.update(id, { completed: !currentStatus });
  }
}
