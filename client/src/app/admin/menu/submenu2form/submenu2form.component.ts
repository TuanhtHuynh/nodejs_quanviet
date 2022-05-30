import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageResponse } from 'src/app/models/messageResponse';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-submenu2form',
  templateUrl: './submenu2form.component.html',
  styleUrls: ['./submenu2form.component.css'],
})
export class Submenu2formComponent implements OnInit {
  @Input() menu_id;
  @Input() menu_name;
  @Input() form_title;
  submenuForm: FormGroup = new FormGroup({});
  message!: MessageResponse;
  errors: any;
  @Output() afterSubmit = new EventEmitter();

  constructor(
    private formbuilder: FormBuilder,
    private menuService: MenuService
  ) {}

  ngOnInit(): void {
    this.submenuForm = this.formbuilder.group({
      _id: [null],
      submenu_name: ['', Validators.required],
      url: [''],
      menu_id: [this.menu_id],
      actived: [true],
    });
    console.warn(this.menu_name);
  }

  submitForm() {
    this.menuService
      .addMegaItem(this.menu_id, this.submenuForm.value)
      .subscribe(
        (data: any) => (this.message = data.message),
        (err) => (this.errors = err.error.errors)
      );
  }
}
