import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RollercoastersComponent } from './rollercoasters.component';

const routes: Routes = [{ path: '', component: RollercoastersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RollercoastersRoutingModule { }
