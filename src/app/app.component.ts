import {Component} from '@angular/core';
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
    var config = {
      apiKey: "AIzaSyCp44jUSzP9HerlHAeKajM4tzEX-FHSQ2c",
      authDomain: "oilandgaschallengev2.firebaseapp.com",
      databaseURL: "https://oilandgaschallengev2.firebaseio.com",
      projectId: "oilandgaschallengev2",
      storageBucket: "oilandgaschallengev2.appspot.com",
      messagingSenderId: "744231213842"
    };
    firebase.initializeApp(config);

  }

}
