import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import { HabitService } from '../../../services/habit.service';
import { HabitLogService } from '../../../services/habit-log.service';
import { Category } from '../../../models/category.model';
import { Habit } from '../../../models/habit.model';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { HabitLog } from '../../../models/habit-log.model';

@Component({
  selector: 't-category-details',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule, MatCardModule, BaseChartDirective],
  templateUrl: './category-details.html',
  styleUrl: './category-details.scss'
})
export class CategoryDetails implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private categoryService = inject(CategoryService);
  private habitService = inject(HabitService);
  private habitLogService = inject(HabitLogService);

  category = signal<Category | undefined>(undefined);
  habits = signal<Habit[]>([]);
  logs = signal<HabitLog[]>([]);

  // Chart Data
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [{ data: [] }]
  };

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Daily Completions',
        fill: true,
        tension: 0.4,
        borderColor: '#6366f1',
        backgroundColor: 'rgba(99, 102, 241, 0.2)'
      }
    ]
  };

  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 1 }
      }
    }
  };

  async ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (isNaN(id)) {
      this.router.navigate(['/categories']);
      return;
    }

    const cats = await this.categoryService.getCategories();
    const cat = cats.find(c => c.id === id);
    if (!cat) {
      this.router.navigate(['/categories']);
      return;
    }
    this.category.set(cat);

    const allHabits = await this.habitService.loadHabits();
    const catHabits = allHabits.filter(h => h.category?.id === id);
    this.habits.set(catHabits);

    const habitIds = catHabits.map(h => h.id);
    const allLogs = await this.habitLogService.getAllLogs();
    const catLogs = allLogs.filter(l => habitIds.includes(l.habitId));
    this.logs.set(catLogs);

    this.prepareDoughnutChart();
    this.prepareLineChart();
  }

  prepareDoughnutChart() {
    const counts: Record<string, number> = {};
    this.habits().forEach(h => {
      counts[h.name] = this.logs().filter(l => l.habitId === h.id).length;
    });

    this.doughnutChartData = {
      labels: Object.keys(counts),
      datasets: [
        {
          data: Object.values(counts),
          backgroundColor: this.habits().map(h => h.color || '#6366f1')
        }
      ]
    };
  }

  prepareLineChart() {
    const last14Days = Array.from({ length: 14 }, (_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - (13 - i));
      return d.toISOString().split('T')[0];
    });

    const data = last14Days.map(date => {
      return this.logs().filter(l => l.dateStr === date).length;
    });

    this.lineChartData = {
      labels: last14Days.map(d => d.split('-').slice(1).join('/')),
      datasets: [
        {
          ...this.lineChartData.datasets[0],
          data: data
        }
      ]
    };
  }
}
