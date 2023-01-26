import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RollercoastersDetailsRoutingModule } from './rollercoasters-details-routing.module';
import { RollercoastersDetailsComponent } from './rollercoasters-details.component';


@NgModule({
  declarations: [
    RollercoastersDetailsComponent
  ],
  imports: [
    CommonModule,
    RollercoastersDetailsRoutingModule
  ]
})
export class RollercoastersDetailsModule { }
