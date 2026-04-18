import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 't-time-shower',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './time-shower.html',
  styles: [`
    :host {
      display: inline-block;
    }
  `]
})
export class TimeShowerComponent {
  minutes = input<number>(0);

  formattedTime = computed(() => {
    const totalMins = this.minutes();
    if (!totalMins) return '00:00';
    const h = Math.floor(totalMins / 60);
    const m = totalMins % 60;
    return `${h.toString().padStart(2, '0')}h ${m.toString().padStart(2, '0')}m`;
  });
}
