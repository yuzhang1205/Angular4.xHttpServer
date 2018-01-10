import {Component, OnInit} from '@angular/core';
import {WebSocketService} from '../shared/web-socket.service';

@Component({
  selector: 'app-web-socket',
  templateUrl: './web-socket.component.html',
  styleUrls: ['./web-socket.component.css']
})
export class WebSocketComponent implements OnInit {

  constructor(private wsServer: WebSocketService) {
  }

  ngOnInit() {
    this.wsServer.createObservableSocket('ws://localhost:8085').subscribe(
      data => console.log(data),
      err => console.log(err),
      () => console.log('流接受结束。')
    );
  }

  sendMessageToServer() {
    this.wsServer.sendMessage('Hello it from web');
  }

}
