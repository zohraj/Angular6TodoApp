import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './login.component.scss']
})
export class LoginComponent implements OnInit {
  baseUrl = environment.baseUrl;
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
    localStorage.removeItem("user");

  }
  onSubmitLogin = () => {
    this.doLogin(this.model);
  }
  onSubmitSignup = () => {
    this.doRegister(this.model);

  }
  doLogin(params) {
    this.http.post(this.baseUrl + "/login", {
      username: params.username,
      password: params.password
    }).subscribe((response: any) => {

      if (response.code == 2020) {
        this.redirectToList(response.data);
      }
    });
  }
  doRegister(params) {
    this.http.post(this.baseUrl + "/register", params).subscribe((response: any) => {
      if (response.code == 2022) {
        this.redirectToList(response.data);
      }
    });

  }
  redirectToList(data) {
    localStorage.setItem("currentUser", JSON.stringify(data));
    this.router.navigate(["todo/list"]);
  }
}
