import { RouterModule } from '@angular/router';
import { MaterialModule } from './../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartTableComponent } from './cart-table.component';



@NgModule({
  declarations: [CartTableComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    CartTableComponent
  ]
})
export class CartTableModule { }
