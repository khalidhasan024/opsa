import { Product } from './../model/product';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('product')
  product: Product;
  
  @Output('titleClick')
  titleClick: EventEmitter<string> = new EventEmitter<string>();
  

  constructor() { }

  ngOnInit(): void {
  }

  onTitleClick(id: string): void {
    this.titleClick.emit(id);
  }

  // onAddClick(product: Product): void {
  //   this.addCart.emit(product);
  // }
  

}
