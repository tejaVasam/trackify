import { Component, EventEmitter, Input, OnInit, Output, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

export interface CalendarDay {
  date: Date;
  dateStr: string;
  dayNum: number;
  isToday: boolean;
  isCurrentMonth: boolean;
}

@Component({
  selector: 't-calendar-grid',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './calendar-grid.html',
  styles: [`
    .calendar-container {
      min-width: 300px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.05);
    }
    .bg-surface { background-color: #f8fafc; }
    .small-icon-btn { width: 32px; height: 32px; line-height: 32px; color: #64748b; }
    .today-btn { min-width: 50px; height: 32px; padding: 0 8px; color: #64748b; }
    
    .day-cell {
      width: 36px;
      height: 36px;
      background: transparent;
      color: #1e293b;
      cursor: pointer;
    }
    .day-cell:hover { background-color: #f1f5f9; }
    .day-cell.today { 
      color: #3b82f6;
      background-color: #eff6ff;
      border: 1px solid #3b82f6 !important;
    }
    .day-cell.different-month { 
      color: #94a3b8;
      opacity: 0.5;
    }
    .day-cell.selected {
      background-color: #3b82f6 !important;
      color: white !important;
      box-shadow: 0 4px 10px rgba(59, 130, 246, 0.3);
    }
  `]
})
export class CalendarGridComponent implements OnInit {
  @Input() initialDate?: string;
  @Output() dateSelected = new EventEmitter<string>();

  viewDate = signal<Date>(new Date());
  selectedDate = signal<string>('');

  monthDisplay = computed(() => {
    return this.viewDate().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  });

  days = computed(() => {
    const d = this.viewDate();
    const year = d.getFullYear();
    const month = d.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    // Start from the beginning of the week containing the first day
    const startDate = new Date(firstDay);
    startDate.setDate(1 - firstDay.getDay());

    // End at the end of the week containing the last day
    const endDate = new Date(lastDay);
    endDate.setDate(lastDay.getDate() + (6 - lastDay.getDay()));

    const result: CalendarDay[] = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const curr = new Date(startDate);
    while (curr <= endDate) {
      result.push({
        date: new Date(curr),
        dateStr: this.formatDate(curr),
        dayNum: curr.getDate(),
        isToday: curr.getTime() === today.getTime(),
        isCurrentMonth: curr.getMonth() === month
      });
      curr.setDate(curr.getDate() + 1);
    }
    return result;
  });

  ngOnInit() {
    if (this.initialDate) {
      this.selectedDate.set(this.initialDate);
      const [y, m, d] = this.initialDate.split('-').map(Number);
      this.viewDate.set(new Date(y, m - 1, d));
    }
  }

  shiftMonth(amount: number) {
    const next = new Date(this.viewDate());
    next.setMonth(next.getMonth() + amount);
    this.viewDate.set(next);
  }

  goToToday() {
    this.viewDate.set(new Date());
  }

  onDateClick(dateStr: string) {
    this.selectedDate.set(dateStr);
    this.dateSelected.emit(dateStr);
  }

  private formatDate(d: Date): string {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
