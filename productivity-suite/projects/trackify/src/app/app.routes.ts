import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { LibPreview } from './lib-preview/lib-preview';
import { HabitsList } from './habit/habits-list/habits-list';
import { CreateHabit } from './habit/create-habit/create-habit';
import { Today } from './today/today';
import { Settings } from './settings/settings';
import { Categories } from './categories/categories';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'habits',
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
        path: 'today',
        component: Today
    },
    {
        path: 'categories',
        component: Categories
    },
    {
        path: 'settings',
        component: Settings
    },
    {
        path: 'preview',
        component: LibPreview
    }
];
