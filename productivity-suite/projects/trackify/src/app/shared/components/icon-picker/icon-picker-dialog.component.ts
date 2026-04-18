import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 't-icon-picker-dialog',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatDialogModule, MatButtonModule],
  template: `
    <div class="p-24">
      <div class="df fd-r ai-c jc-sb mb-20">
        <h2 class="m-0 fs-20 fw-700">Select Icon</h2>
        <button mat-icon-button mat-dialog-close>
          <mat-icon>close</mat-icon>
        </button>
      </div>
      
      <div class="icon-grid">
        @for (icon of data.icons; track icon) {
          <div 
            class="icon-item" 
            [class.selected]="data.selectedIcon === icon"
            (click)="selectIcon(icon)"
            [attr.title]="icon"
          >
            <mat-icon>{{ icon }}</mat-icon>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .icon-grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 12px;
      max-height: 400px;
      overflow-y: auto;
      padding: 4px;
    }

    .icon-item {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      cursor: pointer;
      border: 1px solid #e2e8f0;
      transition: all 0.2s ease;
      background: white;

      mat-icon {
        font-size: 24px;
        width: 24px;
        height: 24px;
        color: #64748b;
      }

      &:hover {
        background: #f8fafc;
        border-color: var(--primary-500);
        transform: translateY(-2px);
      }

      &.selected {
        background: var(--primary-100);
        border-color: var(--primary-500);
        
        mat-icon {
          color: var(--primary-700);
        }
      }
    }

    .df { display: flex; }
    .fd-r { flex-direction: row; }
    .ai-c { align-items: center; }
    .jc-sb { justify-content: space-between; }
    .mb-20 { margin-bottom: 20px; }
    .p-24 { padding: 24px; }
    .m-0 { margin: 0; }
    .fs-20 { font-size: 20px; }
    .fw-700 { font-weight: 700; }
  `]
})
export class IconPickerDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<IconPickerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { icons: string[], selectedIcon: string }
  ) {}

  selectIcon(icon: string) {
    this.dialogRef.close(icon);
  }
}
