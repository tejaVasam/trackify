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
  templateUrl: './categories.html',
  styleUrl: './categories.scss'
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
