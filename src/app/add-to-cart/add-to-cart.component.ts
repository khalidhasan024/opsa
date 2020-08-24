import { CartService } from './../core/cart.service';
import { Product } from './../model/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  @Input('product')
  product: Product;

  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this._cartService.setItem(this.product);
  }

}
