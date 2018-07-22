import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private http: HttpClient
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.http.get<boolean>('/check', { headers: {'token':localStorage.token}}).pipe(obs => {
      obs.subscribe(res => {
        if(!res){
          this.router.navigate(['/login'])
        }
      })
      return obs;
    })
  }
}
