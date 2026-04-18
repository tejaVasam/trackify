import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { DurationPipe } from '../../pipes/duration.pipe';

@Component({
  selector: 't-time-availability',
  standalone: true,
  imports: [CommonModule, BaseChartDirective, DurationPipe],
  templateUrl: './time-availability.html',
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class TimeAvailabilityComponent {
  dedicatedMinutes = input<number>(0);
  completedMinutes = input<number>(0);

  percentage = computed(() => {
    const total = this.dedicatedMinutes();
    const completed = this.completedMinutes();
    if (total === 0) return 0;
    return Math.min(100, Math.round((completed / total) * 100));
  });

  chartData = computed<ChartConfiguration<'bar'>['data']>(() => {
    const completed = this.completedMinutes();
    const total = this.dedicatedMinutes();
    const remaining = Math.max(0, total - completed);
    const free = Math.max(0, 1440 - total);

    return {
      labels: ['Progress'],
      datasets: [
        {
          data: [completed],
          backgroundColor: '#10b981',
          borderRadius: 6,
          borderSkipped: false,
          barThickness: 12,
          label: 'Completed'
        },
        {
          data: [remaining],
          backgroundColor: '#6366f1',
          borderRadius: 6,
          borderSkipped: false,
          barThickness: 12,
          label: 'Remaining'
        },
        {
          data: [free],
          backgroundColor: '#f1f5f9',
          borderRadius: 6,
          borderSkipped: false,
          barThickness: 12,
          label: 'Free Time'
        }
      ]
    };
  });

  chartOptions: ChartOptions<'bar'> = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (item) => ` ${item.dataset.label}: ${this.formatTime(item.raw as number)}`
        }
      }
    },
    scales: {
      x: {
        stacked: true,
        display: false,
        max: 1440
      },
      y: {
        stacked: true,
        display: false
      }
    }
  };

  formatTime(mins: number): string {
    const h = Math.floor(mins / 60);
    const m = Math.round(mins % 60);
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
  }
}
