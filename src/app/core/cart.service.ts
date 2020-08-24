import { CartItem } from './../model/cart-item';
import { Product } from './../model/product';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartAddItemSubject = new Subject<Product>();
  cartAddItemAction$ = this.cartAddItemSubject.asObservable();

  private cartRemoveItemSubject = new Subject<Product>();
  cartRemoveItemAction$ = this.cartRemoveItemSubject.asObservable();

  private cartRemoveFullItemSubject = new Subject<string>();
  cartRemoveFullItemAction$ = this.cartRemoveFullItemSubject.asObservable();

  constructor() {
    if(sessionStorage.getItem("cart") === null)
      sessionStorage.setItem("cart", "[]");
  }

  getItems() : CartItem[] {
    return JSON.parse(sessionStorage.getItem("cart"));
  }

  getItem(id: string) : CartItem {
    return this.getItems()
      .find(i => i.id === id)
  }

  setItem(product: Product): void {
    let items = this.getItems();
    let index = items.findIndex(i => i.id === product._id);
    console.log(index)
    if(index === -1)
      items.push({
        id: product._id,
        product: product,
        number: 1
      });
    else 
      items[index].number++;
    sessionStorage.setItem("cart", JSON.stringify(items));
    this.cartAddItemSubject.next(product);
  }

  removeItem(product: Product): void {
    let items = this.getItems()
    let index = items.findIndex(i => i.id === product._id);
    items[index].number--;
    if(items[index].number <= 0)
      items.splice(index, 1);
    sessionStorage.setItem("cart", JSON.stringify(items));
    this.cartRemoveItemSubject.next(product);
  }

  removeFullItem(id: string) {
    let items = this.getItems();
    let index = items.findIndex(i => i.id === id);
    if(index >= 0)
      items.splice(index, 1);
    sessionStorage.setItem("cart", JSON.stringify(items));
    this.cartRemoveFullItemSubject.next(id);
  }
}
