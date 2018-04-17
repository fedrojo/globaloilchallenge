import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {setInterval} from "timers";
import {GameManagementService} from "./game-management.service";
import {Game} from "./game-management.model";
import {LeaderboardChartComponent} from "./leaderboard-chart/leaderboard-chart.component";
import {StatusTableComponent} from "./status-table/status-table.component";
import {TableScoresComponent} from "./table-scores/table-scores.component";
import {ProgressChartComponent} from "./progress-chart/progress-chart.component";
import {StatusBarService} from "../../status-bar/status-bar.service";

@Component({
  selector: 'app-game-management',
  templateUrl: './game-management.component.html',
  styleUrls: ['./game-management.component.css'],
  providers: [GameManagementService]
})
export class GameManagementComponent implements OnInit {

  @ViewChild('addWarRoom') addWarRoomInput: ElementRef;

  @ViewChild('statustable') statusTable: StatusTableComponent;
  @ViewChild('tablescores') tableScores: TableScoresComponent;
  @ViewChild('leaderboard') leaderboardChart: LeaderboardChartComponent;
  @ViewChild('progress') progressChart: ProgressChartComponent;

  addMode = false;
  gameLoaded = false;
  loadedGame : Game;
  validWarRoomName = false;

  warRoomForm: FormGroup;
  selectedWarRoom: string;

  warRooms = ['room1', 'room2', 'room3'];

  refreshMSeconds = 1000;
  refreshInterval = 60;
  timeToRefresh = 60;

  activeView = 0;

  timerRef;

  constructor(private gameManagementService: GameManagementService,
              private statusBarService: StatusBarService) { }

  ngOnInit() {

    this.warRoomForm = new FormGroup({
      'warRoom': new FormControl('')
    });

    this.gameManagementService.getGames()
      .then(
      () => {
        this.warRooms = this.gameManagementService.games;
        this.warRoomForm.setValue( { warRoom: this.warRooms[0]})
      })
      .catch(
      (err) => {
        this.statusBarService.setTempStatus('Error - Unable to load games. ', err.message);
      });

  }

  onWarRoomChanged() {
    this.selectedWarRoom = this.warRoomForm.value.warRoom;
  }

  onAddWarRoom() {
    this.addMode = true;
    this.addWarRoomInput.nativeElement.value = 'New War Room';
    this.isWarRoomNameValid();
    this.addWarRoomInput.nativeElement.focus();
  }

  onCancelEdit() {
    if (this.gameLoaded) {
      this.gameLoaded = false;
    } else {
      this.addMode = false;
      this.addWarRoomInput.nativeElement.value = '';
    }

    if (this.timerRef) {
      clearInterval(this.timerRef._id)
      this.timerRef = null;
    }


  }

  onWarRoomSave() {
    if (this.addMode) {
      const newName = this.addWarRoomInput.nativeElement.value;
      if (this.gameManagementService.createGame(newName)) {
        this.statusBarService.setTempStatus('Game Created', '', false);
        this.warRooms = this.gameManagementService.games;
        this.addMode = false;
        this.addWarRoomInput.nativeElement.value = '';
        this.warRoomForm.setValue({warRoom: newName});
        this.onWarRoomChanged();
        this.onLoadWarRoom();
      } else {
        this.statusBarService.setTempStatus('Error', 'Game could not be created', true);
      }
    }
  }

  onLoadWarRoom() {


    this.gameManagementService.loadGame(this.warRoomForm.value.warRoom)
      .then(
        () => {
          this.gameLoaded = true;
          this.loadedGame = this.gameManagementService.currentGame;
          this.updateView();
          this.setRefreshTimer();
        })
      .catch(
        (err) => {
          this.statusBarService.setTempStatus('Error - Unable to load game. ', err.message);
          this.onCancelEdit();
        });
  }

  setRefreshTimer() {
    this.timeToRefresh = this.refreshInterval;
    if (this.timerRef) {
      clearInterval(this.timerRef._id);
    }


    this.timerRef = setInterval( () => {
      if (this.timeToRefresh === 1) {
        this.refreshGame();
      }  else {
        this.timeToRefresh--;
      }
    }, this.refreshMSeconds)
  }

  refreshGame() {
    this.gameManagementService.loadGame(this.loadedGame.name)
      .then(
        () => {
          this.gameLoaded = true;
          this.loadedGame = this.gameManagementService.currentGame;
          this.updateView();
          this.setRefreshTimer();
        })
      .catch(
        (err) => {
          this.statusBarService.setTempStatus('Error - Unable to refresh game. ', err.message);
          this.onCancelEdit();
        });
  }

  updateView() {
    switch (this.activeView) {
      case 0:
        this.statusTable.updateScores(this.loadedGame);
        break;
      case 1:
        this.tableScores.updateScores(this.loadedGame);
        break;
      case 2:
        this.leaderboardChart.updateScores(this.loadedGame);
        break;
      case 3:
        this.progressChart.updateScores(this.loadedGame);
        break;
    }
  }

  onMoveToNextRound() {
    if (this.gameManagementService.moveToNextRound()) {
      //Success
    } else {
      this.statusBarService.setTempStatus('Error', 'Game could not move to next round', true);
    }
  }

  isWarRoomNameValid() {
    if (this.addWarRoomInput && this.addWarRoomInput.nativeElement && this.addWarRoomInput.nativeElement.value) {
      const value = this.addWarRoomInput.nativeElement.value;
      if (value.length === 0) {
        this.validWarRoomName = false;
        return;
      }
      if (this.warRooms.indexOf( value) > -1) {
        this.validWarRoomName = false;
        return;
      }

      this.validWarRoomName = true;
      return;
    }
    this.validWarRoomName = false;
    return;
  }

  getRoundIcon(round: number): string {
    if (!this.loadedGame) {
      return '';
    }
    if (round > this.loadedGame.currentRound) {
      return '';
    }
    if (round === this.loadedGame.currentRound) {
      return 'glyphicon-off'
    }
    return 'glyphicon-ok-circle';
  }

}
