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
import { CreateHabit } from '../habit/create-habit/create-habit';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 't-categories',
  standalone: true,
  imports: [FormsModule, MatListModule, MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule, MatExpansionModule, MatTooltipModule, CreateHabit, MatSidenavModule],
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
  editingCategoryId = signal<number | null>(null);
  editCategoryName = '';
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

  startEdit(category: Category, event: Event) {
    event.stopPropagation();
    this.editingCategoryId.set(category.id!);
    this.editCategoryName = category.name;
  }

  cancelEdit(event: Event) {
    event.stopPropagation();
    this.editingCategoryId.set(null);
    this.editCategoryName = '';
  }

  async saveCategory(category: Category, event: Event) {
    event.stopPropagation();
    const newName = this.editCategoryName.trim();
    if (newName && newName !== category.name) {
      if (this.categories().some(cat => cat.id !== category.id && cat.name.toLowerCase() === newName.toLowerCase())) {
        this.snackBar.open('Category already exists', 'Close', { duration: 2000 });
        return;
      }
      await this.categoryService.updateCategory(category.id!, newName);
      await this.loadCategories();
    }
    this.editingCategoryId.set(null);
    this.editCategoryName = '';
  }

  drawerOpened = signal<boolean>(false);
  selectedCategoryIdForHabit = signal<number | null>(null);

  openCreateHabitDrawer(categoryId: number, event: Event) {
    event.stopPropagation();
    this.selectedCategoryIdForHabit.set(categoryId);
    this.drawerOpened.set(true);
  }

  onDrawerClose(refresh: boolean) {
    this.drawerOpened.set(false);
    this.selectedCategoryIdForHabit.set(null);
    if (refresh) {
      this.loadCategories();
    }
  }
}
