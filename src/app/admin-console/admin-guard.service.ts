import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {RoundComponent} from "../round/round.component";
import {AdminService} from "./admin.service";

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private adminService: AdminService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.adminService.validated) {
      return true;
    } else {
      this.router.navigate(['/admin']);
      return false;
    }
  }


}
