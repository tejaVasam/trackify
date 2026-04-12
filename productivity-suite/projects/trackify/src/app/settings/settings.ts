import { ConfirmDialog } from '../shared/confirm-dialog';
import { db, User } from '../../db/app.db';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { AvatarComponent } from '../shared/components/avatar/avatar';

@Component({
  selector: 't-settings',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    AvatarComponent
  ],
  templateUrl: './settings.html',
})
export class Settings implements OnInit {
  private dialog = inject(MatDialog);
  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);

  activeUser = signal<User | null>(null);
  profileForm: FormGroup;
  previewAvatar: string | null = null;

  constructor() {
    this.profileForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      gender: ['', Validators.required]
    });
  }

  async ngOnInit() {
    const user = await db.users.orderBy('id').first();
    if (user) {
      this.activeUser.set(user);
      this.previewAvatar = user.avatar || null;
      this.profileForm.patchValue({
        name: user.name,
        gender: user.gender
      });
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewAvatar = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  async saveProfile() {
    if (this.profileForm.valid && this.activeUser()?.id) {
      const updatedUser: Partial<User> = {
        name: this.profileForm.value.name,
        gender: this.profileForm.value.gender,
        avatar: this.previewAvatar || undefined
      };

      await db.users.update(this.activeUser()!.id!, updatedUser);
      this.snackBar.open('Profile updated successfully!', 'Close', { duration: 3000 });

      // Update local signal to reflect changes immediately
      this.activeUser.update(curr => curr ? { ...curr, ...updatedUser } : null);
    }
  }

  clearAllData() {
    const dialogRef = this.dialog.open(ConfirmDialog, {
      width: '450px',
      data: {
        title: 'Factory Reset Trackify',
        message: 'Are you absolutely sure you want to permanently erase ALL data? This will instantly wipe out your Profile, active Habits, and entire historical Logs array forever. This cannot be undone!'
      }
    });

    dialogRef.afterClosed().subscribe(async (confirmed: any) => {
      if (confirmed) {
        // Sequentially purge table memory avoiding strict db connection termination drop crashes
        await db.users.clear();
        await db.habits.clear();
        await db.habitLogs.clear();
        await db.categories.clear();

        // Force refresh natively stripping all local RAM state signals dropping directly into Auth Guard
        window.location.reload();
      }
    });
  }
}
