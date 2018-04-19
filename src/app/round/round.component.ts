import {Component, OnInit, ViewChild} from '@angular/core';
import {GameService} from "../game.service";
import {Router} from "@angular/router";
import {WarRoomRoundComponent} from "./war-room-round/war-room-round.component";
import {AssetsComponent} from "./assets/assets.component";

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.css']
})
export class RoundComponent implements OnInit {

  @ViewChild('warRoomDialog') warRoomDialog: WarRoomRoundComponent;
  @ViewChild('assetsComponent') assetsComponent: AssetsComponent;

  showWarRoomDialog = false;


  constructor(private gameService: GameService,
              private router: Router) { }

  ngOnInit() {
  }

  getSubmitButtonText() {
    if (this.gameService.currentRoundType === 'play') {
      return 'Submit';
    } else if (this.gameService.currentRound < this.gameService.rounds.length) {
      return 'Next Round';
    } else {
      return 'Exit';
    }
  }

  onSubmit() {

    if (this.gameService.currentRoundType === 'play') {
      this.gameService.submitRound();
      this.assetsComponent.nextRound();
      if (!this.gameService.standAloneGame) {
        this.showWarRoomDialog = true;
        this.warRoomDialog.warRoomNextRound();
      }
    } else if (this.gameService.currentRound < this.gameService.rounds.length) {
      this.gameService.nextRound();
      this.assetsComponent.nextRound();
    } else {
      this.onExit();
    }

  }

  canSubmit() {
    return (!this.gameService.isRoundValid() && !this.showResults());
  }

  showResults() {
    return (this.gameService.currentRoundType === 'results');
  }

  onExit() {
    this.gameService.exitGame();
    this.router.navigate(['']);
  }

  onWarRoomDialogVisibleChanged(success: boolean) {
    if (success) {
      this.showWarRoomDialog = false;
    }
  }

}
