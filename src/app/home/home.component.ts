import { CartService } from './../core/cart.service';
import { Product } from './../model/product';
import { ProductService } from './../core/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _products: Product[] ;
  products: Product[] ;


  constructor(
    private _productService: ProductService,
    private _cartService: CartService, 
    private _router: Router) { 
    this.products = [];
  }

  ngOnInit(): void {
    this._productService.getProducts()
      .subscribe(p => {
        this._products = p;
        this.products = [...this._products];
        this.filterCartProducts();
    });
    this._cartService.cartAddItemAction$
      .subscribe(p => this.products.find(product => product._id === p._id).stock--);
  }

  onCardTitleClick(id: string) {
    this._router.navigate(['/product', id]);
  }

  onSortingChange(filter: string): void {
    switch (filter) {
      case 'h2l':
        this.products.sort((a, b) => b.price - a.price)
        break;

      case 'l2h':
        this.products.sort((a, b) => a.price - b.price)
        break;
    
      default:
        this.products = [...this._products];
        this.filterCartProducts();
        break;
    }
  }

  private filterCartProducts(): void {
    let cartItems = this._cartService.getItems();
    for(let item of cartItems) {
      let index = this.products.findIndex(p => p._id === item.id);
      this.products[index].stock -= item.number;
    }
  }

}
