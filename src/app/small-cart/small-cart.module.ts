import { MaterialModule } from './../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallCartComponent } from './small-cart.component';



@NgModule({
  declarations: [SmallCartComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ 
    SmallCartComponent
  ]
})
export class SmallCartModule { }
