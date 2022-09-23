import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  NavigationEnd,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { filter, take } from 'rxjs';
import { AuthService } from 'src/app/pages/account/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  private from = '';
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isLoggedOut()) {
      this.router.events
        .pipe(
          filter((e) => e instanceof NavigationEnd),
          take(1)
        )
        .subscribe((event) => {
          // we store the url where we were supposed to visit
          // in order to be redirected there once authentication completed
          const from = (event as NavigationEnd).url ?? '';
          this.router.navigateByUrl('/authentication', { state: { from } });
        });
    }
    return true;
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(route, state);
  }
}
