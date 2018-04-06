import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {AdminConsoleComponent} from "./admin-console/admin-console.component";
import {RoundComponent} from "./round/round.component";

const appRoutes: Routes = [
  { path: 'admin', component: AdminConsoleComponent},
  { path: 'round', component: RoundComponent},
  { path: '', component: LoginComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
