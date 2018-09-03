import { Injectable } from '@angular/core';
import { Message } from "./message";
import { Http,Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  selectedMessage: Message;
  messages: Message[];
  readonly baseURL = 'request/sendNotificationAccepted';

  constructor(private http: Http) { }

  postMessage(message: Message) {
    console.log(message);
    return this.http.post(this.baseURL, message);
  }
  
}
