import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { LibPreview } from './lib-preview/lib-preview';
import { HabitsList } from './habit/habits-list/habits-list';
import { CreateHabit } from './habit/create-habit/create-habit';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'preview',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: Dashboard
    },
    {
        path: 'habits',
        component: HabitsList,
        children: [
            {
                path: 'create',
                component: CreateHabit
            }
        ]
    },
    {
        path: 'preview',
        component: LibPreview
    }];
