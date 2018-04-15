import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GameService} from "../game.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private gameService: GameService) { }

  standAlonePlayAllowed = true;

  loginForm: FormGroup;

  ngOnInit() {

    var ref = firebase.app().database().ref();
    ref.once('value').then((snap) => {
      this.standAlonePlayAllowed = true ;// snap.val().standAloneAvailable;
    });

    this.loginForm = new FormGroup({
      teamName: new FormControl(null, Validators.required),
      teamMembers: new FormControl(null),
      warRoom: new FormControl(null),
    })
  }

  onPlayStandAlone() {
    this.gameService.initializeGame();
    this.gameService.teamName = this.loginForm.value.teamName;
    this.router.navigate(['round']);
  }

}
