import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {
  AuthGuardService as AuthGuard
} from './auth/auth-guard.service';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';

export const AppRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'todo/list',
    component: TodoListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'todo/add',
    component: AddTodoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'todo/edit/:id',
    component: EditTodoComponent
  }

];