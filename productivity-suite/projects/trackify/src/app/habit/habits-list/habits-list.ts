import { Component, inject, OnInit, signal } from '@angular/core';
import { HabitService } from '../../../services/habit.service';
import { Habit } from '../../../models/habit.model';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CreateHabit } from '../create-habit/create-habit';
import { ConfirmDialog } from '../../shared/confirm-dialog';

@Component({
  selector: 't-habits-list',
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './habits-list.html',
  styleUrl: './habits-list.scss',
})
export class HabitsList implements OnInit {
  private habitService = inject(HabitService);
  private dialog = inject(MatDialog);
  habits = signal<Habit[]>([]);

  async ngOnInit(): Promise<void> {
    await this.loadHabits();
  }

  async loadHabits() {
    this.habits.set(await this.habitService.loadHabits());
  }

  openCreateHabitDialog() {
    const dialogRef = this.dialog.open(CreateHabit, {
      width: '500px',
      maxWidth: '90vw'
    });

    dialogRef.afterClosed().subscribe(result => {
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

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.loadHabits();
    });
  }

  deleteHabit(habit: Habit) {
    const dialogRef = this.dialog.open(ConfirmDialog, {
      width: '450px',
      data: {
        title: 'Delete Habit',
        message: `Are you sure you want to delete "${habit.name}"? All associated tracking history for this habit will be permanently lost!`
      }
    });

    dialogRef.afterClosed().subscribe(async confirmed => {
      if (confirmed && habit.id) {
        await this.habitService.deleteHabit(habit.id);
        await this.loadHabits();
      }
    });
  }
}
