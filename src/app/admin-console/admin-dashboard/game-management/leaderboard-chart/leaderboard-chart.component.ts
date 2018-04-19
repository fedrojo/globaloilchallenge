import { Component, OnInit } from '@angular/core';
import {GameManagementService} from "../game-management.service";
import {Game} from "../game-management.model";

@Component({
  selector: 'app-leaderboard-chart',
  templateUrl: './leaderboard-chart.component.html',
  styleUrls: ['./leaderboard-chart.component.css']
})
export class LeaderboardChartComponent implements OnInit {

  single: any[];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Asset value';
  showYAxisLabel = true;
  yAxisLabel = 'Team';

  colorScheme = {
    domain: [
      '#e6194b',
      '#3cb44b',
      '#ffe119',
      '#0082c8',
      '#f58231',
      '#911eb4',
      '#46f0f0',
      '#f032e6',
      '#d2f53c',
      '#fabebe',
      '#008080',
      '#e6beff',
      '#aa6e28',
      '#fffac8',
      '#800000',
      '#aaffc3',
      '#808000',
      '#ffd8b1',
      '#000080',
      '#808080',
      '#000000']
  };

  currentGame: Game;

  constructor() { }

  ngOnInit() {

  }

  public updateScores(game: Game) {

    this.currentGame = game;

    if (!this.currentGame || !this.currentGame.players) {
      return null;
    }

    let toReturn = [];

    const round =  this.currentGame.currentRound > 4 ? 4 : this.currentGame.currentRound;

    for (let player of this.currentGame.players) {
      let toAdd;
      if (player.currentRound < round) {
        toAdd = {name: player.name, value: 0};
      } else if (player.assetValue.length < round) {
        toAdd = {name: player.name, value: 0};
      } else if (!player.assetValue[round]) {
        toAdd = {name: player.name, value: 0};
      } else {
        toAdd = {name: player.name, value: Math.round(player.assetValue[round])};
      }
      toReturn.push(toAdd);
    }

    toReturn.sort( (a,b) => a.value > b.value ? -1 : 1);

    this.single = toReturn;
  }

}
