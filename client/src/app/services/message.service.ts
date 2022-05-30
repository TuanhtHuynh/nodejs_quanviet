import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MessageResponse } from '../models/messageResponse';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private _messageSource = new BehaviorSubject<MessageResponse>({
    intro: '',
    type: '',
  });
  message$ = this._messageSource.asObservable();
  message!: MessageResponse;
  constructor() {}

  sendMessage(data: MessageResponse) {
    this._messageSource.next(data);
  }
  receivedMessage(): Observable<MessageResponse> {
    return this._messageSource.asObservable();
  }
}
