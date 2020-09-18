import { Product } from './../model/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _baseUrl: string = "https://khalidhasan024.github.io/data/opsa.json";

  constructor(private _http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(this._baseUrl);
  }

  getProductById(id: string) : Observable<Product> {
    return this.getProducts()
      .pipe(map(p => p.find(p => p._id === id)))
  }

}
