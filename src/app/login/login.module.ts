import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports:[
    MatCardModule
  ],
  declarations: []
})
export class LoginModule implements OnInit { 
  ngOnInit(){
    console.log("login module")
  }
}
