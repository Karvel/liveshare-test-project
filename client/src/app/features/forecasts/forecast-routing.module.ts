import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavigationComponent } from '../navigation/navigation.component';
import { ForecastLayoutComponent } from './forecast-layout/forecast-layout.component';
import { ForecastListComponent } from './forecast-list/forecast-list.component';
import { ForecastListPresentationComponent } from './forecast-list/forecast-list-presentation.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '',
    component: ForecastLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'forecast-list',
        pathMatch: 'full',
      },
      {
        path: 'forecast-list',
        component: ForecastListComponent,
      },
      {
        path: 'test',
        component: TestComponent,
      },
    ],
  },
];

/**
 * Wires up routing for `ForecastModule`.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForecastRoutingModule { }

/**
 * Wires up all components in `ForecastModule`.
 */
export const components = [
  NavigationComponent,
  ForecastLayoutComponent,
  ForecastListComponent,
  ForecastListPresentationComponent,
  TestComponent,
];
