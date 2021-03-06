import { Routes, RouterModule } from '@angular/router';

import {
  HomeComponent,
  LoginComponent,
  RegisterComponent
} from './pages';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  // default endpoint route
  {path: '**', component: HomeComponent},
];

export const appRoutingModule = RouterModule.forRoot(routes);