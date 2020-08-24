import { CartTotalModule } from './../cart-total/cart-total.module';
import { MaterialModule } from './../shared/material/material.module';
import { CartTableModule } from './../cart-table/cart-table.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';

const routes: Routes = [
  {
    path: "", pathMatch: "full", component: CartComponent
  }
]

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    CartTableModule,
    CartTotalModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class CartModule { }
