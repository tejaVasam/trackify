import { Days } from "../enums/days.enum"
import { HabitFrequency } from "../enums/habit-frequency.enum"
import { HabitCategory } from "./habit-category.model"
import { HabitType } from "../enums/habit-type.enum";

export type Habit = {
  id: number;
  name: string;
  icon: string;
  color: string;
  description?: string;
  frequency: HabitFrequency;
  days?: Days[];
  category: HabitCategory;
  habitType: HabitType;
  startTime?: string; // HH:MM
  endTime?: string; // HH:MM
  reminderEnabled: boolean;
  reminderTime?: string; // HH:MM
  duration?: number; // in minutes
  position: number;
};