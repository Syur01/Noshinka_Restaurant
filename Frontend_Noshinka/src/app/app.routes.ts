import { Routes } from '@angular/router';
import { LayoutComponent } from './interfaz-web/layout/layout.component';
import { MainComponent } from './interfaz-web/main/main.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: MainComponent, // Esto se verá dentro del outlet del Layout
      },
    ],
  },
];
