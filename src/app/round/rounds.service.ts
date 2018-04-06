import {Round} from "./round.model";

export class RoundsService {

  public rounds: Round[] = [];

  constructor() {
    this.rounds = RoundsService.seed();
  }

  static seed() {
    let rounds: Round[] = []

    rounds.push( new Round(
        4,
        60,
        75,
        90,
        [ 'US Secretary of State says she is concerned about mounting tension in the Middle East involving different religious factions',
          'Norwegian government releases 19 exploration blocks in Norwegian North Sea. Spokesperson describes blocks as close to existing proven natural gas basin',
          'IEA: OECD industry stocks continue decline trend. Floating storage at lowest level for a decade',
          'Canadian Association of Petroleum Producers (CAPP): report the worlds largest energy companies "lining up" to invest in Oil Sands projects as Canadian estimated proved reserves grow 26% on Oil Sands additions',
          'Attack by militants on a petroleum complex housing foreign workers in Khobar, Saudi Arabia.',
          'U.S. Energy Information Administration (EIA): latest annual energy outlook forecasts growing populations in Middle East and Asia will increase demand for liquid fuels for both transportation and industrial uses',
          'Danish operator announces that it is placing its non-core Norwegian mature oil asset on the market. Sale as part of exit from North Sea to concentrate on natural gas value chains particularly LNG growth market',
          'IEA releases statement that it is "concerned" about the lack of investment in E&P and that new resources will need to come onstream to mitigate decline in mature basins, such as the North Sea. "Technology to play a key role in accessing new areas, such as deepwater, and that the energy companies must invest more in R&D',
          'Oil tanker in the Gulf of Suez hit by rocket launched by militants'],
        ['OPEC spare capacity is at its lowest level for over a decade.',
          ' Tension in the Middle East continues with increasing frequency of attacks by militant groups on government buildings and oil infrastructure.',
          ' Markets nervous of possible oil supply disruption if attacks continue.']
    ) );

    rounds.push( new Round(
      4,
      90,
      45,
      30,
      ['New York: Oil prices jump as Goldman Sachs analysts announce "oil super-spike" theory, raising its price forecast for benchmark crude to reach in excess of $130',
      'Middle East: Militants announce cease-fire in return for talks with Gulf States.',
      'US: Oil & Gas Journal reports of a Bakken well called Brad Olson 10-15 having initial production of 1,400 b/d, more than six times greater than conventional wells in the area.',
      'Vienna: Angola joins OPEC. The country is sub-Saharan Africas second largest oil producer behind Nigeria. Angolan oil minister pledges full support of OPEC production quota increases to take advantage of strong demand and high oil price',
      'Kuwait: Government reveal talks ongoing with "several" oil companies on potential foreign investment in under-developed hydrocarbon basins in the emirate',
      'US: EIA report says that use of horizontal wells and multi-stage fraccing techniques a potential "game changer" for US oil production',
      'Paris: Announcing the release of the latest World Energy Outlook, the IEA observed that oil companies had taken full advantage of the high oil price and were making "substantial" investments in research and development of new technologies.'],
      ['Price collapse driven by increase in oil supply, primarily from the OPEC nations but also from new sources of production as the shale plays in the US ramp-up creating a "shale boom".']
    ));

    rounds.push( new Round(
      4,
      30,
      45,
      45,
      ['Houston: The crash in oil prices has led to a rash of layoffs that started almost two years ago. Since then more than 350,000 jobs worldwide have been cut in the oil and gas industry, according to a recent report by a Houston-based consultant',
      'Davos: Energy Ministers from the G8 release a statement that new techniques currently being tested in the US shale plays have the "potential to unlock" large reserves in other onshore shale deposits such as Algeria, Argentina, China, Poland and South Africa.',
      'Kuwait City: Kuwaiti MPs are questioning the need for large-scale foreign involvement in a government-proposed multi-billion-dollar project to develop the emirates northern oil fields.',
      'New York: At the United Nations a spokesperson for Saudi Arabia says that if low oil prices continue, his government would struggle to meet the financial obligation of recently implement social and economic programs',
      'Houston: "The US is going to give Saudi Arabia and Russia a run for their money in terms of being the worlds number-one oil producer," says Daniel Yergin, author of the classic history of oil, The Prize. "And that just wasn’t on the cards five years ago. It’s that recent."',
      'London: Two Oil Majors announce further job cuts and capital spend to fall by 20%',
      'New York: Stock markets were gloomy after the latest full year results from Big Oil companies revealing a dramatic cut in profits, and dividend cuts to shareholders threatened. CEOs stress necessity to continue with cost reduction programs in the wake of a downturn in the oil market.',
      'Vienna: Saudi Arabia calls emergency meeting of OPEC ministers to discuss a combined OPEC response to low oil prices by cutting member countries production quotas'],
      ['Oil prices are showing signs of recovery with price range of $30-$45','The low oil price has shut-in some US shale production through a reduction in drilling programmes', 'In addition OPEC, whose member governments are feeling fiscal strain from lower oil revenues, is showing signs of quota discipline which may ease the supply glut.', 'The industry conducts a cost cutting program']
    ));

    rounds.push( new Round(
      4,
      45,
      60,
      60,
      ['Hanoi: International news agencies report outbreaks of unrest in the Vietnamese capital over economic austerity measures. Government officials pushing blame onto oil companies for "not sharing the countries oil revenue with the people"',
      'Stavanger: Unions warn that "unprecidented" cost reduction will be putting offshore workers lives at risk',
      'Rio de Janeiro: Police raid offices of Brazilian oilfield services provider with close links to government minister',
      'Lagos: Nigerian government, with backing from the World Bank, announce that it will end gas flaring in the country within the decade',
      'Buenos Aires: U.S. company announces successful results in the application of techniques learnt in the Eagle Ford Shale applies new proppant and fraccing techniques to Argentina shale',
      'Paris: IEA warns of a potential supply disruption risk due to a number of political events affecting the production outlook of several key non-OPEC countries.' ],
      ['Oil prices have picked up, with an average of $60 during the period.','This was driven by an increase in demand as global GDP grew, and on the supply-side, deferment of new projects from cost reduction programs meant that supply from depleted fields was not being replaced.','In addition, there was continued OPEC supply discipline and market nervousness of supply disruption to non-OPEC production caused by a series of political and operational incidents.  There was a successful transfer of technology from US shale plays to Argentina onshore prompting a positive outlook for future unconventionals production in the country.','Similar attempts in China onshore, however, have not yet proved successful - shale basins do not always share the same properties for hydrocarbon recovery.']
    ));

    return rounds;
  }
}
