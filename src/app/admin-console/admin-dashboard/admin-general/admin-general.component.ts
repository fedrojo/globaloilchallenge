import { Component, OnInit } from '@angular/core';
import {StatusBarService} from "../../status-bar/status-bar.service";
import {AdminService} from "../../admin.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ManagementSettings} from "../../admin-managment-settings.model";

@Component({
  selector: 'app-admin-general',
  templateUrl: './admin-general.component.html',
  styleUrls: ['./admin-general.component.css']
})
export class AdminGeneralComponent implements OnInit {

  standAloneForm : FormGroup;

  roundPasswords: string[];

  showRoundPassword: number[];

  constructor(private adminService: AdminService,
              private statusBarService: StatusBarService) {

    this.roundPasswords = this.adminService.roundsPasswords;

    this.showRoundPassword = [];
    for(const p of this.roundPasswords) {
      this.showRoundPassword.push(0);
    }

    this.standAloneForm = new FormGroup({
      allow: new FormControl({value: 0 } , Validators.required)
    });
  }

  ngOnInit() {
    this.adminService.getManagementSettings()
      .subscribe(
        (result) => {
          this.standAloneForm.setValue({allow: result.allowStandAlone ? "1" : "0"});
        }
      );
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
