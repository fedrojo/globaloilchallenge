import { Component, OnInit } from '@angular/core';
import {StatusBarService} from "../../status-bar/status-bar.service";

import * as firebase from 'firebase';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'app-admin-ranking',
  templateUrl: './admin-ranking.component.html',
  styleUrls: ['./admin-ranking.component.css']
})
export class AdminRankingComponent implements OnInit {

  loadingRanking = false;
  rankItems = [];

  constructor(private statusBarService: StatusBarService) { }

  ngOnInit() {
  }

  onLoadRanking() {

    if (this.statusBarService.activeConnection === false) {
      return;
    }

    this.rankItems = [];

    this.loadingRanking = true;

    firebase.database().ref( 'games' + '/' + 'gamesTracker')
      .once('value', (snapshot) => {
        snapshot.forEach((snap) => {

          const warRoomName = snap.key;

          if (!warRoomName
            || !snap.child('name')
            || !snap.child('currentRound')
            || !snap.child('players')) {
            return false;
          }

          const currentRound = snap.child('currentRound').val();

          if (currentRound !== 5) {
            return false;
          }

          snap.child('players').forEach((snapPlayer) => {
            const teamName = snapPlayer.key;

            if (!teamName) {
              return false;
            }


            if (!snapPlayer.child('currentRound') || snapPlayer.child('currentRound').val() !== 4) {
              return false;
            }

            const companyValue = snapPlayer.child('assetValue').child('4');

            if (!companyValue) {
              return false;
            }

            this.rankItems.push({warRoom: warRoomName, teamName: teamName, companyValue: companyValue.val()});

            return false;
          });

          return false;

        });

        this.rankItems.sort( (a, b) => a.companyValue > b.companyValue ? -1 : 1);

        this.loadingRanking = false;

        return false;
      })
      .catch(
        (err) => {
          this.statusBarService.setTempStatus('Error', err.message);
          this.loadingRanking = false;
          return false;
        }
      );



  }

}
