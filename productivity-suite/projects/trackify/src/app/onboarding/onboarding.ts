import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { db, User } from '../../db/app.db';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 't-onboarding',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule, MatIconModule],
  template: `
    <div class="df fd-c ai-c jc-c min-vh-100" style="background-color: #f7f3f0; padding: 24px;">
      
      <div class="bg-white br-24 df fd-c gap-8 w-100" style="max-width: 400px; padding: 32px; box-shadow: 0 12px 32px rgba(0,0,0,0.05); padding-bottom: 48px;">
        
        <div class="df fd-c ai-c text-center gap-4 mb-24">
           <div class="df ai-c jc-c br-pill text-white mb-8" style="background: linear-gradient(135deg, #10b981, #3b82f6); width: 80px; height: 80px;">
               <mat-icon style="font-size: 36px; width: 36px; height: 36px;">rocket_launch</mat-icon>
           </div>
           <h1 class="m-0 fs-28 fw-800 text-primary">Welcome to Trackify!</h1>
           <p class="m-0 fs-16 fw-500 text-secondary">Let's set up your profile to get started.</p>
        </div>

        <form [formGroup]="onboardForm" (ngSubmit)="onSubmit()" class="df fd-c gap-4 w-100">
           
           <!-- Setup Avatar Upload -->
           <div class="df fd-c ai-c gap-2 mb-16 position-relative w-100">
             <div class="bg-white overflow-hidden cursor-pointer" 
                  style="width: 100px; height: 100px; min-width: 100px; min-height: 100px; max-width: 100px; max-height: 100px; border-radius: 50%; border: 3px dashed #10b981; position: relative; display: flex; align-items: center; justify-content: center; flex-shrink: 0;"
                  (click)="fileInput.click()">
                 @if (previewBase64) {
                   <img [src]="previewBase64" style="width: 100%; height: 100%; object-fit: cover; display: block;" alt="avatar-preview">
                 } @else {
                   <mat-icon style="font-size: 32px; width: 32px; height: 32px; color: #10b981;">add_a_photo</mat-icon>
                 }
                 <input #fileInput type="file" accept="image/*" capture="user" (change)="onFileSelected($event)" style="display: none;">
             </div>
             <span class="fs-12 fw-600 text-secondary text-center">Upload Photo (Optional)</span>
           </div>

           <div class="df fd-c gap-2 w-100">
              <span class="fs-13 fw-700 text-primary uppercase ls-1">Your Name</span>
              <mat-form-field appearance="outline" class="w-100 hide-subscript">
                  <input matInput formControlName="name" placeholder="E.g. Alex" required>
              </mat-form-field>
           </div>
           
           <div class="df fd-c gap-2 w-100">
              <span class="fs-13 fw-700 text-primary uppercase ls-1">Gender</span>
              <mat-form-field appearance="outline" class="w-100 hide-subscript">
                  <mat-select formControlName="gender" required>
                      <mat-option value="male">Male</mat-option>
                      <mat-option value="female">Female</mat-option>
                      <mat-option value="other">Prefer not to say</mat-option>
                  </mat-select>
              </mat-form-field>
           </div>

           <button mat-flat-button class="w-100 py-24 fw-800 br-12 mt-16 transition-all" 
                   type="submit"
                   style="background-color: #10b981; color: white;"
                   [disabled]="!onboardForm.valid">
               <span class="fs-16">Get Started</span>
               <mat-icon class="ml-8" style="font-size: 20px;">arrow_forward</mat-icon>
           </button>
           
        </form>

      </div>
    </div>
  `
})
export class OnboardingComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  previewBase64: string | null = null;

  onboardForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    gender: ['', Validators.required]
  });

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewBase64 = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  async onSubmit() {
    if (this.onboardForm.valid) {
      const formGender = this.onboardForm.value.gender;
      let finalAvatar = this.previewBase64;
      
      // Automatic biological mapping heuristic bindings bypassing arbitrary unknown voids elegantly
      if (!finalAvatar) {
         if (formGender === 'female') {
            finalAvatar = 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mia';
         } else if (formGender === 'male') {
            finalAvatar = 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix';
         } else {
            finalAvatar = 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka';
         }
      }

      const user: User = {
        name: this.onboardForm.value.name,
        gender: formGender,
        avatar: finalAvatar || undefined,
        createdAt: Date.now()
      };
      
      await db.users.add(user);
      
      // Setup default configuration categories or habits specifically for this user if desired
      
      // Navigate globally inwards
      this.router.navigate(['/dashboard']);

    }
  }
}
