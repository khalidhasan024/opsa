import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "product", loadChildren: () => import("./product-detail/product-detail.module").then(m => m.ProductDetailModule)
  },
  {
    path: "cart", loadChildren: () => import("./cart/cart.module").then(m => m.CartModule)
  },
  {
    path: "", pathMatch: "full", loadChildren: () => import("./home/home.module").then(m => m.HomeModule) 
  },
  {
    path: "**", component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
