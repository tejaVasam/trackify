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

  scheduledTime = computed(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todayAndOverdue = this.tasks().filter(t => {
      if (t.completed || !t.dueDate) return false;
      const d = new Date(t.dueDate);
      d.setHours(0, 0, 0, 0);
      return d <= today;
    });

    const totalMinutes = todayAndOverdue.reduce((acc, t) => acc + (t.duration || 0), 0);
    const hours = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;

    if (hours === 0 && mins === 0) return null;
    if (hours === 0) return `${mins} mins`;
    if (mins === 0) return `${hours} hrs`;
    return `${hours}h ${mins}m`;
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
      if (sort === 'priority') {
        const diff = priorityWeight[b.priority] - priorityWeight[a.priority];
        if (diff !== 0) return diff;
      }

      if (sort === 'dueDate') {
        if (!a.dueDate && !b.dueDate) return 0;
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        const diff = new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
        if (diff !== 0) return diff;
      }

      return b.createdAt - a.createdAt;
    });
  });

  groupedTasks = computed(() => {
    const tasks = this.sortedTasks();
    const groups: { title: string; tasks: Task[] }[] = [
      { title: 'Overdue & Today', tasks: [] },
      { title: 'Upcoming', tasks: [] },
      { title: 'Completed', tasks: [] }
    ];

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    tasks.forEach(t => {
      if (t.completed) {
        groups[2].tasks.push(t);
        return;
      }

      if (!t.dueDate) {
        groups[1].tasks.push(t);
        return;
      }

      const taskDate = new Date(t.dueDate);
      taskDate.setHours(0, 0, 0, 0);

      if (taskDate <= today) {
        groups[0].tasks.push(t);
      } else {
        groups[1].tasks.push(t);
      }
    });

    return groups.filter(g => g.tasks.length > 0);
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
    const snack = this.snackBar.open('Task deleted', 'Undo', { duration: 4000 });

    const deletedTask = { ...task };
    await this.taskService.deleteTask(task.id!);
    await this.loadTasks();

    snack.onAction().subscribe(async () => {
      const { id, ...payload } = deletedTask;
      await this.taskService.addTask(payload);
      await this.loadTasks();
    });
  }

  onDrawerClose(refresh: boolean) {
    this.drawerOpened.set(false);
    if (refresh) {
      this.loadTasks();
    }
  }

  getPriorityStyles(priority: TaskPriority) {
    switch (priority) {
      case TaskPriority.HIGH:
        return { color: '#ef4444', bg: '#fee2e2' };
      case TaskPriority.MEDIUM:
        return { color: '#f59e0b', bg: '#fef3c7' };
      case TaskPriority.LOW:
        return { color: '#10b981', bg: '#d1fae5' };
      default:
        return { color: '#94a3b8', bg: '#f1f5f9' };
    }
  }

  getRelativeDate(dateStr?: string): { label: string; isOverdue: boolean } {
    if (!dateStr) return { label: '', isOverdue: false };
    const date = new Date(dateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const taskDate = new Date(date);
    taskDate.setHours(0, 0, 0, 0);

    const diffTime = taskDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return { label: 'Today', isOverdue: false };
    if (diffDays === 1) return { label: 'Tomorrow', isOverdue: false };
    if (diffDays === -1) return { label: 'Yesterday', isOverdue: true };
    if (diffDays < 0) return { label: `${Math.abs(diffDays)} days ago`, isOverdue: true };
    if (diffDays < 7) return { label: `In ${diffDays} days`, isOverdue: false };

    return {
      label: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      isOverdue: diffDays < 0
    };
  }

  getSortLabel(): string {
    const s = this.sortBy();
    if (s === 'createdAt') return 'Date Created';
    if (s === 'dueDate') return 'Due Date';
    return 'Priority';
  }
}
