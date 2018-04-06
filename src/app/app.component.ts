import { Component } from '@angular/core';
import * as firebase from 'firebase';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {

    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyAwx0qNlM60g0aPatJDw6sZUKSMmkIOAVs",
      authDomain: "oilandgaschallenge.firebaseapp.com",
      databaseURL: "https://oilandgaschallenge.firebaseio.com",
      projectId: "oilandgaschallenge",
      storageBucket: "oilandgaschallenge.appspot.com",
      messagingSenderId: "418012242374"
    };

    firebase.initializeApp(config);
  }
}
