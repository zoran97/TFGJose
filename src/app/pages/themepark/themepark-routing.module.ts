import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemeparkComponent } from './themepark.component';

const routes: Routes = [{ path: '', component: ThemeparkComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeparkRoutingModule { }
