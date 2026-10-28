import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class ServiceEmpleados {

    constructor(private _http: HttpClient) {}

    login(loginObject: object): Observable<any> {
        return this._http.post(environment.url + 'Auth/Login', loginObject);
    }

    getEmpleados(): Observable<any> {
        let headers = new HttpHeaders().set("Authorization", "bearer " + sessionStorage.getItem("token"));
        headers = headers.set("withCredentials", "true");
        return this._http.get(environment.url + 'api/Empleados', {headers: headers});
    }

    getPerfil(): Observable<any> {
        let headers = new HttpHeaders().set("Authorization", "bearer " + sessionStorage.getItem("token"));
        headers = headers.set("withCredentials", "true");
        
        return this._http.get(environment.url + 'api/Empleados/PerfilEmpleado', {headers: headers});
    }

    getSubordinados(): Observable<any> {
        let headers = new HttpHeaders().set("Authorization", "bearer " + sessionStorage.getItem("token"));
        headers = headers.set("withCredentials", "true");

        return this._http.get(environment.url + 'api/Empleados/Subordinados', {headers: headers});
    }

}