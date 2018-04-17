import {Component, Input, OnInit} from '@angular/core';
import {Game} from "../game-management.model";
import {GameManagementService} from "../game-management.service";

@Component({
  selector: 'app-status-table',
  templateUrl: './status-table.component.html',
  styleUrls: ['./status-table.component.css']
})
export class StatusTableComponent implements OnInit {

  currentGame: Game;

  constructor() { }

  ngOnInit() {
  }

  public updateScores(game: Game) {
    this.currentGame = game;
  }


}
