import {Routes} from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'calculator',
    loadChildren: './calculator/calculator.module#CalculatorModule'
  },
  {
    path: '',
    redirectTo: 'calculator',
    pathMatch: 'full'
  }
];

