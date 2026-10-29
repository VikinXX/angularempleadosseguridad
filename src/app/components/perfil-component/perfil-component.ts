import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Empleado } from '../../models/Empleado';
import { ServiceEmpleados } from '../../service/Service.empleados';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-component',
  standalone: false,
  styleUrl: './perfil-component.css',
  templateUrl: './perfil-component.html',
})
export class PerfilComponent implements OnInit {

  public perfil!: Empleado;

  constructor(private _service: ServiceEmpleados, private _cdr: ChangeDetectorRef, private _router: Router) {

  }

  getPerfil() {
    this._service.getPerfil().subscribe((res: any) => {
      this.perfil = res;
      this._cdr.detectChanges();
    });
  }

  ngOnInit(): void {
    this.getPerfil();
    
  }

}
