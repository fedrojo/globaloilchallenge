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

  activeTabIndex = 0;
  standAloneForm : FormGroup;

  constructor(private adminService: AdminService,
              private statusBarService: StatusBarService) {

    this.standAloneForm = new FormGroup({
      allow: new FormControl({value: 0 } , Validators.required)
    });

  }

  ngOnInit() {

  }

  ngAfterViewInit() {


    this.adminService.getManagementSettings()
      .subscribe(
        (result) => {
          this.standAloneForm.setValue({allow: result.allowStandAlone ? "1" : "0"});
        }
      );
  }

  onActiveTab(tab: number) {
    this.activeTabIndex = tab;
  }

  onStandAloneChanged() {
    const managementSettings = new ManagementSettings();
    managementSettings.allowStandAlone = (this.standAloneForm.value.allow == 1);

    if (this.adminService.setManagementSettings(managementSettings)) {
      this.statusBarService.setTempStatus('Changes Saved', '', false);
    } else {
      this.statusBarService.setTempStatus('Error', 'Changes could not be saved', true);
    }



  }

}
