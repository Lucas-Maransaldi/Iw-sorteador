import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'home',
    loadChildren: () => import('./modules/main-page/main-page.module').then(m => m.MainPageModule),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
