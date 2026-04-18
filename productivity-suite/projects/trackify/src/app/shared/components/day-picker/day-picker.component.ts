import { Component, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Days } from '../../../../enums/days.enum';

@Component({
  selector: 't-day-picker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './day-picker.component.html',
  styleUrl: './day-picker.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DayPickerComponent,
      multi: true
    }
  ]
})
export class DayPickerComponent implements ControlValueAccessor {
  days = [
    { label: 'Monday', value: Days.Monday },
    { label: 'Tuesday', value: Days.Tuesday },
    { label: 'Wednesday', value: Days.Wednesday },
    { label: 'Thursday', value: Days.Thursday },
    { label: 'Friday', value: Days.Friday },
    { label: 'Saturday', value: Days.Saturday },
    { label: 'Sunday', value: Days.Sunday }
  ];

  selectedDays = signal<number[]>([]);

  onChange: (val: number[]) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: number[]): void {
    this.selectedDays.set(value || []);
  }

  registerOnChange(fn: (val: number[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  toggleDay(day: number) {
    const current = this.selectedDays();
    const index = current.indexOf(day);
    let updated: number[];
    if (index > -1) {
      updated = current.filter(d => d !== day);
    } else {
      updated = [...current, day];
    }
    this.selectedDays.set(updated);
    this.onChange(updated);
    this.onTouched();
  }

  isSelected(day: number): boolean {
    return this.selectedDays().includes(day);
  }
}
