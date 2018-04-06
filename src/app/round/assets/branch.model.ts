export class Branch {

  constructor(  public description : string,
                public cashImpact: number,
                public expectedFutureCashFlow: number,
                public achievedCF: number,
                public expectedRemainingCF: number,
                public storyline : string,
                public branches : Branch[]) {
  }

}
