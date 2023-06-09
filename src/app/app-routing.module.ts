import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/login/login.module').then(m => m.LoginModule)
  },
  { path: 'register',
    loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule)
  },
  { path: 'themepark',
    loadChildren: () => import('./pages/themepark/themepark.module').then(m => m.ThemeparkModule)
  },
  { path: 'rollercoasters',
    loadChildren: () => import('./pages/rollercoasters/rollercoasters.module').then(m => m.RollercoastersModule)
  },
  { path: 'profile',
    loadChildren: () => import('./profile/profile/profile.module').then(m => m.ProfileModule)
  },
  { path: 'admin',
    loadChildren: () => import('./admin/admin/admin.module').then(m => m.AdminModule)
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
