import { Product } from './product';

export interface CartItem {
  id: string,
  product: Product,
  number: number
}