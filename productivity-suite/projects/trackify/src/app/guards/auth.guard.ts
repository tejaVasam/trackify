import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { db } from '../../db/app.db';

export const onboardingGuard = async () => {
    const router = inject(Router);
    const count = await db.users.count();

    if (count === 0) {
        // No user found, redirect to onboarding flow!
        router.navigate(['/onboarding']);
        return false;
    }
    
    return true; // Authorized globally
};
