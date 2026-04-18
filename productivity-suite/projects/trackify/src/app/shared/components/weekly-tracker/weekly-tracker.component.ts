import { Component, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

interface WeeklyMatrixItem {
  habitId: number;
  name: string;
  days: { dateStr: string; status: 'completed' | 'pending' | 'missed' }[];
}

@Component({
  selector: 'app-weekly-tracker',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './weekly-tracker.component.html',
  styleUrl: './weekly-tracker.component.scss'
})
export class WeeklyTrackerComponent {
  weeklyGraph = input.required<{ dateLabel: string }[]>();
  weeklyMatrix = input.required<WeeklyMatrixItem[]>();
  toggle = output<{ habitId: number, dateStr: string }>();

  toggleGridHabit(habitId: number, dateStr: string) {
    this.toggle.emit({ habitId, dateStr });
  }
}
