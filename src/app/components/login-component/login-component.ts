import { Component, ViewChild, ElementRef, OnInit, inject } from '@angular/core';
import { ServiceEmpleados } from '../../service/Service.empleados';
import { Router } from '@angular/router';
import { ServiceAuthEmpleados } from '../../service/Service.auth.empleados';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent implements OnInit {

  private _serviceAuthEmpleados: ServiceAuthEmpleados = inject(ServiceAuthEmpleados);
  @ViewChild("username") username!: ElementRef;
  @ViewChild("password") password!: ElementRef;

  constructor(private _service: ServiceEmpleados, private _router: Router) {
  }

  login(){

    let object = {
      userName: this.username.nativeElement.value,
      password: this.password.nativeElement.value
    }

    this._service.login(object).subscribe((res: any) => {
      //sessionStorage.setItem("token", res.response);
      //console.log(sessionStorage.getItem("token"));
      this._serviceAuthEmpleados.almacenarEmpleado(res.response);
      this._router.navigate(["/"]);
      
    })
  }

  ngOnInit() {
    if(sessionStorage.getItem("token")){
      this._router.navigate(["/"]);
    }
  }

}
