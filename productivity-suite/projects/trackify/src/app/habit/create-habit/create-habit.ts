import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HabitService } from '../../../services/habit.service';
import { HabitFrequency } from '../../../enums/habit-frequency.enum';
import {
  InputComponent,
  DropdownComponent,
  ButtonComponent
} from '../../../../../shared-ui/src/public-api';

@Component({
  selector: 't-create-habit',
  imports: [
    ReactiveFormsModule,
    InputComponent,
    DropdownComponent,
    ButtonComponent
  ],
  templateUrl: './create-habit.html',
  styleUrl: './create-habit.scss',
})
export class CreateHabit {
  private fb = inject(FormBuilder);
  private habitService = inject(HabitService);
  private router = inject(Router);

  frequencyOptions = [
    { label: 'Daily', value: HabitFrequency.Daily },
    { label: 'Weekly', value: HabitFrequency.Weekly },
    { label: 'Monthly', value: HabitFrequency.Monthly },
    { label: 'Custom', value: HabitFrequency.Custom }
  ];

  categoryOptions = [
    { label: 'Health', value: 1 },
    { label: 'Learning', value: 2 },
    { label: 'Work', value: 3 },
    { label: 'Fitness', value: 4 }
  ];

  habitForm = this.fb.group({
    name: ['', Validators.required],
    description: [''],
    icon: [''],
    color: ['#2196f3'],
    frequency: [HabitFrequency.Daily, Validators.required],
    category: [1, Validators.required]
  });

  async onSubmit() {
    if (this.habitForm.invalid) {
      this.habitForm.markAllAsTouched();
      return;
    }

    const val = this.habitForm.value;
    const catId = Number(val.category);

    await this.habitService.addHabit({
      name: val.name!,
      description: val.description || '',
      icon: val.icon || 'star',
      color: val.color || '#2196f3',
      frequency: Number(val.frequency),
      category: {
        id: catId,
        name: this.categoryOptions.find(c => c.value === catId)?.label || 'Uncategorized'
      }
    });

    this.router.navigate(['/']); // redirect back home
  }
}
