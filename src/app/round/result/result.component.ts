import { Component, OnInit } from '@angular/core';
import {GameService} from "../../game.service";
import {ComboChartComponent} from "../../shared/combo-chart/combo-chart.component";
import {Router} from "@angular/router";


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  // Combo Chart
  lineChartScheme = {
    name: 'coolthree',
    selectable: true,
    group: 'Ordinal',
    domain: [
      '#01579b', '#a8385d'
      // , '#00bfa5', '#7aa3e5'
    ]
  };

  comboBarScheme = {
    name: 'singleLightBlue',
    selectable: true,
    group: 'Ordinal',
    domain: [
      '#01579b'
    ]
  };

  lineChartSeries: any[] =   [
    {
      "name": "Oil Price",
      "series": []
    },
  ];

  barChartSeries: any = [];

  view: any[] = [500, 150];


  constructor(private gameService: GameService, private router: Router) { }

  ngOnInit() {
    let roundCount = 1;
    this.barChartSeries.push({name: "R0", value: this.gameService.initialCash});
    this.lineChartSeries[0].series.push({name: "R0", value: this.gameService.rounds[0].oilPriceStart});
    while (roundCount <= this.gameService.rounds.length) {
      this.barChartSeries.push({name: "R" + roundCount.toFixed(), value: 0 });
      this.lineChartSeries[0].series.push({name: "R" + roundCount.toFixed(), value: 0});
      roundCount++;
    }
    this.view = undefined;


  }

  getOilPriceSeries() {
    let roundCount = 1;
    while (roundCount <= this.gameService.currentRound) {
      this.lineChartSeries[0].series[roundCount].value = this.gameService.rounds[roundCount - 1].oilPriceEnd;
      roundCount++;
    }
    return this.lineChartSeries;
  }

  getPortfolioValuesSeries() {
    let roundCount = 1;
    while (roundCount <= this.gameService.currentRound) {
      this.barChartSeries[roundCount].value = Math.round(this.gameService.portfolioValues[roundCount]);
      roundCount++;
    }
    return this.barChartSeries;
  }

  getFinalValue() {
    return this.gameService.companyValuation;
  }

  getPortfolioGrowthText() {
    return this.gameService.companyValuation > this.gameService.initialCash ? 'grown' : 'decreased';
  }

  GetPortfolioGrowth() {

    let cValue = this.gameService.companyValuation;
    if (cValue > this.gameService.initialCash){
      return (100* (cValue-this.gameService.initialCash) / this.gameService.initialCash);
    }
    else {
      return (100*(this.gameService.initialCash - cValue) / this.gameService.initialCash);
    }

  }


  /*
  **
  Combo Chart
  **
  [yLeftAxisScaleFactor]="yLeftAxisScale" and [yRightAxisScaleFactor]="yRightAxisScale"
  exposes the left and right min and max axis values for custom scaling, it is probably best to
  scale one axis in relation to the other axis but for flexibility to scale either the left or
  right axis bowth were exposed.
  **
  */

  yLeftAxisScale(min, max) {
    return {min: `${min}`, max: `${max}`};
  }

  yRightAxisScale(min, max) {
    min = 0;
    max = 200;
    return {min: `${min}`, max: `${max}`};
  }

  yLeftTickFormat(data) {
    return `$${data.toLocaleString()}`;
  }

  yRightTickFormat(data) {
    return `$${data.toLocaleString()}`;
  }


}
