import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { LibPreview } from './lib-preview/lib-preview';
import { HabitsList } from './habit/habits-list/habits-list';

export const routes: Routes = [
{
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
},
{
    path:'dashboard',
    component:Dashboard
},
{
    path:'habits',
    component:HabitsList
},
{
    path:'lib-preview',
    component:LibPreview
}];
