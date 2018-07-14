import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

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
    formType: '',
  }
  myform: FormGroup;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://randomuser.me/api/").subscribe(data =>{
      console.log(data);
    })
  }
  onSubmit() {
    if (this.myform.valid) {
      console.log("Form Submitted!");
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }

}
