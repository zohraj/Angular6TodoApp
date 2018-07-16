import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { 
  AuthGuardService as AuthGuard 
} from './auth/auth-guard.service';
import { AddTodoComponent } from './add-todo/add-todo.component';

export const AppRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canDeactivate:[AuthGuard],
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'list',
    component: TodoListComponent,
    canActivate: [AuthGuard] ,
    loadChildren: './todo-list/todo-list.module#TodoListModule'
  },
  {
    path: 'add-todo',
    component: AddTodoComponent,
    canActivate: [AuthGuard] ,
    loadChildren: './add-todo/add-todo.module#AddTodoModule'
  },
  
];