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
  selector: 'app-war-room-login',
  templateUrl: './war-room-login.component.html',
  styleUrls: ['./war-room-login.component.css'],
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

export class WarRoomLoginComponent implements OnInit {
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  passwordMode = false;
  wrongPassword = false;
  noInternetDetected = false;
  awaitingForStart = false;
  gameAlreadyStarted = false;
  validTeamName = true;
  warRoomExists = true;
  generalError = false;
  generalErrorMessage = '';

  currentWarRoomRound = -1;

  warRoomName: string;
  teamName: string;

  refreshMSeconds = 1000;
  refreshInterval = 20;
  timeToRefresh = 20;

  activeView = 0;

  timerRef;


  constructor(protected statusBarService: StatusBarService,
              private gameService: GameService,
              private adminService: AdminService) { }

  ngOnInit() {

  }

  close() {
    this.visibleChange.emit(false);
  }

  public initializeWarRoom(teamName: string, warRoomName: string) {
    this.warRoomName = warRoomName;
    this.teamName = teamName;
    this.noInternetDetected = false;
    this.awaitingForStart = false;
    this.gameAlreadyStarted = false;
    this.validTeamName = true;
    this.warRoomExists = true;
    this.generalError = false;
    this.generalErrorMessage = '';
    this.passwordMode = false;
    this.wrongPassword = false;
    this.timeToRefresh = this.refreshInterval;

    // Validate Internet Connection
    if (this.statusBarService.activeConnection) {
      this.noInternetDetected = false;

      this.validateWarRoomName()
        .then(
        () => {
          if (this.warRoomExists && !this.gameAlreadyStarted) {
            this.validateTeamName()
              .then(
                () => {
                  if (this.validTeamName) {
                    if (this.writeTeamToDB()) {
                      this.awaitingForStart = true;
                      this.awaitForGameToStart();
                    } else {
                      this.generalError = true;
                      this.generalErrorMessage = 'Team could not be added to the game - please close and try again'
                    }
                  }
                });
          }
        });
    } else {
      this.noInternetDetected = true;
    }


  }

  awaitForGameToStart() {
    this.timeToRefresh = this.refreshInterval;

    if (this.timerRef) {
      clearInterval(this.timerRef);
    }

    this.timerRef = setInterval( () => {
      if (this.timeToRefresh <= 1) {
        this.checkGameStarted();
        this.timeToRefresh = this.refreshInterval;
      }  else {
        this.timeToRefresh--;
      }
    }, this.refreshMSeconds)
  }

  refreshAwaitingForPlayers() {
    this.timeToRefresh = 1;
  }

  checkGameStarted() {

    return firebase.database().ref( 'games' + '/' + 'gamesTracker/' + this.warRoomName + '/currentRound')
      .once('value', (snapshot) => {

        if (snapshot.val() > 0) {
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



  private writeTeamToDB() {
    const path = 'games' + '/' + 'gamesTracker/' + this.warRoomName + '/players/' + this.teamName;

    const tmp = {name: this.teamName, currentRound: 0, assetValue: [this.gameService.initialCash]};

    return firebase.database().ref(path).set(tmp)
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

  private validateWarRoomName() {

    return firebase.database().ref( 'games' + '/' + 'gamesTracker/' + this.warRoomName)
      .once('value', (snapshot) => {

        if (!snapshot.val()) {
          this.warRoomExists = false;
        } else {
          this.warRoomExists  = true;
          const snapJson = snapshot.toJSON();
          this.currentWarRoomRound = snapJson['currentRound'];
          // if (this.currentWarRoomRound > 0 ) {
          //   this.gameAlreadyStarted = true;
          // } else {
            this.gameAlreadyStarted = false;
          // }

        }

        return false;

      });
  }

  private validateTeamName() {
    const path = 'games' + '/' + 'gamesTracker/' + this.warRoomName + '/players/' + this.teamName;
    return firebase.database().ref( path)
      .once('value', (snapshot) => {

        if (!snapshot.val()) {
          this.validTeamName = true;
        } else {
          this.validTeamName  = false;
        }

        return false;

      });
  }

  showRetry() {
    return (this.noInternetDetected || !this.warRoomExists);
  }

  showOfflineMode() {
    return (this.noInternetDetected || this.awaitingForStart);
  }

  showClose() {
    return (this.noInternetDetected || !this.warRoomExists ||
      this.gameAlreadyStarted || !this.validTeamName || this.generalError);
  }

  onRetry() {
    this.initializeWarRoom(this.teamName, this.warRoomName);
  }

  offlineModeGo(e: string) {
    if (e == this.adminService.roundsPasswords[0]) {
      if (this.timerRef) {
        clearInterval(this.timerRef);
      }
      this.visibleChange.emit(true);
    } else {
      this.wrongPassword = true;
    }
  }

}
