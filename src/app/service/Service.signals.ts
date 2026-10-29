import { Injectable, signal, computed } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ServiceSignals {
    
  public contador = signal(0);

  // Podemos utilizar computed() para acciones de un signal
  public doble = computed(() => {
    return this.contador() * 2;
  })

  reiniciarContador() {
    this.contador.set(0);
  }

  incrementarContador() {
    this.contador.update(value => value + 1);
  }
}