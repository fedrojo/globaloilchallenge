import { Component, OnInit } from '@angular/core';
import {Game} from "../game-management.model";

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
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
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
        let round = "R" + roundCount.toFixed(0);
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
