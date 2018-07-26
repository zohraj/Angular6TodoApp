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
    message: '',
    conversation: '',
    currentUser:''
  }
  conversationId = '';

  constructor(private route: ActivatedRoute, private http: HttpClient, private chatService: ChatService) { }

  ngOnInit() {
    this.model.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log(this.model.currentUser);
    var params = this.route.params.subscribe(params => {
      this.conversationId = params.id;
      this.http.get(this.baseUrl + "/chat/" + params.id).subscribe(response => {
        
        this.model.conversation = response["conversation"];
        console.log("Message: ",this.model.conversation[0]);
      })
    })

  }
  onClickSend() {
    this.chatService.sendMessage(this.conversationId, this.model.message);
  }

}
