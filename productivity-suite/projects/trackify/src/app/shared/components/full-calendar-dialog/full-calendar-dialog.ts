import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CalendarGridComponent } from '../calendar-grid/calendar-grid';

@Component({
  selector: 't-full-calendar-dialog',
  standalone: true,
  imports: [MatDialogModule, CalendarGridComponent],
  template: `
    <div class="full-calendar-dialog-container">
      <t-calendar-grid 
        [initialDate]="data.selectedDate" 
        (dateSelected)="onDateSelected($event)" 
      />
    </div>
  `,
  styles: [`
    .full-calendar-dialog-container {
      padding: 0;
      overflow: hidden;
      border-radius: 24px;
    }
  `]
})
export class FullCalendarDialogComponent {
  private dialogRef = inject(MatDialogRef<FullCalendarDialogComponent>);
  public data = inject(MAT_DIALOG_DATA);

  onDateSelected(dateStr: string) {
    this.dialogRef.close(dateStr);
  }
}
