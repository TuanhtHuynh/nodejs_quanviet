import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageResponse } from 'src/app/models/messageResponse';
import { Product } from 'src/app/models/product.model';
import { MessageService } from 'src/app/services/message.service';
import { ProductsService } from 'src/app/services/product.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  public listProducts!: Product[];
  public total: number = 0;
  public pages: number = 0;
  public page: number = 1;
  public sort: string = '_id';
  public order!: string;
  $message!: Subscription;
  message!: MessageResponse;

  constructor(
    private productsService: ProductsService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.$message = this.messageService
      .receivedMessage()
      .subscribe((message) => {
        this.message = message;
        console.warn('>', message.type);
      });
    this.loadData();
  }
  onSort(column: string, order: string) {
    this.sort = column;
    this.order = order === 'asc' ? 'desc' : 'asc';
    this.loadData();
  }
  loadData() {
    this.productsService
      .listProducts(this.sort, this.order, this.page, 3)
      .subscribe((data) => {
        this.listProducts = data.products;
        this.page = data.page;
        this.total = data.count_item;
        this.pages = data.totalpages;
      });
  }

  onPagination(item: number) {}

  onDelete(id: any, name: any) {
    if (confirm('bạn có muốn xoá ' + name)) {
      this.productsService
        .deleteProduct(id)
        .subscribe((response) => this.loadData());
    }
  }
}
