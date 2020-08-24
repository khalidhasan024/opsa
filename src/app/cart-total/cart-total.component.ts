import { CartItem } from './../model/cart-item';
import { CartService } from './../core/cart.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.css']
})
export class CartTotalComponent implements OnInit {

  @Input('cartItems')
  items: CartItem[];

  constructor(private _cartService: CartService) { 
  }

  ngOnInit(): void {
    this._cartService.cartAddItemAction$
      .subscribe(p => this.items = this._cartService.getItems());
    this._cartService.cartRemoveItemAction$
      .subscribe(p => this.items = this._cartService.getItems());
    this._cartService.cartRemoveFullItemAction$
      .subscribe(p => this.items = this._cartService.getItems());
  }

  getTotal(): number {
    return this.items.reduce(
      (total: number, item: CartItem) => 
          total += (item.number * item.product.price), 0)
  }



}
