import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceEmpleados } from '../../service/Service.empleados';
import { Empleado } from '../../models/Empleado';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empleados-component',
  standalone: false,
  styleUrl: './empleados-component.css',
  templateUrl: './empleados-component.html',
})
export class EmpleadosComponent implements OnInit {

  public empleados!: Empleado[];

  constructor(private _cdr: ChangeDetectorRef, private _service: ServiceEmpleados, private _router: Router) {}

  getEmpleados() {
    this._service.getEmpleados().subscribe((res: any) => {
      this.empleados = res;
      this._cdr.detectChanges();
    });
  }

  ngOnInit(): void {
      this.getEmpleados();
  }

}
