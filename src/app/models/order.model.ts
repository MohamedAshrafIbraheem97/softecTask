// import used models
import { ProductInsideOrder } from './product.model';

// change here to add more than payment type
enum payment_type {
  online = 'online',
  cash = 'Cash',
}

// general order model
export interface Order {
  OrderId: number;
  OrderDate: Date;
  UserId: string;
  Products: ProductInsideOrder[];
  PaymentType: payment_type;
}
