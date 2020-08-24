import { SortModule } from './../sort/sort.module';
import { SmallCartModule } from './../small-cart/small-cart.module';
import { SmallCartComponent } from './../small-cart/small-cart.component';
import { ProductCardModule } from './../product-card/product-card.module';
import { MaterialModule } from './../shared/material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: "", pathMatch: "full", component: HomeComponent
  }
]

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ProductCardModule,
    SmallCartModule,
    SortModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
