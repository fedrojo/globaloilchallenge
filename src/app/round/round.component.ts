import {Component, OnInit} from '@angular/core';
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
    } else if (this.gameService.currentRound < this.gameService.rounds.length) {
      this.gameService.nextRound();
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


}
