import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { LoginComponent } from './components/login-component/login-component';
import { EmpleadosComponent } from './components/empleados-component/empleados-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { AuthGuard } from './auth-guard';
import { EjemplosSignal } from './components/ejemplos-signal/ejemplos-signal';

const routes: Routes = [
  { path:"", component: HomeComponent },
  { path: "Login", component: LoginComponent },
  { path: "Empleados", component: EmpleadosComponent, canActivate: [AuthGuard] },
  { path: "Perfil", component: PerfilComponent, canActivate: [AuthGuard] },
  { path: "Subordinados", component: SubordinadosComponent, canActivate: [AuthGuard] },
  { path: "Signal", component: EjemplosSignal},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
