import { Component, signal, computed, inject } from '@angular/core';
import { ServiceSignals } from '../../service/Service.signals';

@Component({
  selector: 'app-ejemplos-signal',
  standalone: false,
  styleUrl: './ejemplos-signal.css',
  templateUrl: './ejemplos-signal.html',
})
export class EjemplosSignal {

  private _serviceSignal: ServiceSignals =  inject(ServiceSignals);
  public contador = this._serviceSignal.contador;
  public doble = this._serviceSignal.doble;

  reiniciarContador() {
    this._serviceSignal.reiniciarContador();
  }

  incrementarContador() {
    this._serviceSignal.incrementarContador();
  }
}
