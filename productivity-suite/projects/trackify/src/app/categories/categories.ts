import { MatExpansionModule } from '@angular/material/expansion';
import { HabitService } from '../../services/habit.service';
import { Router } from '@angular/router';

import { MatTooltipModule } from '@angular/material/tooltip';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';
import { Habit } from '../../models/habit.model';

@Component({
  selector: 't-categories',
  standalone: true,
  imports: [FormsModule, MatListModule, MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule, MatExpansionModule, MatTooltipModule],
  templateUrl: './categories.html',
  styleUrl: './categories.scss'
})
export class Categories implements OnInit {
  categoryService = inject(CategoryService);
  habitService = inject(HabitService);
  router = inject(Router);
  categories = signal<Category[]>([]);
  habitCounts = signal<Record<number, number>>({});
  habitsByCategory = signal<Record<number, Habit[]>>({});
  newCategoryName = '';
  private snackBar = inject(MatSnackBar);

  ngOnInit() {
    this.loadCategories();
  }

  async loadCategories() {
    const cats = await this.categoryService.getCategories();
    this.categories.set(cats);

    // Calculate habit counts and store habits for each category
    const habits = await this.habitService.loadHabits();
    const counts: Record<number, number> = {};
    const habitMap: Record<number, Habit[]> = {};
    
    habits.forEach(h => {
      if (h.category?.id !== undefined) {
        counts[h.category.id] = (counts[h.category.id] || 0) + 1;
        if (!habitMap[h.category.id]) {
          habitMap[h.category.id] = [];
        }
        habitMap[h.category.id].push(h);
      }
    });
    this.habitCounts.set(counts);
    this.habitsByCategory.set(habitMap);
  }

  getHabits(categoryId: number): Habit[] {
    return this.habitsByCategory()[categoryId] || [];
  }

  getHabitCount(categoryId: number): number {
    return this.habitCounts()[categoryId] || 0;
  }

  async addCategory() {
    if (this.newCategoryName.trim()) {
      if (this.checkIfCategoryAlreadyExists()) {
        this.snackBar.open('Category already exists', 'Close', {
          duration: 2000,
        });
        return;
      }
      await this.categoryService.addCategory(this.newCategoryName.trim());
      this.newCategoryName = '';
      await this.loadCategories();
    }
  }

  checkIfCategoryAlreadyExists(): boolean {
    return this.categories().some(cat => cat.name.toLowerCase() === this.newCategoryName.trim().toLowerCase());
  }

  async deleteCategory(id: number) {
    if (this.getHabitCount(id) > 0) {
      this.snackBar.open('Cannot delete category with habits assigned to it', 'Close', {
        duration: 3000,
      });
      return;
    }
    await this.categoryService.deleteCategory(id);
    await this.loadCategories();
  }

  navigateToDetails(id: number) {
    this.router.navigate(['/categories', id]);
  }
}
