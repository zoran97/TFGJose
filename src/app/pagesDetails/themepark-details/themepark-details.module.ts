import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeparkDetailsRoutingModule } from './themepark-details-routing.module';
import { ThemeparkDetailsComponent } from './themepark-details.component';


@NgModule({
  declarations: [
    ThemeparkDetailsComponent
  ],
  imports: [
    CommonModule,
    ThemeparkDetailsRoutingModule
  ]
})
export class ThemeparkDetailsModule { }
