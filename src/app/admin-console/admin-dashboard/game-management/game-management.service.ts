import {Injectable} from "@angular/core";

import * as firebase from 'firebase';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Game, Players} from "./game-management.model";

@Injectable()
export class GameManagementService {

  constructor() { }

  games: string[];
  currentGame: Game

  initializeGames() {
    return firebase.database().ref( 'games' + '/' + 'gamesList')
      .once('value', (snapshot) => {
        this.games = [];
        snapshot.forEach((snap) => {

          this.games.push((snap.key.toString()));

          return false;

        });

        return false;
      });
  }

  getGames() {
    return this.initializeGames().then(
      () => this.games
    );
  }

  createGame(newGameName: string) {

    const newGame =  {name: newGameName, created: Date.now() };
    const newGameTracker =  {name: newGameName, currentRound: 0 };

    return firebase.database().ref('games/gamesList/' + newGameName).set(newGame)
      .catch(
        (err) => {
          console.log(err);
          return false;
        }
      )
      .then(
        () => {
          return firebase.database().ref('games/gamesTracker/' + newGameName).set(newGameTracker)
            .catch(
              (err) => {
                console.log(err);
                return false;
              }
            )
            .then(
              () => {
                this.games.push(newGameName);
                return true;
              }
            );
        }
      );
  }

  loadGame(gameName: string) {

    return firebase.database().ref( 'games' + '/' + 'gamesTracker/' + gameName)
      .once('value', (snapshot) => {
        this.currentGame = null;

        const snapJson = snapshot.toJSON();

        let tmpGame: Game = {
          name: gameName,
          currentRound: snapJson['currentRound'],
          players: []
        } ;

        if (snapJson['players']) {
          snapshot.child('players').forEach((player) => {
            const playerJson = player.toJSON();
            const playerToAdd: Players = new Players(
              playerJson['name'],
              playerJson['currentRound'],
              []
            );

            if (playerJson['assetValue']) {
              player.child('assetValue').forEach((valueSnap) => {
                playerToAdd.assetValue.push(valueSnap.val());

                return false;
              });
            }

            tmpGame.players.push(playerToAdd);
            return false;
          });
        }

        this.currentGame = tmpGame;

        return false;

      });

  }

  moveToNextRound() {

    if (!this.currentGame) {
      return false;
    }

    if (this.currentGame.currentRound === 5) {
      return false;
    }

    const nextRound = this.currentGame.currentRound + 1;

    return firebase.database().ref('games/gamesTracker/' + this.currentGame.name + '/currentRound')
      .set(nextRound)
      .catch(
        (err) => {
          console.log(err);
          return false;
        }
      )
      .then(
        () => {
          this.currentGame.currentRound = nextRound;
          return true;
        }
      );
  }

}
