import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { HabitsList } from './habit/habits-list/habits-list';
import { Today } from './today/today';
import { Settings } from './settings/settings';
import { Categories } from './categories/categories';
import { HabitDetails } from './habit/habit-details/habit-details';
import { onboardingGuard } from './guards/auth.guard';
import { OnboardingComponent } from './onboarding/onboarding';

export const routes: Routes = [
    {
        path: 'onboarding',
        component: OnboardingComponent
    },
    {
        path: '',
        canActivate: [onboardingGuard],
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },

            {
                path: 'dashboard',
                component: Dashboard
            },
            {
                path: 'habits',
                component: HabitsList,
            },
            {
                path: 'habits/:id',
                component: HabitDetails
            },
            {
                path: 'today',
                component: Today
            },
            {
                path: 'categories',
                component: Categories
            },
            {
                path: 'categories/:id',
                loadComponent: () => import('./categories/category-details/category-details').then(m => m.CategoryDetails)
            },
            {
                path: 'settings',
                component: Settings
            },
            {
                path: 'tasks',
                loadComponent: () => import('./tasks/tasks').then(m => m.Tasks)
            }
        ]
    },

];
