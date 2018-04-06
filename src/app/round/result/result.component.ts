import { Component, OnInit } from '@angular/core';
import {GameService} from "../../game.service";
import {NgxChartsModule} from '@swimlane/ngx-charts';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  multi: any[] =   [{
    "name": "Germany",
    "series": [
      {
        "name": "1",
        "value": 3000
      },
      {
        "name": "2",
        "value": 4000
      },
      {
        "name": "3",
        "value": 2100
      }
    ]
  }];

  view: any[] = [500, 250];


  constructor(private gameService: GameService) { }

  ngOnInit() {
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

}
