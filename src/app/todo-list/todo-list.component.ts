import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList: {}
  constructor(private http: HttpClient) { }

  ngOnInit() {
    var userId = localStorage.getItem('token');

    this.http.get("http://localhost:5000/list/" + userId).subscribe(data => {
      if (data) {
        this.todoList = data;
      }

    })
  }
  onClickDelete = (id) => {
    this.http.delete("http://localhost:5000/delete/" + id).subscribe(data => {
      window.location.reload();
    })
  }

}
