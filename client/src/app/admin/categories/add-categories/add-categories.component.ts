import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MessageResponse } from 'src/app/models/messageResponse';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css'],
})
export class AddCategoriesComponent implements OnInit {
  addCategoryForm: FormGroup = new FormGroup({});
  message!: MessageResponse;
  errors!: any;

  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoryService
  ) {}

  ngOnInit(): void {
    this.addCategoryForm = this.formBuilder.group({
      name: new FormControl(''),
    });
  }

  createCaterory() {
    this.categoriesService.addCategory(this.addCategoryForm.value).subscribe(
      (data: any) => {
        console.log(data.message);
        this.message = data.message;
      },
      (err) => {
        console.log('$', err.error);
        this.errors = err.error.errors;
      }
    );
  }
}
