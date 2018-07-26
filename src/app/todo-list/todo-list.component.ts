import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ChatService } from '../app.chat.service';
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList: {}
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient, private chatService: ChatService) { }

  ngOnInit() {
    /**
     * initiating the chat service for socket connection and events
     */
    this.chatService.init();
    /** 
     * currentUser is the logged in user 
    */
    var user = JSON.parse(localStorage.getItem('currentUser'));
    this.http.get(this.baseUrl + "/list/" + user._id, { headers: { 'x-access-token': user.token } }).subscribe(data => {
      if (data) {
        this.todoList = data;
      }

    })
  }

  onClickDelete = (id) => {
    this.http.delete(this.baseUrl + "/delete/" + id).subscribe(data => {
      window.location.reload();
    })
  }

}
