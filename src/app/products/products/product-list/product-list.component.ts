import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

// models
import { newOrder, Product } from 'src/app/models/product.model';

// services
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  productsSubscription$!: Subscription;
  products!: Product[]; // product list
  isAddingNewOrder: boolean = false; // flag to know if the user currently creating new order or not
  newOrder: newOrder[] = []; // the order that contains items and its Qty

  constructor(
    private readonly _productService: ProductService,
    private _router: Router,
    private _currentRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // get products and initialize them to be sent to the template
    this.productsSubscription$ = this._productService.productsChanged.subscribe(
      (_productsResponse) => {
        this.products = _productsResponse;
      }
    );
  }

  ngOnDestroy(): void {
    this.productsSubscription$?.unsubscribe();
  }

  // navigate to a new page to edit the wanted product
  editProduct(id: number) {
    this._router.navigate(['edit/', id], {
      relativeTo: this._currentRoute,
    });
  }

  // convert modes between creating new order or not
  onNewOrder() {
    this.isAddingNewOrder = !this.isAddingNewOrder;
  }

  // when user wants to add an item to the order
  onAddToOrder(product: Product) {
    this.newOrder.push({
      product: product,
      Pieces: 1,
    });
    // reduce Qty of item from the stock
    this._productService.reduceProductQtyByOne(product.ProductId);
  }

  // when user wants to save the order and add the order details
  onSaveOrder() {
    this._productService.productsAddedToNewOrder.next(this.newOrder);
    this._router.navigate(['orders/new']);
  }
}
