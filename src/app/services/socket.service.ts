import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as socketIo from 'socket.io-client';
import { Event } from '../models/Events';
import { AppConfig } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket;
  private appConfig: AppConfig;

  constructor(appConfig: AppConfig) {
    this.appConfig = appConfig;
  }

  public initSocket(): void {
    this.socket = socketIo(`${this.appConfig.config.nodeServerUrl}user`);
  }

  public joinRoom(roomId): void {
    this.socket.emit(Event.JOIN_ROOM, roomId);
  }

  public sendMessage(message): void {
    this.socket.emit(Event.OUTGOING_MESSAGE, message);
  }

  public onEvent(event: any): Observable<any> {
    return new Observable<Event>(observer => {
      this.socket.on(event, (data) => {
        observer.next(data)
      });
    });
  }
}



