import { Component, OnInit } from '@angular/core';
import {Game} from '../game-management.model';

@Component({
  selector: 'app-progress-chart',
  templateUrl: './progress-chart.component.html',
  styleUrls: ['./progress-chart.component.css']
})
export class ProgressChartComponent implements OnInit {

  multi: any[];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Asset value';
  showYAxisLabel = true;
  yAxisLabel = 'Round';

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

  // line, area
  autoScale = true;

  constructor() { }

  ngOnInit() {
    this.multi = null;
  }

  public updateScores(game: Game) {
    this.multi = null;
    this.currentGame = game;

    if (!this.currentGame || !this.currentGame.players) {
      return null;
    }

    let toReturn = [];

    for (let player of this.currentGame.players) {
      let roundCount = 0;
      let toAdd = {name: player.name, series: []};
      while(roundCount < this.currentGame.currentRound + 1 && roundCount < 5) {
        let round = 'R' + roundCount.toFixed(0);
        if (player.currentRound < roundCount) {
          toAdd.series.push({name: round, value: 0});
        } else if (player.assetValue.length < roundCount) {
          toAdd.series.push({name: round, value: 0});
        } else if (!player.assetValue[roundCount]) {
          toAdd.series.push({name: round, value: 0});
        } else {
          toAdd.series.push({name: round, value: Math.round(player.assetValue[roundCount])});
        }
        roundCount++;
      }
      toReturn.push(toAdd);
    }

    this.multi = toReturn;
  }

  }
