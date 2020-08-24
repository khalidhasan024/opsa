import { CartItem } from './../model/cart-item';
import { CartService } from './../core/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: CartItem[];
  constructor(private _cartService: CartService) { 
    this.items = [];
  }

  ngOnInit(): void {
    this.items = this._cartService.getItems();
  }

}
