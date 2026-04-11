import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HabitService } from '../../../services/habit.service';
import { Habit } from '../../../models/habit.model';

@Component({
  selector: 't-habits-list',
  imports: [RouterOutlet],
  templateUrl: './habits-list.html',
  styleUrl: './habits-list.scss',
})
export class HabitsList implements OnInit {
  private habitService = inject(HabitService);
  habits: Habit[] = [];

  ngOnInit(): void {
    this.habitService.loadHabits().then((habits) => {
      this.habits = habits;
    });
  }
}
