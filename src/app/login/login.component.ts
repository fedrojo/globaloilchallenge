import {Component, OnInit, ViewChild} from '@angular/core';
import * as firebase from 'firebase';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GameService} from "../game.service";
import {AdminService} from "../admin-console/admin.service";
import {StatusBarService} from "../admin-console/status-bar/status-bar.service";
import {WarRoomLoginComponent} from "./war-room-login/war-room-login.component";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('warRoomDialog') warRoomDialog: WarRoomLoginComponent;

  showDialog = false;

  standAlonePlayAllowed = false;

  loginForm: FormGroup;

  constructor(private router: Router,
              private gameService: GameService,
              private adminService: AdminService) { }



  ngOnInit() {

    this.loginForm = new FormGroup({
      teamName: new FormControl(null, Validators.required),
      teamMembers: new FormControl(null),
      warRoom: new FormControl(null),
    })

    this.adminService.getManagementSettings()
      .subscribe(
        (result) => {
          this.standAlonePlayAllowed = result.allowStandAlone;
        }
      );
  }

  onPlayStandAlone() {
    this.gameService.teamName = this.loginForm.value.teamName;
    this.gameService.standAloneGame = true;
    this.gameService.initializeGame();
    this.router.navigate(['round']);
  }

  canJoinWarRoom(): boolean {
    return (this.loginForm.valid && this.loginForm.value.warRoom && this.loginForm.value.warRoom.length > 0);
  }

  onJoinWarRoom() {
    this.showDialog = true;
    this.warRoomDialog.initializeWarRoom (this.loginForm.value.teamName, this.loginForm.value.warRoom);
  }

  onVisibleChanged(startGame: boolean) {
    this.showDialog = false
    if (startGame) {
      this.gameService.teamName = this.loginForm.value.teamName;
      this.gameService.warRoomName = this.loginForm.value.warRoom;
      this.gameService.standAloneGame = false;
      this.gameService.initializeGame();
      this.router.navigate(['round']);

    }

  }

}
