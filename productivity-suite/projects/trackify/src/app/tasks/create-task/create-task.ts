import { Component, inject, OnInit, signal, input, output, computed } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../../../services/task.service';
import { TaskPriority } from '../../../enums/task-priority.enum';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 't-create-task',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './create-task.html',
  styleUrl: './create-task.scss'
})
export class CreateTask implements OnInit {
  task = input<any>(null);
  close = output<boolean>();

  private fb = inject(FormBuilder);
  private taskService = inject(TaskService);

  isEditMode = computed(() => !!this.task());
  minDate = new Date();

  priorityOptions = [
    { label: 'Low', value: TaskPriority.LOW },
    { label: 'Medium', value: TaskPriority.MEDIUM },
    { label: 'High', value: TaskPriority.HIGH }
  ];



  taskForm = this.fb.group({
    title: ['', Validators.required],
    description: [''],
    priority: [TaskPriority.MEDIUM, Validators.required],
    dueDate: [null as Date | null, Validators.required],
    duration: [null as number | null]
  });

  async ngOnInit() {

    const t = this.task();
    if (t) {
      this.taskForm.patchValue({
        title: t.title,
        description: t.description,
        priority: t.priority,
        dueDate: t.dueDate ? new Date(t.dueDate) : null,
        duration: t.duration || null
      });
    }
  }

  async onSubmit() {
    if (this.taskForm.invalid) {
      this.taskForm.markAllAsTouched();
      return;
    }

    const val = this.taskForm.value;
    const taskPayload = {
      title: val.title!,
      description: val.description || '',
      priority: val.priority || TaskPriority.MEDIUM,
      dueDate: val.dueDate ? (val.dueDate as any).toISOString() : undefined,
      duration: val.duration || undefined,
      completed: this.task()?.completed || false,
      createdAt: this.task()?.createdAt || Date.now()
    };

    if (this.task()) {
      await this.taskService.updateTask(this.task().id, taskPayload);
    } else {
      await this.taskService.addTask(taskPayload);
    }

    this.close.emit(true);
  }

  onCancel() {
    this.close.emit(false);
  }
}
