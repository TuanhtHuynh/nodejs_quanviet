import { Product } from './product.model';

export interface ProductResponse {
  products: Product[];
  page: number;
  count_item: number;
  size: number;
  sort: string;
  order: string;
  totalpages: number;
}
