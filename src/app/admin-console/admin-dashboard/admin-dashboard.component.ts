import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AdminService} from "../admin.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ManagementSettings} from "../admin-managment-settings.model";
import {StatusBarService} from "../status-bar/status-bar.service";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit, AfterViewInit {

  activeTabIndex = 1;

  constructor() {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }

  onActiveTab(tab: number) {
    this.activeTabIndex = tab;
  }



}
