import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit, OnDestroy {
  productId!: number; // product to be updated id
  selectedProduct!: Product; // product to be updated
  subscription!: Subscription; // subscription

  constructor(
    private _currentRoute: ActivatedRoute,
    private readonly _productService: ProductService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    // get the id of the selected product
    this._currentRoute.params.subscribe((params: Params) => {
      this.productId = +params['id'];
    });

    // get the object that wanted to be updated
    this.subscription = this._productService.productsChanged.subscribe(
      (_products) => {
        if (_products) {
          this.selectedProduct = _products.filter(
            (_product) => _product.ProductId === this.productId
          )[0];
        }
      }
    );
  }

  ngOnDestroy(): void {
    // delete the subscription when destroying the component
    this.subscription.unsubscribe();
  }

  // when submiting the form
  // 1. save the data
  // 2. redirect to the previous route related to the current route
  onSubmit(editForm: NgForm) {
    this._productService.editProduct(this.productId, +editForm.value.quantity);
    this._router.navigate(['../']);
  }
}
