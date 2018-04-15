import { Component, OnInit } from '@angular/core';
import {GameService} from "../../game.service";
import {AdminService} from "../admin.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ManagementSettings} from "../admin-managment-settings.model";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  activeTabIndex = 0;
  standAloneForm : FormGroup;

  constructor(private adminService: AdminService  ) {

    this.standAloneForm = new FormGroup({
      allow: new FormControl({value: 0 } , Validators.required)
    });


  }

  ngOnInit() {
    // this.adminService.getManagementSettings()
    //   .subscribe(
    //     (result) => {
    //       this.standAloneForm.setValue({allow: result.allowStandAlone ? "1" : "0"});
    //     }
    //   );
  }

  onActiveTab(tab: number) {
    this.activeTabIndex = tab;
  }

  onStandAloneChanged() {
    const managementSettings = new ManagementSettings();
    managementSettings.allowStandAlone = (this.standAloneForm.value.allow == 1);

    if (this.adminService.setManagementSettings(managementSettings)) {
      // success
    } else {
      // not suxxess
    }



  }

}
