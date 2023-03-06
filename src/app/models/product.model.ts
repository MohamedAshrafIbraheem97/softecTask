// general product model
export interface Product {
  id: number;
  name: string;
  price: number;
  availablePieces: number;
  img: string;
}

// product which will be inside the order products list
export interface ProductInsideOrder {
  ProductId: number;
  Quantity: number;
}
