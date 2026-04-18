import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { CreateTask } from './create-task/create-task';
import { ConfirmDialog } from '../shared/confirm-dialog';
import { TaskPriority } from '../../enums/task-priority.enum';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 't-tasks',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSnackBarModule,
    MatMenuModule,
    MatProgressBarModule,
    CreateTask
  ],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss'
})
export class Tasks implements OnInit {
  private taskService = inject(TaskService);
  private dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);

  tasks = signal<Task[]>([]);
  drawerOpened = signal(false);
  selectedTask = signal<Task | null>(null);
  sortBy = signal<'priority' | 'dueDate' | 'createdAt'>('createdAt');

  completedCount = computed(() => this.tasks().filter(t => t.completed).length);
  pendingCount = computed(() => this.tasks().filter(t => !t.completed).length);
  totalCount = computed(() => this.tasks().length);
  completionPercentage = computed(() => {
    const total = this.totalCount();
    if (total === 0) return 0;
    return (this.completedCount() / total) * 100;
  });

  sortedTasks = computed(() => {
    const sort = this.sortBy();
    const list = [...this.tasks()];

    const priorityWeight = {
      [TaskPriority.HIGH]: 3,
      [TaskPriority.MEDIUM]: 2,
      [TaskPriority.LOW]: 1
    };

    return list.sort((a, b) => {
      // First, always sort by completion status (optionally, or just by the selected criteria)
      // I'll stick to just the selected criteria for now.
      
      if (sort === 'priority') {
        return priorityWeight[b.priority] - priorityWeight[a.priority];
      }
      
      if (sort === 'dueDate') {
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      }

      return b.createdAt - a.createdAt;
    });
  });

  async ngOnInit() {
    await this.loadTasks();
  }

  async loadTasks() {
    const allTasks = await this.taskService.getTasks();
    this.tasks.set(allTasks);
  }

  openCreateDrawer() {
    this.selectedTask.set(null);
    this.drawerOpened.set(true);
  }

  editTask(task: Task) {
    this.selectedTask.set(task);
    this.drawerOpened.set(true);
  }

  async toggleTask(task: Task) {
    await this.taskService.toggleTaskStatus(task.id!, task.completed);
    await this.loadTasks();
  }

  async deleteTask(task: Task) {
    const dialogRef = this.dialog.open(ConfirmDialog, {
      width: '400px',
      data: {
        title: 'Delete Task',
        message: `Are you sure you want to delete "${task.title}"?`
      }
    });

    dialogRef.afterClosed().subscribe(async (confirmed) => {
      if (confirmed) {
        await this.taskService.deleteTask(task.id!);
        await this.loadTasks();
        this.snackBar.open('Task deleted', 'Close', { duration: 2000 });
      }
    });
  }

  onDrawerClose(refresh: boolean) {
    this.drawerOpened.set(false);
    if (refresh) {
      this.loadTasks();
    }
  }

  getPriorityColor(priority: TaskPriority): string {
    switch (priority) {
      case TaskPriority.HIGH: return '#f87171';
      case TaskPriority.MEDIUM: return '#fbbf24';
      case TaskPriority.LOW: return '#60a5fa';
      default: return '#94a3b8';
    }
  }
}
