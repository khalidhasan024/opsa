import { AddToCartModule } from './../add-to-cart/add-to-cart.module';
import { SmallCartModule } from './../small-cart/small-cart.module';
import { MaterialModule } from './../shared/material/material.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';

const routes : Routes = [
  {
    path: ":id", component: ProductDetailComponent
  }
]

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SmallCartModule,
    AddToCartModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ProductDetailComponent
  ]
})
export class ProductDetailModule { }
