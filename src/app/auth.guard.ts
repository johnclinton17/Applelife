import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot ,Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // return true;

        if (localStorage.getItem('expirecheck')) {
            var record = JSON.parse(localStorage.getItem('expirecheck'));

            if (new Date().getTime() > record.timestamp) {         
                localStorage.removeItem('expirecheck');
                this.router.navigate(['']);
                return false;
            } else {

                return true;
            }
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['']);
        return false;

    
  }
}
