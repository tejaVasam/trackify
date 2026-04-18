import { Component, input, computed } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData } from 'chart.js';

@Component({
  selector: 'app-progress-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './progess-chart.html',
  styleUrl: './progress-chart.scss'
})
export class ProgressChartComponent {
  percentage = input.required<number>();

  chartData = computed<ChartData<'doughnut'>>(() => {
    const value = this.percentage();
    return {
      datasets: [{
        data: [value, 100 - value],
        backgroundColor: [
          '#10b981', // green-500
          'rgba(255, 255, 255, 0.1)'
        ],
        borderWidth: 0,
        circumference: 360,
        rotation: 0,
        cutout: '85%',
        borderRadius: value > 0 ? 10 : 0
      }]
    };
  });

  chartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false }
    },
    cutout: '85%'
  };
}
