import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  model = {
    title: '',
    description: ''
  }
  baseUrl = environment.baseUrl
  private user;
  constructor(private http: HttpClient, public router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("currentUser"));
  }
  onSubmit = () => {
    this.http.post(this.baseUrl + "/add", {
      title: this.model.title,
      description: this.model.description,
      createdBy: this.user._id
    }, { headers: { 'x-access-token': this.user.token } }).subscribe((data: any) => {
      this.router.navigate(['todo/list']);
    });

  }

}
