import { Component, output, input, OnInit, signal } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface DateObj {
  date: Date;
  dayName: string;
  dayNumber: number;
  dateStr: string;
}

@Component({
  selector: 't-date-strip',
  standalone: true,
  imports: [TitleCasePipe, MatIconModule, MatButtonModule],
  template: `
    <div class="df fd-r ai-c gap-1 w-100 px-24 pb-24" style="box-sizing: border-box;">
      <button mat-icon-button (click)="shiftDays(-7)" style="color: #a1a1aa; flex-shrink: 0;" aria-label="Previous week">
        <mat-icon>chevron_left</mat-icon>
      </button>

      <!-- Horizontal scrolling date strip -->
      <div class="df fd-r jc-sb ai-c w-100 overflow-x-auto hide-scrollbar scroll-smooth">
        @for(day of dateStrip(); track day.dateStr) {
          <div class="df fd-c ai-c gap-2 cursor-pointer" (click)="onSelectDate(day.dateStr)" style="min-width: 48px;">
              <span class="fs-12 fw-600 transition-all" [style.color]="day.dateStr === activeDate() ? '#212121' : '#a1a1aa'">
                  {{ day.dayName | titlecase }}
              </span>
              <div class="df ai-c jc-c br-pill fw-600 fs-16 transition-all"
                  style="width: 48px; height: 48px; box-sizing: border-box;"
                  [style.background-color]="day.dateStr === activeDate() ? '#2f343b' : 'transparent'"
                  [style.color]="day.dateStr === activeDate() ? '#ffffff' : '#212121'"
                  [style.box-shadow]="day.dateStr === activeDate() ? '0 8px 16px rgba(47, 52, 59, 0.3)' : 'none'">
                  {{ day.dayNumber }}
              </div>
          </div>
        }
      </div>

      <button mat-icon-button (click)="shiftDays(7)" style="color: #a1a1aa; flex-shrink: 0;" aria-label="Next week">
        <mat-icon>chevron_right</mat-icon>
      </button>
    </div>
  `
})
export class DateStripComponent implements OnInit {
  activeDate = input.required<string>(); // The currently selected date
  dateSelected = output<string>();       // Emit when a user clicks a day
  
  dateStrip = signal<DateObj[]>([]);
  private centerDate = new Date(); // Center of our sliding window

  ngOnInit() {
    // try to center around the activeDate if passed
    if (this.activeDate()) {
      const [y, m, d] = this.activeDate().split('-');
      this.centerDate = new Date(Number(y), Number(m)-1, Number(d));
    }
    this.centerDate.setHours(0, 0, 0, 0);
    this.generateDateStrip();
  }

  getLocalFormattedDate(date: Date): string {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  generateDateStrip() {
    const dates: DateObj[] = [];
    const base = new Date(this.centerDate);
    
    // Generate exactly 7 days (-3 to +3 relative to centerDate)
    for (let i = -3; i <= 3; i++) {
      const d = new Date(base);
      d.setDate(base.getDate() + i);
      
      dates.push({
        date: d,
        dayName: d.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase(),
        dayNumber: d.getDate(),
        dateStr: this.getLocalFormattedDate(d)
      });
    }
    this.dateStrip.set(dates);
  }

  shiftDays(amount: number) {
    this.centerDate.setDate(this.centerDate.getDate() + amount);
    this.generateDateStrip();
  }

  onSelectDate(dateStr: string) {
    this.dateSelected.emit(dateStr);
  }
}
