import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 't-confirm-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title class="m-0 pt-24 px-24 pb-8 fw-700">{{ data.title }}</h2>
    <mat-dialog-content class="px-24 pt-8">
      <p class="m-0 fs-16 text-secondary" style="line-height: 1.5;">{{ data.message }}</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end" class="px-24 pb-24 pt-16">
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-flat-button color="warn" [mat-dialog-close]="true">Confirm Delete</button>
    </mat-dialog-actions>
  `
})
export class ConfirmDialog {
  data = inject(MAT_DIALOG_DATA);
}
