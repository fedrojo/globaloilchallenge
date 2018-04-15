import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Branch} from "../../branch.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GameService} from "../../../../game.service";
import {Asset} from "../../asset.model";

@Component({
  selector: 'app-asset-round',
  templateUrl: './asset-round.component.html',
  styleUrls: ['./asset-round.component.css']
})
export class AssetRoundComponent implements OnInit {

  selectedBranch : Branch;
  previousSelectedBranch: Branch;
  branches: Branch[];

  optionsForm: FormGroup;

  @Input() asset: Asset;
  @Input() round: number;

  loading = false;

  constructor(private gameService: GameService) { }

  ngOnInit() {

    this.loading = true;

    let selection: number  = this.gameService.getRoundAssetSelection(this.asset.name, this.round);

    this.getBranches()



    this.optionsForm = new FormGroup({
      option: new FormControl({value: selection } , Validators.required)
    });

    if (selection !== null) {
      this.optionsForm.setValue({option: selection});

      this.selectedBranch = this.branches[selection];
    }




    this.loading = false;
  }

  getBranches() {

    let b = this.asset.branches;

    let roundCount = 1;

    while (roundCount < this.round) {

      let selectionInRound = this.gameService.getRoundAssetSelection(this.asset.name, roundCount);
      this.previousSelectedBranch = b[selectionInRound];
      b = b[selectionInRound].branches;
      roundCount++;
    }


    this.branches = b;

  }

  getRoundType() {
    if (this.gameService.currentRound > this.round) {
      return 1;
    }
    if (this.gameService.currentRoundType === 'results') {
      return 1;
    } else {
      return 0;
    }
  }

  onOptionChanged() {
    if (this.loading) {
      return;
    }

    if (this.optionsForm.value.option === null) {
      return;
    }
    if (this.optionsForm.valid) {
      this.selectedBranch = this.branches[this.optionsForm.value.option];
      this.gameService.updateSelection(this.asset.name, this.optionsForm.value.option);
    }
  }



}
