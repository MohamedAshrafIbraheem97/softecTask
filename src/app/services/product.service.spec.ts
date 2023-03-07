import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all products', () => {
    expect(service.getProducts()).toBeTruthy;
  });

  // it('should get single product', () => {
  //   expect(service.getProduct(123)).toBe({
  //     ProductId: 123,
  //     ProductName: 'Product 1',
  //     ProductPrice: 123.5,
  //     AvailablePieces: 25,
  //     ProductImg:
  //       'https://www.decolore.net/wp-content/uploads/2017/04/product-mock-up-set-2.jpg',
  //   });

  //   expect(service.getProduct(11)).toBeFalsy;
  // });
});
