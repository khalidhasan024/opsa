import { MaterialModule } from './../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartTotalComponent } from './cart-total.component';



@NgModule({
  declarations: [CartTotalComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    CartTotalComponent
  ]
})
export class CartTotalModule { }
