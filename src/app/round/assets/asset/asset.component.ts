import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Asset} from "../asset.model";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Validator} from "codelyzer/walkerFactory/walkerFn";
import {AssetsService} from "../assets.service";
import {GameService} from "../../../game.service";
import {Branch} from "../branch.model";

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit {


  @Input()  asset: Asset;

  collapsed = false;
  roundToShow = 1;
  activeRoundWhenRoundToShowClicked = 1;

  panelSuccess = 'panel-success';
  panelWarning = 'panel-warning';
  panelDanger = 'panel-danger';
  panelDefault = 'panel-default';

  constructor (private gameService: GameService) { }

  ngOnInit() {
    this.roundToShow = this.gameService.currentRound;

  }

  onPanelHeadingClick() {
    this.collapsed = !this.collapsed;
  }

  public assetCollaspsed(collapsed: boolean ) {
    this.collapsed = collapsed;
  }

  getRounds() {
    return new Array(this.gameService.currentRound);
  }

  getPanelStyle() {

    const sel = this.gameService.getRoundAssetSelection(this.asset.name, this.gameService.currentRound);

    if (sel === null) {
      return this.panelDanger;
    }

    if (this.gameService.currentRoundType === 'play') {
      return this.panelSuccess;
    }

    return this.gameService.isAssetActive(this.gameService.currentRound,this.asset) ?
      this.panelSuccess : this.panelDefault;

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

}
