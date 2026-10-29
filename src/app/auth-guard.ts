import { Injectable } from '@angular/core';
import { 
  CanActivate, 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot, 
  UrlTree, 
  GuardResult
} from '@angular/router';
import { Router, MaybeAsync } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    if(sessionStorage.getItem('token')) {
      // Si tenemos un token dejamos pasar
      return true;

    }else{
      // Si el usuario no esta autorizado, lo redirigimos al login y le pasamos la url a la que intentaba acceder.
      return this._router.createUrlTree(['/Login'], {queryParams: {returnUrl: state.url}});
    }
    
  }
  
}