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
  templateUrl: './date-strip.html',
  styleUrl: './date-strip.scss'
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
