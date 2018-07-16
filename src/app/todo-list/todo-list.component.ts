import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList:{}
  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get("http://localhost:5000/list").subscribe(data => {
      this.todoList = data;
    })
  }

}
