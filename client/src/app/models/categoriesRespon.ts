import { Category } from './category.model';

export interface CategoriesRespon {
  categories: Category[];
  page: number;
  count_item: number;
  size: number;
  sort: string;
  order: string;
  totalpages: number;
}
