import { Component, inject, OnInit, signal } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category.model';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 't-categories',
  standalone: true,
  imports: [FormsModule, MatListModule, MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule],
  template: `
    <div class="p-16 df fd-c gap-16">
      <div class="df fd-c gap-4">
        <h2 class="m-0">Categories</h2>
        <p class="m-0 text-secondary">Manage your habit categories</p>
      </div>
      
      <form class="df ai-c gap-8" (ngSubmit)="addCategory()">
        <mat-form-field appearance="outline" class="w-100 m-0 flex-1" style="margin-bottom: -1.25em;">
          <mat-label>New Category</mat-label>
          <input matInput [(ngModel)]="newCategoryName" name="catName" placeholder="e.g. Finances" required>
        </mat-form-field>
        <button mat-flat-button color="primary" type="submit" [disabled]="!newCategoryName">Add</button>
      </form>

      <mat-list>
        @for(cat of categories(); track cat.id) {
          <mat-list-item class="b-1-solid br-8" style="margin-bottom: 8px;">
            <span matListItemTitle>{{ cat.name }}</span>
            <button matListItemMeta mat-icon-button color="warn" (click)="deleteCategory(cat.id!)">
              <mat-icon>delete</mat-icon>
            </button>
          </mat-list-item>
        }
      </mat-list>
    </div>
  `
})
export class Categories implements OnInit {
  categoryService = inject(CategoryService);
  categories = signal<Category[]>([]);
  newCategoryName = '';

  ngOnInit() {
    this.loadCategories();
  }

  async loadCategories() {
    this.categories.set(await this.categoryService.getCategories());
  }

  async addCategory() {
    if (this.newCategoryName.trim()) {
      await this.categoryService.addCategory(this.newCategoryName.trim());
      this.newCategoryName = '';
      await this.loadCategories();
    }
  }

  async deleteCategory(id: number) {
    await this.categoryService.deleteCategory(id);
    await this.loadCategories();
  }
}
