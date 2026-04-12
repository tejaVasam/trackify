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

  async deleteCategory(id: number): Promise<void> {
    await db.categories.delete(id);
  }
}
