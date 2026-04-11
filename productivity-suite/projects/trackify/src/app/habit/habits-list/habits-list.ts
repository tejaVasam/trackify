import { Component, inject, OnInit, signal } from '@angular/core';
import { HabitService } from '../../../services/habit.service';
import { Habit } from '../../../models/habit.model';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CreateHabit } from '../create-habit/create-habit';
import { ConfirmDialog } from '../../shared/confirm-dialog';
import { Router } from '@angular/router';
import { HabitLogService } from '../../../services/habit-log.service';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../models/category.model';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { computed } from '@angular/core';
import { Days } from '../../../enums/days.enum';
import { HabitFrequency } from '../../../enums/habit-frequency.enum';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';



interface HabitWithStreak extends Habit {
  currentStreak: number;
  longestStreak: number;
}


@Component({
  selector: 't-habits-list',
  imports: [MatDialogModule, MatButtonModule, MatIconModule, MatSelectModule, MatFormFieldModule, MatSnackBarModule],
  templateUrl: './habits-list.html',
  styleUrl: './habits-list.scss',
})
export class HabitsList implements OnInit {
  private habitService = inject(HabitService);
  private habitLogService = inject(HabitLogService);
  private categoryService = inject(CategoryService);
  private snackBar = inject(MatSnackBar);
  private dialog = inject(MatDialog);
  private router = inject(Router);


  HabitFrequency = HabitFrequency;
  allDays = [
    { label: 'M', value: Days.Monday },
    { label: 'T', value: Days.Tuesday },
    { label: 'W', value: Days.Wednesday },
    { label: 'T', value: Days.Thursday },
    { label: 'F', value: Days.Friday },
    { label: 'S', value: Days.Saturday },
    { label: 'S', value: Days.Sunday }
  ];

  habits = signal<HabitWithStreak[]>([]);

  categories = signal<Category[]>([]);
  selectedCategoryId = signal<number | 'all'>('all');

  filteredHabits = computed(() => {
    const filter = this.selectedCategoryId();
    const all = this.habits();
    if (filter === 'all') return all;
    return all.filter(h => h.category?.id === filter);
  });


  async ngOnInit(): Promise<void> {
    this.categories.set(await this.categoryService.getCategories());
    await this.loadHabits();
  }

  async loadHabits() {
    const rawHabits = await this.habitService.loadHabits();
    const enrichedHabits = await Promise.all(
      rawHabits.map(async (h) => {
        const stats = await this.habitLogService.getStreakStatus(h.id!);
        return {
          ...h,
          currentStreak: stats.current,
          longestStreak: stats.longest
        };
      })
    );
    this.habits.set(enrichedHabits);
  }

  openCreateHabitDialog() {
    if (this.categories().length === 0) {
      this.snackBar.open('Please create a category first before adding habits.', 'Go to Categories', {
        duration: 5000,
        panelClass: ['warning-snackbar']
      }).onAction().subscribe(() => {
        this.router.navigate(['/categories']);
      });
      return;
    }

    const dialogRef = this.dialog.open(CreateHabit, {
      width: '500px',
      maxWidth: '90vw'
    });


    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.loadHabits();
      }
    });
  }

  editHabit(habit: Habit) {
    const dialogRef = this.dialog.open(CreateHabit, {
      width: '500px',
      maxWidth: '90vw',
      data: { habit } // Send target habit as MAT_DIALOG_DATA injection
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) this.loadHabits();
    });
  }

  viewDetails(habitId: number) {
    this.router.navigate(['/habits', habitId]);
  }

  deleteHabit(habit: Habit) {
    const dialogRef = this.dialog.open(ConfirmDialog, {
      width: '450px',
      data: {
        title: 'Delete Habit',
        message: `Are you sure you want to delete "${habit.name}"? All associated tracking history for this habit will be permanently lost!`
      }
    });

    dialogRef.afterClosed().subscribe(async (confirmed: any) => {
      if (confirmed && habit.id) {
        await this.habitService.deleteHabit(habit.id);
        await this.loadHabits();
      }
    });
  }
}
