import {Injectable} from "@angular/core";
import {ManagementSettings} from "./admin-managment-settings.model";

import * as firebase from 'firebase';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AdminService {

  validated = true; //TEMP
  password = "McKGEM";

  roundsPasswords = ['CrudePassword', 'GasProblem','OverABarrel', 'ChristmasTree','GEMRocks'];

  constructor() {
    // let connectedRef = firebase.database().ref(".info/connected");
    // connectedRef.on("value", function(snap) {
    //   if (snap.val() === true) {
    //     this.connected = true;
    //   } else {
    //     this.connected = false;
    //   }
    // });

  }

  login(pwd: string) {
    if (pwd === this.password) {
      this.validated = true;
      return true;
    }
    return false;
  }

  getManagementSettings() : Observable<any>  {
    return Observable.fromPromise(firebase.database().ref('management/allowStandAlone').once('value')).map(
      (snapshotSel) => {
        if (snapshotSel) {
          const tmp =  new ManagementSettings();
          tmp.allowStandAlone = snapshotSel.val();
          return tmp;
        }
      })
      .catch(
          (err) => {
            console.log('get' + err);
            return null
          }
        );
  }

  setManagementSettings(managementSettings: ManagementSettings){

    try {
      return firebase.database().ref('management/allowStandAlone').set(managementSettings.allowStandAlone)
        .catch(
          (err) => {
            console.log(err);
            return false;
          }
        )
        .then(
          () => {
            return true;
          }
        );
    }
    catch (error) {
      console.log(error);
      return false;
    }



  }


}
