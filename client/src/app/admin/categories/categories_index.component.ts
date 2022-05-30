import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './categories_index.component.html',
  styleUrls: ['./categories_index.component.css'],
})
export class CategoriesIndexComponent implements OnInit {
  public listCategories: Category[];
  public total: number = 0;
  public pages: number = 0;
  public page: number = 1;
  public sort: string = '_id';
  public order!: string;
  constructor(private categoriesService: CategoryService) {
    this.listCategories = [];
  }

  ngOnInit() {
    this.loadData(1);
  }

  loadData(page: number = 1) {
    this.categoriesService
      .listCategories(this.sort, this.order, page, 3)
      .subscribe((data) => {
        this.listCategories = data.categories;
        this.total = data.count_item;
        this.page = data.page;
        this.pages = data.totalpages;
      });
  }

  onSort(column: string, order: string) {
    this.sort = column;
    this.order = order === 'asc' ? 'desc' : 'asc';
    this.loadData(1);
  }

  onPagination(page: number) {
    this.loadData(page);
  }
}
