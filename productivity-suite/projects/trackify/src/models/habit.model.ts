import { Days } from "../enums/days.enum"
import { HabitFrequency } from "../enums/habit-frequency.enum"
import { HabitCategory } from "./habit-category.model"

export type Habit = {
  id: number;
  name: string;
  icon: string;
  color: string;
  description?: string;
  frequency: HabitFrequency;
  days?: Days[];
  category: HabitCategory;
  reminderEnabled: boolean;
  reminderTime?: string; // HH:MM
  duration?: number; // in minutes
};