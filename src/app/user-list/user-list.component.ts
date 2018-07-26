import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ChatService } from '../app.chat.service';
import { environment } from '../../environments/environment'
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  private userList;
  private currentUser;
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient, private router: Router, private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.init();
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.http.get(this.baseUrl + "/users/", {
      headers: {
        "x-access-token": this.currentUser.token
      }
    }).subscribe(response => {
      console.log(response["data"]);
      this.userList = response["data"]
    })
  }
  onClickChat(userId) {

    this.router.navigate(['/chat/' + userId])
  }

}
