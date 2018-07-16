import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports:[
  ],
  declarations: []
})
export class TodoListModule implements OnInit { 
  ngOnInit(){
    console.log("list module")
  }
}
