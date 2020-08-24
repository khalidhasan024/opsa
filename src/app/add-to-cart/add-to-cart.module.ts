import { MaterialModule } from './../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToCartComponent } from './add-to-cart.component';



@NgModule({
  declarations: [AddToCartComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    AddToCartComponent
  ]
})
export class AddToCartModule { }
