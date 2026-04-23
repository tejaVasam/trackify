import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-category-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  template: `
    <h2 mat-dialog-title>Add New Category</h2>
    <mat-dialog-content>
      <mat-form-field appearance="outline" class="w-100 mt-8">
        <mat-label>Category Name</mat-label>
        <input matInput [(ngModel)]="categoryName" placeholder="e.g. Health, Work, Deep Work" autofocus />
      </mat-form-field>
    </mat-dialog-content>
    <mat-dialog-actions align="end" class="gap-2">
      <button mat-button (click)="onCancel()">Cancel</button>
      <button mat-flat-button color="primary" [disabled]="!categoryName.trim()" (click)="onConfirm()">Add Category</button>
    </mat-dialog-actions>
  `,
  styles: [`
    .w-100 { width: 100%; }
    .mt-8 { margin-top: 8px; }
  `]
})
export class AddCategoryDialog {
  private dialogRef = inject(MatDialogRef<AddCategoryDialog>);
  categoryName: string = '';

  onCancel() {
    this.dialogRef.close();
  }

  onConfirm() {
    if (this.categoryName.trim()) {
      this.dialogRef.close(this.categoryName.trim());
    }
  }
}
