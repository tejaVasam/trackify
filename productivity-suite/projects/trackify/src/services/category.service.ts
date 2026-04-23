import { Injectable } from '@angular/core';
import { db } from '../db/app.db';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  async getCategories(): Promise<Category[]> {
    return db.categories.toArray();
  }

  async addCategory(name: string): Promise<number> {
    return db.categories.add({ name });
  }

  async updateCategory(id: number, name: string): Promise<number> {
    return db.categories.update(id, { name });
  }

  async deleteCategory(id: number): Promise<void> {
    await db.categories.delete(id);
  }
}
