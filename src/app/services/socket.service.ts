import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as socketIo from 'socket.io-client';
import { Event } from '../models/Events';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket;

  public initSocket(): void {
    this.socket = socketIo('http://localhost:3007/user');
  }
  constructor() { }

  public joinRoom(roomId): void {
    this.socket.emit(Event.JOIN_ROOM, roomId);
  }

  public sendMessage(message): void {
    this.socket.emit(Event.OUTGOING_MESSAGE, message);
  }

  public onEvent(event: any): Observable<any> {
    return new Observable<Event>(observer => {
      this.socket.on(event, (data) => {
        console.log(`recieved data for event : ${event}`);
        observer.next(data)
      });
    });
  }
}



