import { AddToCartModule } from './../add-to-cart/add-to-cart.module';
import { MaterialModule } from './../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';



@NgModule({
  declarations: [ProductCardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AddToCartModule
  ],
  exports: [
    ProductCardComponent
  ]
})
export class ProductCardModule { }
