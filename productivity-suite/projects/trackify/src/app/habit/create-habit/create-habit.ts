import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { HabitService } from '../../../services/habit.service';
import { HabitFrequency } from '../../../enums/habit-frequency.enum';
import { Days } from '../../../enums/days.enum';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../models/category.model';

@Component({
  selector: 't-create-habit',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule
  ],
  templateUrl: './create-habit.html',
  styleUrl: './create-habit.scss',
})
export class CreateHabit implements OnInit {
  private fb = inject(FormBuilder);
  private habitService = inject(HabitService);
  private categoryService = inject(CategoryService);
  private dialogRef = inject(MatDialogRef<CreateHabit>);
  
  data = inject<any>(MAT_DIALOG_DATA, { optional: true });

  frequencyOptions = [
    { label: 'Daily', value: HabitFrequency.Daily },
    { label: 'Weekly (Specific Days)', value: HabitFrequency.Weekly }
  ];

  daysOptions = [
    { label: 'Monday', value: Days.Monday },
    { label: 'Tuesday', value: Days.Tuesday },
    { label: 'Wednesday', value: Days.Wednesday },
    { label: 'Thursday', value: Days.Thursday },
    { label: 'Friday', value: Days.Friday },
    { label: 'Saturday', value: Days.Saturday },
    { label: 'Sunday', value: Days.Sunday }
  ];

  categoryOptions = signal<Category[]>([]);

  iconOptions = [
    'star', 'fitness_center', 'water_drop', 'menu_book',
    'check_circle', 'bolt', 'local_fire_department',
    'monitor_heart', 'self_improvement', 'psychology',
    'directions_run', 'pool', 'bedtime', 'restaurant'
  ];

  presetColors = [
    '#3b82f6', '#4ade80', '#c084fc', '#fba94c',
    '#f472b6', '#5eead4', '#f87171', '#fcd34d'
  ];

  habitForm = this.fb.group({
    name: ['', Validators.required],
    description: [''],
    icon: ['star'],
    color: ['#3b82f6'],
    frequency: [HabitFrequency.Daily, Validators.required],
    days: [[] as number[]],
    category: [1, Validators.required]
  });

  selectColor(color: string) {
    this.habitForm.patchValue({ color });
  }

  async ngOnInit() {
    this.categoryOptions.set(await this.categoryService.getCategories());

    if (this.data?.habit) {
      const h = this.data.habit;
      this.habitForm.patchValue({
        name: h.name,
        description: h.description,
        icon: h.icon,
        color: h.color,
        frequency: h.frequency,
        days: h.days || [],
        category: h.category?.id
      });
    } else {
      const cats = this.categoryOptions();
      if (cats.length > 0) {
        this.habitForm.patchValue({ category: cats[0].id });
      }
    }
  }

  async onSubmit() {
    if (this.habitForm.invalid) {
      this.habitForm.markAllAsTouched();
      return;
    }

    const val = this.habitForm.value;
    const catId = Number(val.category);

    const selectedCat = this.categoryOptions().find(c => c.id === catId);
    const targetCategory = selectedCat ? { id: selectedCat.id!, name: selectedCat.name } : { id: 0, name: 'General' };

    const targetFrequency = Number(val.frequency);

    const habitPayload = {
      name: val.name!,
      description: val.description || '',
      icon: val.icon || 'star',
      color: val.color || '#3b82f6',
      frequency: targetFrequency,
      days: targetFrequency === HabitFrequency.Weekly ? (val.days as number[]) : [],
      category: targetCategory
    };

    if (this.data?.habit?.id) {
      await this.habitService.updateHabit(this.data.habit.id, habitPayload);
    } else {
      await this.habitService.addHabit(habitPayload);
    }

    this.dialogRef.close(true);
  }
}
