import { Injectable } from '@angular/core';
import {AssetsService} from "./round/assets/assets.service";
import {Asset} from "./round/assets/asset.model";
import {Round} from "./round/round.model";
import {RoundsService} from "./round/rounds.service";
import {Branch} from "./round/assets/branch.model";

@Injectable()
export class GameService {

  standAloneGame = true;
  offlineMode = false;

  initialCash = 3000;

  gameStarted = false;

  teamName = 'Team Name';
  warRoomName = '';

  assets: Asset[];
  rounds: Round[];

  currentRound: number;
  currentRoundType: string;
  cashInHand: number = 0;
  companyValuation: number = 0;

  assetSelection: {asset: string, selections: {round: number, selection: number}[]}[];
  portfolioValues: number[] = [];

  constructor(private assetService: AssetsService,
              private roundService: RoundsService) {
    this.assets = this.assetService.assets;
    this.rounds = this.roundService.rounds;
  }

  initializeGame() {
    this.gameStarted = true;
    this.currentRound = 1;
    this.currentRoundType = 'play';
    this.cashInHand = this.initialCash;
    this.companyValuation = this.cashInHand;
    this.assetSelection = [];
    this.portfolioValues = [];
    for (const asset of this.assets) {
      this.assetSelection.push({asset: asset.name, selections: []});
    }
    this.portfolioValues.push(this.initialCash);

  }

  getCurrentRound() {
    return this.rounds[this.currentRound-1];
  }

  updateSelection(asset: string, selection: number) {

    const assetToSet = this.assetSelection.find( i => i.asset === asset );

    const round = assetToSet.selections.find( i => i.round === this.currentRound);

    if (!round) {
      assetToSet.selections.push( { round: this.currentRound, selection: selection});
    } else {
      round.selection = selection;
    }

    this.updateCashAndAssetValuation();
  }

  updateNoOptionSelections() {

    for(const asset of this.assets) {
      let roundCount = 1;
      let branches = asset.branches;
      const assetResults = this.assetSelection.find( i => i.asset === asset.name );
      while (roundCount <= this.currentRound) {
        const round = assetResults.selections.find( i => i.round === roundCount);

        if (this.currentRound === roundCount) {
          if (branches.length === 1) {
            this.updateSelection(asset.name, 0);
          }
        } else if (round != null) {
          branches = branches[round.selection].branches;
        }

        roundCount++;
      }
    }
  }

  submitRound() {
    this.currentRoundType = 'results';
    this.updateCashAndAssetValuation();
    this.portfolioValues.push(this.companyValuation);
  }

  nextRound() {
    this.currentRoundType = 'play';
    this.currentRound = this.currentRound + 1;
    this.updateNoOptionSelections();
    this.updateCashAndAssetValuation();
  }

  updateCashAndAssetValuation() {
    this.cashInHand = this.initialCash;
    this.companyValuation = 0;
    for(const asset of this.assets) {
      let roundCount = 1;
      let branches = asset.branches;
      const assetResults = this.assetSelection.find( i => i.asset === asset.name );
      while (roundCount <= this.currentRound) {
        const round = assetResults.selections.find( i => i.round === roundCount);

        if (round != null) {
          this.cashInHand += branches[round.selection].cashImpact;
          if (this.currentRound > roundCount || this.currentRoundType === 'results') {
            this.cashInHand += branches[round.selection].achievedCF;
          }
          if (this.currentRound === roundCount) {
            if (this.currentRoundType === 'play') {
              this.companyValuation += branches[round.selection].expectedFutureCashFlow;
            } else {
              this.companyValuation += branches[round.selection].expectedRemainingCF;
            }
          }
          if (this.currentRound < this.rounds.length + 1) {
            branches = branches[round.selection].branches;
          }
        }
        roundCount++;
      }
    }
    this.companyValuation = this.companyValuation + this.cashInHand;
  }

  isAssetActive(round: number, asset: Asset): boolean {
    let roundCount = 1;
    let branches = asset.branches;
    const assetResults = this.assetSelection.find( i => i.asset === asset.name );
    while (roundCount <= round) {
      const roundResults = assetResults.selections.find( i => i.round === roundCount);
      if (roundResults !== null) {
        if (branches[roundResults.selection].cashImpact !== 0) {
          return true;
        }
        if (this.currentRound < this.rounds.length) {
          branches = branches[roundResults.selection].branches;
        }
      }
      roundCount++;
    }
    return false;
  }

  isRoundValid() {
    if (this.cashInHand < 0 && this.currentRoundType === 'play') {
      return false;
    }

    for(const asset of this.assets) {
      const assetResults = this.assetSelection.find(i => i.asset === asset.name);
      if (!assetResults) {
        return false;
      }
      const round = assetResults.selections.find(i => i.round === this.currentRound);
      if (round == null) {
        return false;
      }
    }


    return true;
  }

  randomSelection() {

    for(const asset of this.assets) {
      let assetResults = this.assetSelection.find(i => i.asset === asset.name);
      let roundCount = 1;
      let branches = asset.branches;
      while (roundCount < this.currentRound) {
        let round = assetResults.selections.find(i => i.round === roundCount);
        if (round !== null) {
            branches = branches[round.selection].branches;
        }
        roundCount++;
      }

      const rand: number = Math.floor(Math.random() * branches.length);
      let cRound = assetResults.selections.find(i => i.round === roundCount);

      if (!cRound) {
        assetResults.selections.push({round: roundCount, selection: rand});
      } else {
        cRound.selection = rand;
      }

    }

    this.updateCashAndAssetValuation();
  }

  getRoundAssetSelection(asset: string, round: number): number {
    let assetResults = this.assetSelection.find(i => i.asset === asset);
    let result = assetResults.selections.find( i => i.round === round);
    return result ? result.selection : null;
  }

  exitGame() {
    this.initializeGame();
    this.gameStarted = false;
  }

}
