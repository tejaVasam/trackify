import { Component, inject, signal, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { TitleCasePipe } from '@angular/common';

import { CommonModule } from '@angular/common';
import { HabitLog } from '../../../../models/habit-log.model';

@Component({
    selector: 't-habit-log-note-dialog',
    standalone: true,
    imports: [MatIconModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatChipsModule, TitleCasePipe, CommonModule],
    template: `
    <div class="p-24 df fd-c gap-4 min-w-320">
        <div class="df fd-r jc-sb ai-c mb-16">
            <div class="df fd-c">
                <h2 class="m-0 fs-18 fw-800 text-primary">{{ data.habitName }}</h2>
                <span class="fs-12 fw-600 text-secondary">{{ data.dateStr }}</span>
            </div>
            @if (!isEditMode()) {
                <button mat-icon-button (click)="isEditMode.set(true)" style="color: var(--primary-default)">
                    <mat-icon>edit</mat-icon>
                </button>
            }
        </div>

        @if (!isEditMode()) {
            <!-- View Mode -->
            <div class="df fd-c gap-6">
                @if (mood) {
                    <div class="df fd-c gap-1">
                        <span class="fs-11 fw-700 text-secondary uppercase ls-1">Mood</span>
                        <span class="fs-28">{{ mood }}</span>
                    </div>
                }

                @if (selectedTags.size > 0) {
                    <div class="df fd-c gap-1 mt-4">
                        <span class="fs-11 fw-700 text-secondary uppercase ls-1">Tags</span>
                        <div class="df fd-r flex-wrap gap-2 pt-2">
                            @for (t of selectedTags; track t) {
                                <span class="px-8 py-2 br-8 fs-12 fw-600" style="background: var(--surface-alt); color: var(--text-secondary); border: 1px solid var(--border-subtle)">{{ t }}</span>
                            }
                        </div>
                    </div>
                }

                <div class="df fd-c gap-1 mt-4">
                    <span class="fs-11 fw-700 text-secondary uppercase ls-1">
                        {{ data.isInFuture ? 'Plan' : 'Reflection' }}
                    </span>
                    <p class="m-0 fs-14 text-primary br-12 p-12" style="background: var(--surface-alt); min-height: 60px; line-height: 1.5; white-space: pre-wrap;">
                        {{ tempNote || (data.isInFuture ? 'No plan added yet.' : 'No reflection added yet.') }}
                    </p>
                </div>

                <div class="df fd-r jc-e mt-12">
                    <button mat-button class="br-12" (click)="close()">Close</button>
                </div>
            </div>
        } @else {
            <!-- Edit Mode -->
            <div class="df fd-c gap-4">
                <!-- Mood Selector -->
                <div class="df fd-c gap-2 mb-8">
                    <span class="fs-12 fw-700 text-secondary uppercase ls-1">How do you feel?</span>
                    <div class="df fd-r gap-3 fs-24 py-8">
                        @for (m of moods; track m) {
                            <span class="cursor-pointer transition-all hover-scale" 
                                  [style.opacity]="mood === m ? '1' : '0.4'"
                                  [style.filter]="mood === m ? 'grayscale(0)' : 'grayscale(1)'"
                                  (click)="mood = m">{{ m }}</span>
                        }
                    </div>
                </div>

                <!-- Tags -->
                <div class="df fd-c gap-2 mb-12">
                    <span class="fs-12 fw-700 text-secondary uppercase ls-1">Quick Tags</span>
                    <div class="df fd-r flex-wrap gap-2 pt-4">
                        @for (t of availableTags; track t) {
                            <div class="px-10 py-4 br-12 fs-12 fw-600 transition-all cursor-pointer"
                                 [style.background-color]="selectedTags.has(t) ? 'var(--primary-light)' : 'var(--surface-alt)'"
                                 [style.color]="selectedTags.has(t) ? 'var(--primary-default)' : 'var(--text-secondary)'"
                                 [style.border]="selectedTags.has(t) ? '1px solid var(--primary-default)' : '1px solid var(--border-subtle)'"
                                 (click)="toggleTag(t)">
                                {{ t }}
                            </div>
                        }
                    </div>
                </div>

                <!-- Notes (Plan / Reflection) -->
                <div class="df fd-c gap-2">
                    <span class="fs-12 fw-700 text-secondary uppercase ls-1">
                        {{ data.isInFuture ? 'Planning' : 'Reflection' }}
                    </span>
                    <mat-form-field appearance="outline" class="w-100 hide-subscript">
                        <textarea matInput 
                                  [(ngModel)]="tempNote" 
                                  [placeholder]="data.isInFuture ? 'What is the plan for this day?' : 'How did it go today?'" 
                                  maxlength="300" 
                                  rows="4"></textarea>
                    </mat-form-field>
                </div>

                <div class="df fd-r jc-e gap-2 mt-20">
                    @if (hasExistingContent) {
                        <button mat-button (click)="isEditMode.set(false)">Cancel</button>
                    } @else {
                        <button mat-button (click)="close()">Cancel</button>
                    }
                    <button mat-flat-button color="primary" class="br-12 px-20 text-bg" (click)="save()">Save Entry</button>
                </div>
            </div>
        }
    </div>
  `,
    styles: [`
    .hover-scale { transition: transform 0.2s; }
    .hover-scale:hover { transform: scale(1.2); }
    .ls-1 { letter-spacing: 0.5px; }
  `]
})
export class HabitLogNoteDialog implements OnInit {
    private dialogRef = inject(MatDialogRef<HabitLogNoteDialog>);
    data = inject(MAT_DIALOG_DATA);

    moods = ['🔥', '⚡', '😇', '😴', '🤒', '🚀', '🌈'];
    availableTags = ['#Sick', '#Travel', '#HighEnergy', '#WorkStress', '#Weekend', '#Social'];

    mood = this.data.log.mood || '';
    selectedTags = new Set<string>(this.data.log.tags || []);
    tempNote = this.data.isInFuture ? (this.data.log.planNote || '') : (this.data.log.reflectionNote || '');

    isEditMode = signal<boolean>(false);
    hasExistingContent = false;

    ngOnInit() {
        this.hasExistingContent = !!(this.mood || this.selectedTags.size > 0 || this.tempNote);
        this.isEditMode.set(!this.hasExistingContent);
    }

    toggleTag(tag: string) {
        if (this.selectedTags.has(tag)) {
            this.selectedTags.delete(tag);
        } else {
            this.selectedTags.add(tag);
        }
    }

    save() {
        const result: Partial<HabitLog> = {
            mood: this.mood,
            tags: Array.from(this.selectedTags)
        };
        if (this.data.isInFuture) {
            result.planNote = this.tempNote;
        } else {
            result.reflectionNote = this.tempNote;
        }
        this.dialogRef.close(result);
    }

    close() {
        this.dialogRef.close();
    }
}
