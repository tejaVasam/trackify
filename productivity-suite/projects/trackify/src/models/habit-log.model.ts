
export interface HabitLog {
    id?: number;
    habitId: number;
    dateStr: string; // e.g., 'YYYY-MM-DD'
    isCompleted: boolean;
    completedAt?: number; // Unix timestamp
    note?: string; // Keep for backward compatibility or simple notes
    mood?: string;
    tags?: string[];
    reflectionNote?: string;
    planNote?: string;
}