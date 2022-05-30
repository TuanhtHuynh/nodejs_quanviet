import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit {
  editor = ClassicEditor;
  @Input() form!: FormGroup;
  @Input() formControl: any = new FormControl();
  constructor() {}

  ngOnInit(): void {}
}
