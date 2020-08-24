import { CartService } from './../core/cart.service';
import { ProductService } from './../core/product.service';
import { Product } from './../model/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(private _route: ActivatedRoute,
             private _productService: ProductService,
             private _cartService: CartService) { }

  ngOnInit(): void {
    this._route.params
      .subscribe((p: Params) => 
        this._productService.getProductById(p.id)
          .subscribe(p => {
            this.product = p;
            this.filterCartProduct();
          })
      )
  }

  // onAddClick(): void {
  //   this._cartService.setItem(this.product);
  //   this.product.stock--;
  // }

  private filterCartProduct(): void {
    let cartItems = this._cartService.getItems();
    for(let item of cartItems) {
      if(item.id === this.product._id) {
        this.product.stock -= item.number
        return;
      }
    }
    return;
  }

}
