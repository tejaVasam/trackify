import { Component, inject, OnInit, signal } from '@angular/core';
import { HabitService } from '../../../services/habit.service';
import { Habit } from '../../../models/habit.model';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CreateHabit } from '../create-habit/create-habit';
import { ConfirmDialog } from '../../shared/confirm-dialog';
import { Router } from '@angular/router';
import { HabitCard } from '../components/habit-card/habit-card';
import { HabitLogService } from '../../../services/habit-log.service';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../models/category.model';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { computed } from '@angular/core';
import { Days } from '../../../enums/days.enum';
import { HabitFrequency } from '../../../enums/habit-frequency.enum';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';



interface HabitWithStreak extends Habit {
  currentStreak: number;
  longestStreak: number;
}


import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 't-habits-list',
  imports: [MatDialogModule, MatButtonModule, MatIconModule, MatSelectModule, MatFormFieldModule, MatSnackBarModule, MatSidenavModule, CreateHabit, HabitCard, DragDropModule],
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

  selectedHabit = signal<Habit | null>(null);

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
    this.selectedHabit.set(null);
    this.drawerOpened.set(true);
  }

  drawerOpened = signal<boolean>(false);

  onDrawerClose(refresh: boolean) {
    this.drawerOpened.set(false);
    if (refresh) {
      this.loadHabits();
    }
  }

  editHabit(habit: Habit) {
    this.selectedHabit.set(habit);
    this.drawerOpened.set(true);
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

  async drop(event: CdkDragDrop<HabitWithStreak[]>) {
    const currentHabits = [...this.habits()];
    
    // Calculate global indices if filtered
    const filtered = this.filteredHabits();
    const itemMoved = filtered[event.previousIndex];
    const itemTarget = filtered[event.currentIndex];
    
    const globalPrevIndex = currentHabits.findIndex(h => h.id === itemMoved.id);
    const globalCurrIndex = currentHabits.findIndex(h => h.id === itemTarget.id);

    moveItemInArray(currentHabits, globalPrevIndex, globalCurrIndex);

    // Update positions
    const updatedHabits = currentHabits.map((h, index) => ({
      ...h,
      position: index
    }));

    // Optimistic update
    this.habits.set(updatedHabits);

    // Persist to DB
    try {
      await this.habitService.updateHabitPositions(updatedHabits);
    } catch (error) {
      console.error('Failed to save habit order:', error);
      this.snackBar.open('Failed to save order', 'Close', { duration: 3000 });
      await this.loadHabits(); // Revert on failure
    }
  }
}
