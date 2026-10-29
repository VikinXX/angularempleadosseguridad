import { ChangeDetectorRef, Injectable, signal } from '@angular/core';
import { Empleado } from '../models/Empleado';
import { ServiceEmpleados } from './Service.empleados';

@Injectable({
    providedIn: 'root'
})
export class ServiceAuthEmpleados {

    public user = signal<Empleado | null>(null) ;

    constructor(private _service: ServiceEmpleados) {}

    almacenarEmpleado(token: string) {
        sessionStorage.setItem('token', token);

        this._service.getPerfil().subscribe((res : any) => {
            this.user.set(res);
        })
    }

    removeEmpleado() {
        sessionStorage.removeItem('token');
        this.user.set(null);
    }

}