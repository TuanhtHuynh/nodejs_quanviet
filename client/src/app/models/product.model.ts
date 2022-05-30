import { Category } from './category.model';

export interface Product {
  _id: string;
  uid: number;
  product_name: number;
  price: number;
  cover: string;
  category: Category;
  createdAt: Date;
  updatedAt: Date;
}
