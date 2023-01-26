import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeparkRoutingModule } from './themepark-routing.module';
import { ThemeparkComponent } from './themepark.component';


@NgModule({
  declarations: [
    ThemeparkComponent
  ],
  imports: [
    CommonModule,
    ThemeparkRoutingModule
  ]
})
export class ThemeparkModule { }
