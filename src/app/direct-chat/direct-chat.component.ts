import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ChatService } from '../app.chat.service';
import { environment } from '../../environments/environment'
@Component({
  selector: 'app-direct-chat',
  templateUrl: './direct-chat.component.html',
  styleUrls: ['./direct-chat.component.css']
})
export class DirectChatComponent implements OnInit {
  baseUrl = environment.baseUrl;
  model = {
    message: ''
  }
  toUserId = '';
  constructor(private route: ActivatedRoute, private http: HttpClient, private chatService: ChatService) { }

  ngOnInit() {
    var currentUser = JSON.parse(localStorage.getItem("currentUser"));
    var params = this.route.params.subscribe(params => {
      this.toUserId = params.id;
      this.http.post(this.baseUrl + "/chat/", {
        to: params.id,
        from: currentUser._id
      }).subscribe(response => {
        console.log(response);
      })
    })

  }
  onClickSend() {
    this.chatService.sendMessage(this.toUserId, this.model.message);
  }

}
