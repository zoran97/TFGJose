import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RollercoastersRoutingModule } from './rollercoasters-routing.module';
import { RollercoastersComponent } from './rollercoasters.component';


@NgModule({
  declarations: [
    RollercoastersComponent
  ],
  imports: [
    CommonModule,
    RollercoastersRoutingModule
  ]
})
export class RollercoastersModule { }
