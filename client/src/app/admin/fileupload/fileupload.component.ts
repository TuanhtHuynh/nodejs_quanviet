import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MessageResponse } from 'src/app/models/messageResponse';
import { FileuploadService } from 'src/app/services/fileupload.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css'],
})
export class FileuploadComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() formcontrolname!: any;
  @Input() imageURL!: string;
  fileMessage!: MessageResponse;
  fileSelected!: File;
  @Output() afterUpload = new EventEmitter();

  constructor(private fileService: FileuploadService) {}

  ngOnInit(): void {}

  filecssClass() {
    let _class = '';
    if (this.fileMessage.type === 'danger') {
      _class = 'form__valid';
    } else {
      _class = 'form__valid--success';
    }
    return _class;
  }

  onFileSelected(event: any) {
    this.fileSelected = event.target.files[0];
  }

  onUpload() {
    if (this.fileSelected) {
      if (!this.fileSelected.type.startsWith('image/')) {
        this.fileMessage = { intro: 'vui lòng chọn image', type: 'danger' };
        return false;
      }
      const fd = new FormData();
      fd.append('image', this.fileSelected);
      this.fileService.uploadImage(fd).subscribe((data: any) => {
        this.fileMessage = { intro: data.msg, type: data.type };
        this.afterUpload.emit(data.file);
      });
    }
    return false;
  }
}
