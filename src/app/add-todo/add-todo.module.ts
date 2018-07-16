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
export class AddTodoModule implements OnInit { 
  ngOnInit(){
    console.log("add todo module")
  }
}
