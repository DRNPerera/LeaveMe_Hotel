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
  // readonly baseURL = 'request/sendNotification';

  constructor(private http: Http) { }

  postMessage(message: Message) {
    console.log(message);
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post("request/sendNotification",message,{headers:headers}).pipe(map(res=>res.json()));
     
  }
  
}
