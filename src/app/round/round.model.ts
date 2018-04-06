export class Round {

  // Initialize Rounds

  constructor (public duration: number,
               public oilPriceStart: number,
               public oilPriceAverage: number,
               public oilPriceEnd: number,
               public initialWorldState: string[],
               public endWorldState: string[]) { }

}
