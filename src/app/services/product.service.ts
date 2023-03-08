import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { newOrder, Product } from '../models/product.model';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productsChanged = new BehaviorSubject<Product[]>(null!);
  productsAddedToNewOrder = new BehaviorSubject<newOrder[]>(null!);

  constructor(private _databaseService: DatabaseService) {
    this.getProducts();
  }

  // to fetch all products (mainly used to populate data within the products behavior subject)
  getProducts() {
    this._databaseService.getProducts().subscribe({
      next: (products) => {
        this.productsChanged.next(products);
      },
      error: (e) => {
        throw new Error('an Error happened while getting products' + e);
      },
    });
  }

  // to edit one product
  editProduct(id: number, newQuantity: number) {
    this.productsChanged.subscribe((_products) => {
      if (_products) {
        let productToBeUpdated = _products.filter(
          (product) => product.ProductId === id
        );

        // check if there is a product to be updated or not if there's more than one then edit the first one only
        if (productToBeUpdated.length > 0) {
          productToBeUpdated[0].AvailablePieces = newQuantity;
        }
      }
    });
  }

  // reduce the Qty of an item added to the order
  // so that users will not be able to request items which we don't have them on the stock
  reduceProductQtyByOne(id: number) {
    this.productsChanged.subscribe((_products) => {
      if (_products) {
        let productToBeUpdated = _products.filter(
          (product) => product.ProductId === id
        );

        // check if there is a product to be updated or not if there's more than one then edit the first one only
        if (productToBeUpdated.length > 0) {
          productToBeUpdated[0].AvailablePieces -= 1;
        }
      }
    });
  }
}
