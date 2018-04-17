import * as firebase from "firebase";


export class StatusBarService {

  showAlert = false;
  title : string;
  message: string
  activeConnection = false;

  alertType = 'alert-danger';
  alertTypeDanger = 'alert-danger';
  alertTypeSuccess = 'alert-success';

  constructor() {
    let connectedRef = firebase.database().ref(".info/connected");
    connectedRef.on("value", (snap)=> {
      if (snap.val() === true) {
        this.activeConnection = true;
        this.hideStatus();
      } else {
        this.activeConnection = false;
        this.setStatus('No Internet Connection Detected!!!', 'Changes may not be saved .')
      }
    });
  }

  public hideStatus() {
    this.showAlert = false;
  }

  public setStatus(title: string, message: string, typeDanger: boolean = true) {
    this.title = title;
    this.message = message;
    this.alertType = typeDanger ? this.alertTypeDanger : this.alertTypeSuccess;
    this.showAlert = true;
  }

  public setTempStatus(title: string, message: string, typeDanger: boolean = true, mseconds: number = 5000) {
    this.title = title;
    this.message = message;
    this.alertType = typeDanger ? this.alertTypeDanger : this.alertTypeSuccess;
    this.showAlert = true;
    setTimeout( () => this.showAlert = false, mseconds);
  }

}
