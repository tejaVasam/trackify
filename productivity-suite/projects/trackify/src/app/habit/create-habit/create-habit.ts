import { Component, inject, OnInit, signal, input, output, computed } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { HabitService } from '../../../services/habit.service';
import { HabitFrequency } from '../../../enums/habit-frequency.enum';
import { Days } from '../../../enums/days.enum';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../models/category.model';
import { NotificationService } from '../../../services/notification.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { HabitType } from '../../../enums/habit-type.enum';
import { CommonModule } from '@angular/common';
import { DayPickerComponent } from '../../shared/components/day-picker/day-picker.component';
import { IconPickerComponent } from '../../shared/components/icon-picker/icon-picker.component';
import { DurationPickerComponent } from 'shared-ui';

@Component({
  selector: 't-create-habit',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    DayPickerComponent,
    IconPickerComponent,
    DurationPickerComponent
  ],
  templateUrl: './create-habit.html',
  styleUrl: './create-habit.scss',
})
export class CreateHabit implements OnInit {
  habit = input<any>(null);
  close = output<boolean>();

  private fb = inject(FormBuilder);
  private habitService = inject(HabitService);
  private categoryService = inject(CategoryService);
  private notificationService = inject(NotificationService);
  public dialogData = inject<any>(MAT_DIALOG_DATA, { optional: true });

  isEditMode = computed(() => {
    return !!(this.habit() || this.dialogData?.habit);
  });

  frequencyOptions = [
    { label: 'Daily', value: HabitFrequency.Daily },
    { label: 'Specific Days', value: HabitFrequency.Weekly }
  ];

  habitTypeOptions = [
    { label: 'Fixed Time', value: HabitType.Fixed },
    { label: 'Flexible ', value: HabitType.Flexible }
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
    'directions_run', 'pool', 'bedtime', 'restaurant',
    'shopping_cart', 'work', 'school', 'home',
    'favorite', 'event', 'sunny', 'cloud', 'spa',
    'coffee', 'brush', 'code', 'camera_alt', 'music_note',
    'meditation', 'nature', 'pets', 'savings', 'assignment'
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
    habitType: [HabitType.Flexible, Validators.required],
    startTime: [''],
    endTime: [''],
    days: [[] as number[]],
    category: [1, Validators.required],
    reminderEnabled: [false],
    reminderTime: ['08:00'],
    reminderOffset: ['00:00'],
    duration: ['00:00']
  }, { validators: [this.habitTimeValidator()] });

  private habitTimeValidator() {
    return (group: any) => {
      const type = group.get('habitType')?.value;
      const start = group.get('startTime')?.value;
      const end = group.get('endTime')?.value;

      if (type === HabitType.Fixed) {
        if (!start || !end) {
          return { timesRequired: true };
        }
        // User asked for "start time should be greater than end time"
        // Most likely they meant "end time should be greater than start time"
        // I will implement end > start.
        const startMins = this.hhmmToMinutes(start);
        const endMins = this.hhmmToMinutes(end);
        if (endMins <= startMins) {
          return { invalidTimeRange: true };
        }
      }
      return null;
    };
  }

  private minutesToHHmm(mins: number): string {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
  }

  private hhmmToMinutes(hhmm: string): number {
    if (!hhmm) return 0;
    const [h, m] = hhmm.split(':').map(Number);
    return (h || 0) * 60 + (m || 0);
  }

  selectColor(color: string) {
    this.habitForm.patchValue({ color });
  }

  async ngOnInit() {
    this.categoryOptions.set(await this.categoryService.getCategories());

    const h = this.habit() || this.dialogData?.habit;
    if (h) {
      this.habitForm.patchValue({
        name: h.name,
        description: h.description,
        icon: h.icon,
        color: h.color,
        frequency: h.frequency,
        habitType: h.habitType || HabitType.Flexible,
        startTime: h.startTime || '',
        endTime: h.endTime || '',
        days: h.days || [],
        category: h.category?.id,
        reminderEnabled: h.reminderEnabled || false,
        reminderTime: h.reminderTime || '08:00',
        reminderOffset: this.minutesToHHmm(h.reminderOffset || 0),
        duration: this.minutesToHHmm(h.duration || 0)
      });
    } else {
      const cats = this.categoryOptions();
      if (cats.length > 0) {
        this.habitForm.patchValue({ category: cats[0].id });
      }
    }
  }

  async onReminderToggle(enabled: boolean) {
    if (enabled) {
      const granted = await this.notificationService.requestPermission();
      if (!granted) {
        this.habitForm.patchValue({ reminderEnabled: false });
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
    const isFixed = val.habitType === HabitType.Fixed;
    let finalDuration = 0;

    if (isFixed && val.startTime && val.endTime) {
      const diff = this.hhmmToMinutes(val.endTime) - this.hhmmToMinutes(val.startTime);
      finalDuration = diff < 0 ? diff + 1440 : diff;
    } else {
      finalDuration = this.hhmmToMinutes(val.duration as string);
    }

    const habitPayload: any = {
      name: val.name!,
      description: val.description || '',
      icon: val.icon || 'star',
      color: val.color || '#3b82f6',
      frequency: targetFrequency,
      habitType: val.habitType,
      startTime: isFixed ? val.startTime : '',
      endTime: isFixed ? val.endTime : '',
      days: targetFrequency === HabitFrequency.Weekly ? (val.days as number[]) : [],
      category: targetCategory,
      reminderEnabled: isFixed ? !!val.reminderEnabled : false,
      reminderTime: val.reminderTime || '08:00',
      reminderOffset: this.hhmmToMinutes(val.reminderOffset as string),
      duration: finalDuration
    };

    if (this.habit()?.id || this.dialogData?.habit?.id) {
      const id = this.habit()?.id || this.dialogData.habit.id;
      await this.habitService.updateHabit(id, habitPayload);
    } else {
      await this.habitService.addHabit(habitPayload);
    }

    // Sync notification triggers (wrapped in try-catch to avoid breaking save if API not supported)
    try {
      this.notificationService.updateAllSchedules();
    } catch (e) {
      console.warn('Notification sync failed', e);
    }

    this.close.emit(true);
  }

  onCancel() {
    this.close.emit(false);
  }
}
