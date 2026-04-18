import { TaskPriority } from "../enums/task-priority.enum";

export type Task = {
  id?: number;
  title: string;
  description?: string;
  completed: boolean;
  dueDate?: string;
  priority: TaskPriority;
  createdAt: number;
};
