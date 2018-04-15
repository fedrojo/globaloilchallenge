import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {AdminConsoleComponent} from "./admin-console/admin-console.component";
import {RoundComponent} from "./round/round.component";
import {AuthGuard} from "./login/auth-guard.service";
import {DummyComponentComponent} from "./dummy-component/dummy-component.component";
import {AdminDashboardComponent} from "./admin-console/admin-dashboard/admin-dashboard.component";
import {AdminGuard} from "./admin-console/admin-guard.service";

const appRoutes: Routes = [
  { path: 'admin', component: AdminConsoleComponent},
  { path: 'admindashboard', component: AdminDashboardComponent, canActivate: [AdminGuard]},
  { path: 'round', component: RoundComponent, canActivate: [AuthGuard] },
  { path: 'dummy', component: DummyComponentComponent},
  { path: '', component: LoginComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
