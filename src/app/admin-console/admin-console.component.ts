import { Component, OnInit } from '@angular/core';
import {AdminService} from "./admin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-console',
  templateUrl: './admin-console.component.html',
  styleUrls: ['./admin-console.component.css']
})
export class AdminConsoleComponent implements OnInit {

  wrongPassword = false;

  constructor(private adminService: AdminService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(e) {
    if (e) {
      if (this.adminService.login(e)) {
        this.router.navigate(['admindashboard']);
      } else {
        this.wrongPassword = true;
      }
    }
  }

}
