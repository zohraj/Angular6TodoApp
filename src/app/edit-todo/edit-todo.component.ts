import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

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
  baseUrl = environment.baseUrl
  ngOnInit() {
    var params = this.route.params.subscribe(params => {
      console.log(params);
      this.http.get(this.baseUrl + "/item/" + params.id).subscribe((data: any) => {
        if (data && data[0]) {
          this.model = data[0];
        }

      })
    })
  }
  onSubmit = () => {
    this.http.put(this.baseUrl + 'update/' + this.model._id, this.model).subscribe((data: any) => {
      this.router.navigate(['todo/list']);
    })
  }


}
