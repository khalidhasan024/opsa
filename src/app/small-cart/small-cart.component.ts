import { Product } from './../model/product';
import { CartService } from './../core/cart.service';
import { CartItem } from './../model/cart-item';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'small-cart',
  templateUrl: './small-cart.component.html',
  styleUrls: ['./small-cart.component.css']
})
export class SmallCartComponent implements OnInit {

  items: CartItem[];

  constructor(private _cartService: CartService, private _router: Router) { }

  ngOnInit(): void {
    this.items = this._cartService.getItems();
    this._cartService.cartAddItemAction$
      .subscribe(p => this.addItem(p))
  }

  getSubTotal(): number {
    return this.items.reduce(
      (total: number, item: CartItem) => 
          total += (item.number * item.product.price), 0)
  }

  onViewCartClick(): void {
    this._router.navigateByUrl("/cart");
  }

  private addItem(product: Product): void {
    let index = this.items.findIndex(i => i.id === product._id);
    if(index === -1)
      this.items.push({
        id: product._id,
        product: product,
        number: 1
      });
    else 
      this.items[index].number++;
  }

}
