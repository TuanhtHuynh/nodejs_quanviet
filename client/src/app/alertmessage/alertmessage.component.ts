import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageResponse } from '../models/messageResponse';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-alertmessage',
  templateUrl: './alertmessage.component.html',
  styleUrls: ['./alertmessage.component.css'],
})
export class AlertmessageComponent implements OnInit {
  @Input() message!: MessageResponse;
  $message!: Subscription;
  constructor(private messageService: MessageService) {
    this.message = { intro: '', type: '' };
  }

  ngOnInit(): void {
    this.$message = this.messageService
      .receivedMessage()
      .subscribe((message) => {
        this.message = message;
      });
  }

  cssClass() {
    let _class = ['alert'];
    if (this.message.type === 'success') {
      _class.push('alert--success');
    } else if (this.message.type === 'danger') {
      _class.push('alert--danger');
    }

    return _class.join(' ');
  }
}
