import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageResponse } from 'src/app/models/messageResponse';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-submenuform',
  templateUrl: './submenuform.component.html',
  styleUrls: ['./submenuform.component.css'],
})
export class SubmenuformComponent implements OnInit {
  @Input() menu_id;
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
  }

  submitForm() {
    this.menuService
      .addMegaHeader(this.menu_id, this.submenuForm.value)
      .subscribe(
        (data: any) => {
          this.message = data.message;
          this.afterSubmit.emit();
        },
        (err) => (this.errors = err.error.errors)
      );
  }
}
