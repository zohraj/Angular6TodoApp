import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './login.component.scss']
})
export class LoginComponent implements OnInit {
  model = {
    name: '',
    email: '',
    username: '',
    password: '',
    repeatPassword: '',
    formType: '2'

  }
  myform: FormGroup

  constructor(private http: HttpClient, public router: Router) { }

  ngOnInit(): void {
    localStorage.removeItem("token");

  }
  onSubmit = () => {
    // if (this.myform.valid) {
    switch (this.model.formType) {
      case '1':
        this.doLogin(this.model);
        break;
      case '2':
        this.doRegister(this.model);
        break;
      default:
      //do nothing
    }

  }
  doLogin(params) {

    this.http.post("http://localhost:5000/login", {
      username: params.username,
      password: params.password
    }).subscribe((response: any) => {

      if (response.code == 2020) {
        this.redirectToList(response.data);
      }
    });
  }
  doRegister(params) {
    this.http.post("http://localhost:5000/register", params).subscribe((response: any) => {
      if (response.code == 2022) {
        this.redirectToList(response.data);
      }


    });

  }
  redirectToList(data) {
    localStorage.setItem("token", data._id);
    this.router.navigate(["todo/list"]);
  }
}
