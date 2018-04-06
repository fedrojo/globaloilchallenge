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
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

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
    ResultComponent
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
  providers: [AssetsService, RoundsService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
