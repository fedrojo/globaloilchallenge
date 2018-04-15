import {Injectable} from "@angular/core";

import * as firebase from 'firebase';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Game} from "./game-management.model";

@Injectable()
export class GameManagementService {

  constructor() { }

  games: string[];
  gameDetail: Game

  initialize() {
    this.games = ['Game 1', 'Game 2', 'Game 3'];
  }

  loadGame(gameName: string) {

    this.gameDetail = {
      name: 'Game 1',
      currentRound: 0,
      players: [
        {
          name: 'Fede',
          currentRound: 0,
          assetValue: null
        },
        {
          name: 'Pablo',
          currentRound: 0,
          assetValue: null
        }
      ]
    }

  }

}
