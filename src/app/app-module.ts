import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { LoginComponent } from './components/login-component/login-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { FormsModule } from '@angular/forms';
import { ServiceEmpleados } from './service/Service.empleados';
import { EmpleadosComponent } from './components/empleados-component/empleados-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { AuthGuard } from './auth-guard';
import { EjemplosSignal } from './components/ejemplos-signal/ejemplos-signal';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    LoginComponent,
    PerfilComponent,
    MenuComponent,
    EmpleadosComponent,
    SubordinadosComponent,
    EjemplosSignal,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), ServiceEmpleados, AuthGuard],
  bootstrap: [App],
})
export class AppModule {}
