import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {Observable} from "rxjs";
import {AngularFire, FirebaseAuthState} from "angularfire2";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private af: AngularFire, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.af.auth
      .take(1)
      //!authstate = true is state not there
      //!!authstate = true if state is there
      .map((authState: FirebaseAuthState) => !!authState)
      .do(authenticated => {
        if (!authenticated) this.router.navigate(['/login']);
      });
  }
}
