import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { AuthService } from "./auth.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
        return this.authService.user.pipe(
            take(1),
            map(user => {
                const isAuth = !!user;
                if (isAuth && state.url !== '/auth') {
                    // Authenticated user, allow access to the requested route
                    return true;
                } else if (!isAuth && state.url === '/auth') {
                    // Not authenticated and trying to access auth page, allow access
                    return true;
                } else {
                    // For all other cases, redirect appropriately
                    if (isAuth) {
                        // Authenticated user trying to access unauthorized route, redirect to recipes
                        return this.router.createUrlTree(['/recipes']);
                    } else {
                        // Not authenticated user trying to access unauthorized route, redirect to auth
                        return this.router.createUrlTree(['/auth']);
                    }
                }
            })
        );
    }
}
