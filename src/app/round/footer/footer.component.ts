import { Component, OnInit } from '@angular/core';
import {GameService} from "../../game.service";
import {Round} from "../round.model";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  constructor(public gameService: GameService) { }

  ngOnInit() {

  }

  getRoundNewsFormatted() {

    let newsFormatted = '';

    for (let news of this.gameService.currentRoundType === 'play' ?
      this.currentRound().initialWorldState :
      this.currentRound().endWorldState) {
      newsFormatted += news + '****** ';
    }

    return newsFormatted;
  }

  currentRound() {
    return this.gameService.rounds[this.gameService.currentRound-1];
  }

}
