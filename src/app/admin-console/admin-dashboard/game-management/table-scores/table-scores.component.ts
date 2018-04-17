import { Component, OnInit } from '@angular/core';
import {GameManagementService} from "../game-management.service";
import {Game, Players} from "../game-management.model";

@Component({
  selector: 'app-table-scores',
  templateUrl: './table-scores.component.html',
  styleUrls: ['./table-scores.component.css']
})
export class TableScoresComponent implements OnInit {

  currentGame: Game;

  constructor() { }

  ngOnInit() {

  }

  public updateScores(game: Game) {
    this.currentGame = game;
  }

  getPlayerScore(player: Players, round: number) : number {
    if (!this.currentGame) {
      return null;
    }
    if (player.currentRound < round) {
      return null;
    }
    if (!player.assetValue || player.assetValue.length < round ) {
      return null;
    }

    return player.assetValue[round];
  }

}
