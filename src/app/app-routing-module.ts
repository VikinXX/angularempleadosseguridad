import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { LoginComponent } from './components/login-component/login-component';
import { EmpleadosComponent } from './components/empleados-component/empleados-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';

const routes: Routes = [
  { path:"", component: HomeComponent },
  { path: "Login", component: LoginComponent },
  { path: "Empleados", component: EmpleadosComponent },
  { path: "Perfil", component: PerfilComponent },
  { path: "Subordinados", component: SubordinadosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
