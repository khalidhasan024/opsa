import { Router } from '@angular/router';
import { Product } from './../model/product';
import { CartItem } from './../model/cart-item';
import { CartService } from './../core/cart.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css']
})
export class CartTableComponent implements OnInit {

  displayedColumns: string[] = [
    'delButton', 
    'image', 
    'product',
    'price', 
    'quantity', 
    'subtotal'
  ]
  @Input('cartItems')
  items: CartItem[];

  constructor(private _cartService: CartService, private _router: Router) { 
  }

  ngOnInit(): void {
  }

  
  onAddClick(product: Product): void {
    this._cartService.setItem(product);
    this.items = this._cartService.getItems();
  }
  
  onRemoveClick(product: Product): void {
    this._cartService.removeItem(product);
    this.items.find(i => i.id === product._id).number--;
  }

  onRemovefullItem(id: string) {
    this._cartService.removeFullItem(id);
    this.items = this._cartService.getItems();
  }

  onTitleClick(id: string): void {
    this._router.navigate(["/product", id]);
  }

  
}
