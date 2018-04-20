import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {StatusBarService} from "../../admin-console/status-bar/status-bar.service";

import * as firebase from 'firebase';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {GameService} from "../../game.service";
import {AdminService} from "../../admin-console/admin.service";

@Component({
  selector: 'app-war-room-round',
  templateUrl: './war-room-round.component.html',
  styleUrls: ['./war-room-round.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})

export class WarRoomRoundComponent implements OnInit {
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  wrongPassword = false;
  passwordMode = false;
  noInternetDetected = false;
  awaitingForRound = false;
  generalError = false;
  generalErrorMessage = '';

  currentWarRoomRound = -1;

  refreshMSeconds = 1000;
  refreshInterval = 20;
  timeToRefresh = 20;

  timerRef;


  constructor(protected statusBarService: StatusBarService,
              protected gameService: GameService,
              private adminService: AdminService) { }

  ngOnInit() {

  }

  public warRoomNextRound() {

    this.wrongPassword = false;
    this.passwordMode = false;
    this.noInternetDetected = false;
    this.generalError = false;
    this.generalErrorMessage = '';
    this.passwordMode = false;
    this.wrongPassword = false;
    this.timeToRefresh = this.refreshInterval;

    // Validate Internet Connection
    if (this.statusBarService.activeConnection) {
      this.noInternetDetected = false;
      if (this.writeRoundToDB()) {
        this.awaitingForRound = true;
        this.awaitForNextRound();
      } else {
        this.generalError = true;
        this.generalErrorMessage = 'Round could not be sent to the server - try again'
      }
    } else {
      this.noInternetDetected = true;
    }


  }

  awaitForNextRound() {
    this.timeToRefresh = this.refreshInterval;

    if (this.timerRef) {
      clearInterval(this.timerRef);
    }

    this.timerRef = setInterval( () => {
      if (this.timeToRefresh <= 1) {
        this.checkNextRound();
        this.timeToRefresh = this.refreshInterval;
      }  else {
        this.timeToRefresh--;
      }
    }, this.refreshMSeconds)
  }

  refreshAwaitingForRound() {
    this.timeToRefresh = 1;
  }

  checkNextRound() {

    return firebase.database().ref( 'games' + '/' + 'gamesTracker/' + this.gameService.warRoomName + '/currentRound')
      .once('value', (snapshot) => {

        if (snapshot.val() > this.gameService.currentRound) {
          if (this.timerRef) {
            clearInterval(this.timerRef._id);
          }
          this.gameService.offlineMode = false;
          if (this.timerRef) {
            clearInterval(this.timerRef._id);
          }
          this.visibleChange.emit(true);
        }

        return false;

      });
  }



  private writeRoundToDB() {
    const path = 'games' + '/' + 'gamesTracker/' + this.gameService.warRoomName
      + '/players/' + this.gameService.teamName;

    const pathDetail = 'games' + '/' + 'gamesDetail/' + this.gameService.warRoomName
      + '/players/' + this.gameService.teamName;

    const tmp = {name: this.gameService.teamName, currentRound: this.gameService.currentRound,
      assetValue: this.gameService.portfolioValues};

    return firebase.database().ref(path).set(tmp)
      .then(
        () => {
          return firebase.database().ref(pathDetail).set(this.gameService.assetSelection)
            .then(
              () => {
                return true;
              }
            ).catch(
              (err) => {
                console.log(err);
                return false;
              }
            );
        }
      ).catch(
        (err) => {
          console.log(err);
          return false;
        }
      );
  }

  showRetry() {
    return (this.noInternetDetected );
  }

  showOfflineMode() {
    return (this.noInternetDetected || this.awaitForNextRound);
  }

  onRetry() {
    this.warRoomNextRound();
  }

  offlineModeGo(e: string) {
    if (e == this.adminService.roundsPasswords[this.gameService.currentRound]) {
      if (this.timerRef) {
        clearInterval(this.timerRef);
      }
      this.visibleChange.emit(true);
    } else {
      this.wrongPassword = true;
    }
  }

}
