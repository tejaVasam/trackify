import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HabitFrequency } from '../../../../enums/habit-frequency.enum';
import { DurationPipe } from '../../../shared/pipes/duration.pipe';

@Component({
  selector: 't-habit-card',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, DurationPipe],
  templateUrl: './habit-card.html'
})
export class HabitCard {
  habit = input.required<any>();
  allDays = input<any[]>([]);
  
  edit = output<void>();
  delete = output<void>();
  view = output<void>();

  HabitFrequency = HabitFrequency;

  onEdit(event: Event) {
    event.stopPropagation();
    this.edit.emit();
  }

  onDelete(event: Event) {
    event.stopPropagation();
    this.delete.emit();
  }

  onView() {
    this.view.emit();
  }
}
