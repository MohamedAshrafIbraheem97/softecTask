import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productsChanged = new BehaviorSubject<Product[]>(null!);

  constructor(private _databaseService: DatabaseService) {}

  getProducts() {
    this._databaseService.getProducts().subscribe({
      next: (products) => {
        this.productsChanged.next(products);
      },
      error: () => {
        throw new Error('an Error happened when getting products');
      },
      complete: () => {
        return this.productsChanged.value;
      },
    });
  }

  getProduct(id: number) {
    // need to get data from http to create interceptor first before starting here
    //
    //
    // this.productsChanged.subscribe((products) => {
    //   console.log(products);
    //   products.map((_product) => {
    //     if (_product.ProductId === id) {
    //       return _product;
    //     }
    //     throw new Error('Product not found');
    //   });
    // });
  }
}
