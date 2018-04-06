import { Component, OnInit } from '@angular/core';
import {GameService} from "../../game.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public game;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.game = this.gameService;
  }

}
