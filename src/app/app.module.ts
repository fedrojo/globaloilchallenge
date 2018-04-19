import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminConsoleComponent } from './admin-console/admin-console.component';
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from "./app-routing.module";
import { RoundComponent } from './round/round.component';
import {AssetsService} from "./round/assets/assets.service";
import {RoundsService} from "./round/rounds.service";
import {GameService} from "./game.service";
import { NavbarComponent } from './round/navbar/navbar.component';
import { FooterComponent } from './round/footer/footer.component';
import { AssetsComponent } from './round/assets/assets.component';
import { AssetComponent } from './round/assets/asset/asset.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AssetRoundComponent } from './round/assets/asset/asset-round/asset-round.component';
import { ResultComponent } from './round/result/result.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ComboChartComponent } from './shared/combo-chart/combo-chart.component';
import {ComboSeriesVerticalComponent} from "./shared/combo-chart/combo-series-vertical.component";
import {AuthGuard} from "./login/auth-guard.service";
import { DummyComponentComponent } from './dummy-component/dummy-component.component';
import { AdminDashboardComponent } from './admin-console/admin-dashboard/admin-dashboard.component';
import {AdminService} from "./admin-console/admin.service";
import {AdminGuard} from "./admin-console/admin-guard.service";
import { GameManagementComponent } from './admin-console/admin-dashboard/game-management/game-management.component';
import { StatusTableComponent } from './admin-console/admin-dashboard/game-management/status-table/status-table.component';
import { TableScoresComponent } from './admin-console/admin-dashboard/game-management/table-scores/table-scores.component';
import { LeaderboardChartComponent } from './admin-console/admin-dashboard/game-management/leaderboard-chart/leaderboard-chart.component';
import { ProgressChartComponent } from './admin-console/admin-dashboard/game-management/progress-chart/progress-chart.component';
import { StatusBarComponent } from './admin-console/status-bar/status-bar.component';
import {StatusBarService} from "./admin-console/status-bar/status-bar.service";
import { WarRoomLoginComponent } from './login/war-room-login/war-room-login.component';
import { WarRoomRoundComponent } from './round/war-room-round/war-room-round.component';
import { AdminGeneralComponent } from './admin-console/admin-general/admin-general.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminConsoleComponent,
    RoundComponent,
    NavbarComponent,
    FooterComponent,
    AssetsComponent,
    AssetComponent,
    AssetRoundComponent,
    ResultComponent,
    ComboChartComponent,
    ComboSeriesVerticalComponent,
    DummyComponentComponent,
    AdminDashboardComponent,
    GameManagementComponent,
    StatusTableComponent,
    TableScoresComponent,
    LeaderboardChartComponent,
    ProgressChartComponent,
    StatusBarComponent,
    WarRoomLoginComponent,
    WarRoomRoundComponent,
    AdminGeneralComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthGuard,
    AssetsService,
    RoundsService,
    GameService,
    AdminService,
    AdminGuard,
    StatusBarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
