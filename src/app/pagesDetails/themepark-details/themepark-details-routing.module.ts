import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemeparkDetailsComponent } from './themepark-details.component';

const routes: Routes = [{ path: '', component: ThemeparkDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeparkDetailsRoutingModule { }
