import { Component, input, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BaseControl } from '../../base-control';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'lib-duration-picker',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './duration-picker.html'
})
export class DurationPickerComponent extends BaseControl<string> {
  hours = signal<number | null>(null);
  minutes = signal<number | null>(null);

  constructor() {
    super();
    // React to external value changes
    effect(() => {
      const val = this.internalValue();
      if (val) {
        const [h, m] = val.split(':').map(n => Number(n) || 0);
        this.hours.set(h);
        this.minutes.set(m);
      } else {
        this.hours.set(null);
        this.minutes.set(null);
      }
    });
  }

  onTimeChange() {
    const h = this.hours() || 0;
    const m = this.minutes() || 0;
    const formatted = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
    this.updateValue(formatted);
  }
}
