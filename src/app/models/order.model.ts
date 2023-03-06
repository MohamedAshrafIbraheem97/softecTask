// import used models
import { ProductInsideOrder } from './product.model';

// change here to add more than payment type
enum payment_type {
  online = 'online',
  cash = 'Cash',
}

// general order model
export interface Order {
  id: number;
  date: Date;
  userId: string;
  products: ProductInsideOrder[];
  paymentType: payment_type;
}
