import { ConfirmDialog } from '../shared/confirm-dialog';
import { db } from '../../db/app.db';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
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
import { User } from '../../models/user.model';

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
  profileForm = new FormGroup(
    {
      name: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, Validators.minLength(2)] }),
      gender: new FormControl<User['gender'] | ''>('', { nonNullable: true, validators: Validators.required })
    }
  )

  previewAvatar = signal<string | null>(null);

  async ngOnInit() {
    const user = await db.users.orderBy('id').first();
    if (user) {
      this.activeUser.set(user);
      this.previewAvatar.set(user.avatar || null);
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
        this.previewAvatar.set(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  async saveProfile() {
    if (this.profileForm.valid && this.activeUser()?.id) {
      const formValue = this.profileForm.getRawValue();
      const updatedUser: Partial<User> = {
        name: formValue.name,
        gender: formValue.gender as User['gender'],
        avatar: this.previewAvatar() || undefined
      };

      await db.users.update(this.activeUser()!.id!, updatedUser);
      this.snackBar.open('Profile updated successfully!', 'Close', { duration: 3000 });

      // Update local signal to reflect changes immediately
      this.activeUser.update(curr => curr ? { ...curr, ...updatedUser } : null);
    }
  }


}
