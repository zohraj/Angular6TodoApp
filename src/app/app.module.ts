import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { TodoListComponent } from './todo-list/todo-list.component'
import { HttpModule } from '@angular/http';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { AddTodoComponent } from './add-todo/add-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TodoListComponent,
    AddTodoComponent
  ],
  imports: [
    HttpModule,
    
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
