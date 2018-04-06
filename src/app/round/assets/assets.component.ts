import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {GameService} from "../../game.service";
import {Round} from "../round.model";
import {Asset} from "./asset.model";
import {AssetComponent} from "./asset/asset.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {

  playRoundType: boolean;
  round: Round;
  assets: Asset[];

  @ViewChildren('assetComponent') assetComponents:QueryList<AssetComponent>;

  constructor(public gameService: GameService,
              private router: Router) { }

  ngOnInit() {
    this.round = this.gameService.getCurrentRound();
    this.playRoundType = this.gameService.currentRoundType === 'play';
    this.assets = this.gameService.assets;

  }

  onCollapseExpand(status: boolean) {
    this.assetComponents.forEach((assetComponent) => {
      assetComponent.assetCollaspsed(status);
    })
  }

  onRandomSelection() {
    this.gameService.randomSelection();

    this.router.navigateByUrl('/index').then(
      () => {
        this.router.navigateByUrl('/round');
      });
  }


}
