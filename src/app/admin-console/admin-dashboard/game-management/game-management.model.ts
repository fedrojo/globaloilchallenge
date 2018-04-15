export class Players {

  constructor(  public name : string,
                public currentRound: number,
                public assetValue : number[]) {}



}

export class Game {

  constructor(  public name : string,
                public currentRound: number,
                public players : Players[]) {}



}
