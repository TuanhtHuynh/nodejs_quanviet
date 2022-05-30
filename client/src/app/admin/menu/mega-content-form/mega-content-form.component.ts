import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageResponse } from 'src/app/models/messageResponse';

@Component({
  selector: 'app-mega-content-form',
  templateUrl: './mega-content-form.component.html',
  styleUrls: ['./mega-content-form.component.css'],
})
export class MegaContentFormComponent implements OnInit {
  megaContentForm: FormGroup = new FormGroup({});
  form_title = 'Mega menu';
  message!: MessageResponse;
  errors!: any;

  constructor(private formbuilder: FormBuilder) {}

  ngOnInit(): void {
    this.megaContentForm = this.formbuilder.group({
      _id: [],
      submenu_name: ['', Validators.required],
      url: [''],
      submenus: [null],
    });
  }

  submitForm() {}
}
