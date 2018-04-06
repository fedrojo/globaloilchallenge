import { Component, OnInit } from '@angular/core';
import {GameService} from "../game.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.css']
})
export class RoundComponent implements OnInit {

  constructor(private gameService: GameService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {

    if (this.gameService.currentRoundType === 'play') {
      this.gameService.submitRound();
    } else {
      this.gameService.nextRound();
    }

  }

  canSubmit() {

    if (this.gameService.currentRound == this.gameService.rounds.length  &&
    this.gameService.currentRoundType === 'results') {
      return true;
    }

    return !this.gameService.isRoundValid();
  }

  showResults() {
    return (this.gameService.currentRound == this.gameService.rounds.length  &&
      this.gameService.currentRoundType === 'results');
  }


}
