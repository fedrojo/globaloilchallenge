import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {setInterval} from "timers";
import {GameManagementService} from "./game-management.service";
import {Game} from "./game-management.model";

@Component({
  selector: 'app-game-management',
  templateUrl: './game-management.component.html',
  styleUrls: ['./game-management.component.css'],
  providers: [GameManagementService]
})
export class GameManagementComponent implements OnInit {

  @ViewChild('addWarRoom') addWarRoomInput: ElementRef;


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

  constructor(private gameManagementService: GameManagementService) { }

  ngOnInit() {

    this.warRoomForm = new FormGroup({
      'warRoom': new FormControl('')
    });

    this.gameManagementService.initialize();
    this.warRooms = this.gameManagementService.games;

    // this.smartScoreService.getSmartScores().then(
    //   (smartScores: SmartScore[]) => {
    //     this.smartScores =  smartScores;
    //     this.smartScoreForm.setValue({smartScore: this.smartScores[0].id});
    //     this.selectedSmartScore = this.smartScores[0];
    //   });

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


  }

  onWarRoomSave() {
    if (this.addMode) {
      const newName = this.addWarRoomInput.nativeElement.value;
      this.warRooms.push((newName));
      this.addMode = false;
      this.addWarRoomInput.nativeElement.value = '';
      this.warRoomForm.setValue({warRoom: newName});
      this.onWarRoomChanged();
      this.onLoadWarRoom();
      // const smartScore: SmartScore = new SmartScore(newName, newName, false, []);
      // this.smartScoreService.addSmartScore(smartScore)
      //   .subscribe( (smartScores: SmartScore[]) => {
      //     this.smartScores = smartScores;

      //   });
    }
  }

  onLoadWarRoom() {
    this.gameLoaded = true;
    this.gameManagementService.loadGame(this.warRoomForm.value.warRoom);
    this.loadedGame = this.gameManagementService.gameDetail;
    this.setRefreshTimer();
    console.log(this.loadedGame);
  }

  setRefreshTimer() {
    setInterval( () => {
      if (this.timeToRefresh === 1) {
        this.refreshGame();
      }  else {
        this.timeToRefresh--;
      }
    }, this.refreshMSeconds)
  }

  refreshGame() {
    this.timeToRefresh = this.refreshInterval;

    //TODO
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

}
