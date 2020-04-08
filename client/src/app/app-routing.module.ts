import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './features/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'forecasts',
    pathMatch: 'full',
  },
  {
    path: 'forecasts',
    loadChildren: () => import('./features/forecasts/forecast.module').then(m => m.ForecastModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const components = [
  NotFoundComponent,
];
