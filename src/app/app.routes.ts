import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';


export const routes: Routes = [
    {
    path: '',
    loadComponent: () => import('./home/home.component')
      .then(mod => mod.HomeComponent)
    },
    {
    path: 'home',
    loadComponent: () => import('./home/home.component')
      .then(mod => mod.HomeComponent)
    },
    {
    path: ':id',
    loadComponent: () => import('./details/details.component')
      .then(mod => mod.DetailsComponent)
    },
  ];
