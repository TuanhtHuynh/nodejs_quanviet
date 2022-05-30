import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { MessageResponse } from 'src/app/models/messageResponse';
import { Product } from 'src/app/models/product.model';
import { AddThousandDotPipe } from 'src/app/pipes/add-thousand-dot.pipe';
import { FileuploadService } from 'src/app/services/fileupload.service';
import { MessageService } from 'src/app/services/message.service';
import { ProductsService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers: [AddThousandDotPipe],
})
export class AddProductComponent implements OnInit {
  form_title: string = 'Thêm sản phẩm';
  message!: MessageResponse;
  errors!: any;
  addProductForm: FormGroup = new FormGroup({});
  listCategories: Category[] = [];
  idProduct!: string;
  product!: Product;
  fileSelected!: File;
  fileMessage!: MessageResponse;
  imageURL!: string;
  editor = ClassicEditor;

  constructor(
    private formbuilder: FormBuilder,
    private productsService: ProductsService,
    private messageService: MessageService,
    private router: ActivatedRoute,
    private nagivation: Router,
    private thousandpipe: AddThousandDotPipe
  ) {}

  ngOnInit(): void {
    this.getListCategories();

    this.addProductForm = this.formbuilder.group({
      _id: [null],
      uid: [0],
      product_name: [''],
      price: [''],
      category: [null, [Validators.required]],
      cover: [''],
      description: [''],
      status: ['active'],
      createdAt: null,
      updatedAt: null,
    });

    this.addProductForm.valueChanges.subscribe((form) => {
      if (form.price) {
        this.addProductForm.patchValue(
          {
            price: this.thousandpipe.transform(form.price),
          },
          { emitEvent: false }
        );
      }
      if (form.cover) {
        console.warn('no image');
      }
    });

    this.idProduct = this.router.snapshot.paramMap.get('id') as string;
    if (this.idProduct) {
      this.form_title = 'Cập nhật thông tin';
    }
    this.getProductDetail(this.idProduct);
  }

  comparasionCategory(option: any, value: any): boolean {
    return option?._id === value?._id;
  }

  getProductDetail(id: string | null) {
    if (id) {
      this.productsService
        .getProductDetail(Number(id))
        .subscribe((data: any) => {
          this.imageURL = data.cover;
          this.addProductForm.setValue(data);
        });
    }
  }

  get category() {
    return this.addProductForm.get('category');
  }

  getListCategories() {
    this.productsService
      .listCategories()
      .subscribe((data) => (this.listCategories = data.categories));
  }

  afterUpload(file: any) {
    this.addProductForm.get('cover')?.setValue(file);
  }

  submitForm() {
    this.addProductForm.value.price = this.addProductForm.value.price.replace(
      /\./g,
      ''
    );
    if (!this.idProduct) {
      this.productsService.addProduct(this.addProductForm.value).subscribe(
        (data: any) => {
          this.message = data.message;
          this.addProductForm.reset();
        },
        (err) => (this.errors = err.error.errors)
      );
    } else {
      this.productsService
        .updateProduct(Number(this.idProduct), this.addProductForm.value)
        .subscribe(
          (data: any) => {
            this.messageService.sendMessage(data as MessageResponse);
            this.nagivation.navigate(['/admin/sanpham']);
          },
          (err) => (this.errors = err.error.errors)
        );
    }
  }
}
