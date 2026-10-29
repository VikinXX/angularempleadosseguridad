import { ChangeDetectorRef, Component } from '@angular/core';
import { inject } from '@angular/core';
import { ServiceSignals } from '../../service/Service.signals';
import { ServiceAuthEmpleados } from '../../service/Service.auth.empleados';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent {

  private _serviceAuthEmpleados: ServiceAuthEmpleados = inject(ServiceAuthEmpleados);
  private _serviceSignal: ServiceSignals = inject(ServiceSignals);
  public contador = this._serviceSignal.contador;
  public user = this._serviceAuthEmpleados.user;

  constructor(private _cdr: ChangeDetectorRef) {}

  logout() {
    this._serviceAuthEmpleados.removeEmpleado();
    this._cdr.detectChanges();
    //sessionStorage.removeItem('token');
  }

}
