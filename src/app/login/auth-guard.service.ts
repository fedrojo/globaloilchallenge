import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {GameService} from "../game.service";
import {RoundComponent} from "../round/round.component";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private gameService: GameService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.gameService.gameStarted) {
      if (route.component === RoundComponent) {
        return true;
      } else {
        this.router.navigate(['/round']);
        return false;
      }
    } else {
      if (route.component === RoundComponent) {
        this.router.navigate(['']);
        return false;
      } else {
        return true;
      }

    }
  }


}
