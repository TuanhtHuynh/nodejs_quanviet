import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageResponse } from 'src/app/models/messageResponse';
import { SubMenu } from 'src/app/models/submenu.model';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menuform',
  templateUrl: './menuform.component.html',
  styleUrls: ['./menuform.component.css'],
})
export class MenuformComponent implements OnInit {
  menuForm: FormGroup = new FormGroup({});
  form_title = 'Thêm menu';
  idMenu!: string;
  // mega header
  submenu_info: any = {};
  message!: MessageResponse;
  errors!: any;
  isOpen = false;
  isOpenAddMegaItem = false;

  constructor(
    private formbuilder: FormBuilder,
    private router: ActivatedRoute,
    private menuService: MenuService
  ) {}

  ngOnInit(): void {
    this.menuForm = this.formbuilder.group({
      _id: [null],
      menu_name: ['', Validators.required],
      url: [''],
      submenus: [[]],
      actived: [true],
    });
    this.idMenu = this.router.snapshot.paramMap.get('id') as string;
    if (this.idMenu) {
      this.form_title = 'Cập nhật thông tin';
      this.getMenu(this.idMenu);
    }
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   this.menuForm.valueChanges.subscribe((val) => {
  //     this.Submenus = val.submenus;
  //   });
  // }

  // this.myForm.valueChanges.subscribe(val => {

  get Submenus() {
    return this.menuForm.get('submenus')?.value as SubMenu[];
  }

  set Submenus(value) {
    this.Submenus = value;
  }

  get menuid() {
    return this.menuForm.value._id;
  }

  onShowModal() {
    this.isOpen = !this.isOpen;
  }

  // do something after form submit subHeader (sub-1)
  aftersubmit() {
    if (this.idMenu) {
      this.form_title = 'Cập nhật thông tin';
      this.getMenu(this.idMenu);
      this.isOpen = false;
    }
  }

  // do something after form submit mega item (sub-2) form submit
  aftersubmitAddMegaItem() {
    if (this.idMenu) {
      this.form_title = 'Cập nhật thông tin';
      this.getMenu(this.idMenu);
      this.isOpenAddMegaItem = false;
    }
  }

  onSubHeaderDelete(id: any) {
    this.menuService.deleteSubHeader(id).subscribe(
      (data: any) => {
        console.warn('f ', data);
        if (this.idMenu) {
          this.form_title = 'Cập nhật thông tin';
          this.getMenu(this.idMenu);
        }
      },
      (err) => {
        console.log(err.error.message);
        this.message = err.error.message;
      }
    );
  }

  // sub-2 mega item modal
  onAddMegaHeader(row: any) {
    this.submenu_info = row;
    console.warn(row);
    this.isOpenAddMegaItem = !this.isOpenAddMegaItem;
  }

  getMenu(idMenu: any) {
    this.menuService
      .getMenuDetail(Number(idMenu))
      .subscribe((data: any) => this.menuForm.setValue(data.menu));
  }

  submitForm() {
    this.menuService.addMenu(this.menuForm.value).subscribe(
      (data: any) => {
        this.message = data.message;
        this.errors = {};
        this.menuForm.reset();
      },
      (err) => (this.errors = err.error.errors)
    );
  }

  aftersubmit_addHeader() {
    if (this.idMenu) {
      this.getMenu(this.idMenu);
    }
  }
}
