import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  model= {
    title: '',
    description: ''
  }
  constructor(private http: HttpClient, public router: Router) { }

  ngOnInit() {
  } 
  onSubmit() {
    this.http.post("http://localhost:5000/add", this.model).subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['list']);
    })
  }

}
