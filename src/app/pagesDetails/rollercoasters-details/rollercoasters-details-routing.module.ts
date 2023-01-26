import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RollercoastersDetailsComponent } from './rollercoasters-details.component';

const routes: Routes = [{ path: '', component: RollercoastersDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RollercoastersDetailsRoutingModule { }
