import {Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
// import {TestComponentComponent} from './test-component/test-component.component';
// import {NotFoundComponent} from './session/not-found/not-found.component';
// import {MainGuard} from './guards/main.guard';
// import {BridgeComponent} from './session/bridge/bridge.component';

export const AppRoutes: Routes = [
 {
    path: 'login',
    component: LoginComponent,
    loadChildren: './login/login.module#LoginModule'
  }
];