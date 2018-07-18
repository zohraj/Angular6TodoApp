import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {

  constructor(public router: Router, private route: ActivatedRoute, private http: HttpClient) { }
  model = {
    title: '',
    description: '',
    _id: ''
  }
  ngOnInit() {
    var params = this.route.params.subscribe(params => {
      console.log(params);
      this.http.get("http://localhost:5000/item/" + params.id).subscribe((data: any) => {
        if (data && data[0]) {
          this.model = data[0];
        }

      })
    })
  }
  onSubmit = () => {
    this.http.put('http://localhost:5000/update/' + this.model._id, this.model).subscribe((data: any) => {
      this.router.navigate(['todo/list']);
    })
  }


}
