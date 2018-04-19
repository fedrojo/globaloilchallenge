import {Component, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {Asset} from "../asset.model";
import {GameService} from "../../../game.service";
import {AssetRoundComponent} from "./asset-round/asset-round.component";

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit {


  @Input()  asset: Asset;
  @ViewChildren('assetRound') assetRound: QueryList<AssetRoundComponent>;

  roundToShow = 1;
  activeRoundWhenRoundToShowClicked = 1;

  panelSuccess = 'panel-success';
  panelWarning = 'panel-warning';
  panelDanger = 'panel-danger';
  panelDefault = 'panel-default';

  panelStyle = 'panel-default';

  constructor (private gameService: GameService) { }

  ngOnInit() {
    this.roundToShow = this.gameService.currentRound;
  }


  getRounds() {
    return new Array(this.gameService.currentRound);
  }

  public setPanelStyle() {

    const sel = this.gameService.getRoundAssetSelection(this.asset.name, this.gameService.currentRound);

    if (this.gameService.currentRoundType === 'play') {
      if (sel === null) {
        this.panelStyle = this.panelDanger;
        return;
      } else {
        this.panelStyle = this.panelSuccess;
        return;
      }
    }

    this.panelStyle = this.gameService.isAssetActive(this.gameService.currentRound,this.asset) ?
      this.panelSuccess : this.panelDefault;

  }

  public updateSelection() {
    const lastRound = this.assetRound.last;
    lastRound.updateSelection();
    this.setPanelStyle();
  }

  roundClick(round: number) {
    this.activeRoundWhenRoundToShowClicked = this.gameService.currentRound;
    this.roundToShow = round;
  }

  getRoundToShow() {
    if (this.activeRoundWhenRoundToShowClicked < this.gameService.currentRound) {
      return this.gameService.currentRound;
    }
    return this.roundToShow;
  }

  openAssetCard(assetName: string) {
    // window.open('/assets/' + assetName + '.pdf');
  }

}
