// general product model
export interface Product {
  ProductId: number;
  ProductName: string;
  ProductPrice: number;
  AvailablePieces: number;
  ProductImg: string;
}

// product which will be inside the order products list
export interface ProductInsideOrder {
  ProductId: number;
  Quantity: number;
}
