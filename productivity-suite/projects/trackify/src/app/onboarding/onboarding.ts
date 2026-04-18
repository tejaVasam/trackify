import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { db, } from '../../db/app.db';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AvatarComponent } from '../shared/components/avatar/avatar';
import { User } from '../../models/user.model';

@Component({
  selector: 't-onboarding',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule, MatIconModule, AvatarComponent],
  templateUrl: './onboarding.html'
})
export class OnboardingComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  previewBase64 = signal<string | null>(null);

  onboardForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    gender: ['', Validators.required]
  });

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewBase64.set(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  async onSubmit() {
    if (this.onboardForm.valid) {
      const formGender = this.onboardForm.value.gender;
      let finalAvatar = this.previewBase64();

      // Automatic biological mapping heuristic bindings bypassing arbitrary unknown voids elegantly
      if (!finalAvatar) {
        if (formGender === 'female') {
          finalAvatar = 'https://api.dicebear.com/7.x/lorelei/svg?seed=Bella';
        } else if (formGender === 'male') {
          finalAvatar = 'https://api.dicebear.com/7.x/lorelei/svg?seed=Milo';
        } else {
          finalAvatar = 'https://api.dicebear.com/7.x/lorelei/svg?seed=Lucky';
        }
      }


      const user: User = {
        name: this.onboardForm.value.name,
        gender: formGender,
        avatar: finalAvatar || this.previewBase64() || undefined,
        createdAt: Date.now()
      };

      await db.users.add(user);

      // Setup default configuration categories or habits specifically for this user if desired

      // Navigate globally inwards
      this.router.navigate(['/dashboard']);

    }
  }
}
