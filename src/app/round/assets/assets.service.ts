import { Injectable } from '@angular/core';
import {Asset} from "./asset.model";
import {Branch} from "./branch.model";

@Injectable()
export class AssetsService {

  assets: Asset[];

  constructor() {
    this.assets = AssetsService.seed();
  }


  static seed() {

    let assets: Asset[] = [];

    assets.push(  new Asset(
      'North Sea Mature',
      'Danish operator is exiting the Norweigian North Sea and is offering a mature asset with late life production',
      []
    ));

    assets.push(  new Asset(
      'US GOM Ultra-Deep',
      'A large already discovered ultradeep water field is available for development in the US GoM. The field carries a large cost in an area known for its challenging operations',
      []
    ));

    assets.push( new Asset(
      'Norway Near-field acreage',
      'The Norwegian governent is offering several blocks for resource exploration. Your geological team believes that large quantities of gas may be found on this specific block. You need to spend $160mn on an exploration activities and the chance of success is estimated at 65%',
      []
    ) );

    assets.push( new Asset(
      'Brazil Pre-salt',
      'A large exploration block is offered in the Santos Basin, the asset covers an area of 1,550 square kilometers - equivalent to the size of the city of São Paulo - and is located in ultra-deep waters, at a depth of approximately 2,000 meters. This "pre-salt" area is known for successful exploration in the past and the chance of success is estimated at 25%.',
      []
    ) );

    assets.push( new Asset(
      'Onshore Nigeria',
      'A large Dutch operator is selling an onshore producing asset in Nigeria. The asset has a very low breakeven price and promises good returns if operated smartly and government relationships are maintained',
      []
    ) );

    assets.push( new Asset(
      'Canadian Oil sands',
      'An Oil Sands field in Northern Canada promises massive production rates but the technology required for development and extraction, combined with its remote location makes it an expensive asset to operate',
      []
    ) );

    assets.push( new Asset(
      'Kenya Wildcat',
      'Exploration block available in onshore Kenya. Your geologist gives you a 20% chance of success on exploration. If you don’t hit oil you will loose your investment. However, if you do hit oil you expect a future value of $1.8Bn',
      []
    ) );

    assets.push( new Asset(
      'Vietnam Development',
      'A field rich in oil in the offshore coasts of Vietnam requiring significant investment for development is in the market',
      []
    ) );

    assets.push( new Asset(
      'Argentina Onshore',
      'A large asset with steady production from a number of old wells is up for sale in Argentina',
      []
    ) );

    assets.push( new Asset(
      'China Onshore',
      'China Central Petroleum Corporation is selling off operatorship of the oil field in Xianjian province',
      []
    ) );

    assets.push( new Asset(
      'Kuwait Onshore',
      'You are in conversations with the Kuwait government to potentially join in the operation of a very large oil field, however currently the government restricts foreign ownership and investment',
      []
    ) );

    assets[0].branches.push(
      new Branch(
        'Buy and operate',
        -746.4536,
        933.067,
        331.0395,
        1288.1389,
        'Production was stable with improved cash flows as oil price rose',
        []
      ));
    assets[0].branches.push(
      new Branch(
        'Pass on offer',
        0,
        0,
        0,
        0,
        'Danish operator is exiting the Norweigian North Sea and is offering a mature asset with late life production',
        []
      ));
    assets[1].branches.push(
      new Branch(
        'Purchase field and start developmental activities for production',
        -1596,
        1995,
        -378,
        6133,
        'Development activities were successful, and oil is flowing! Analysis of the existing wells indicate that you could enhance recovery using new drilling techniques and a sub-sea tieback to the existing platform',
        []
      ));
    assets[1].branches.push(
      new Branch(
        'Do not bid for block',
        0,
        0,
        0,
        0,
        'A large already discovered ultradeep water field is available for development in the US GoM. The field carries a large cost in an area known for its challenging operations',
        []
      ));
    assets[2].branches.push(
      new Branch(
        'Purchase block and start exploration activities',
        -161.3333,
        175.916,
        0,
        0,
        'The exploration well did not find any hydrocarbons and you have lost your investment',
        []
      ));
    assets[2].branches.push(
      new Branch(
        'Do not bid for block',
        0,
        0,
        0,
        0,
        'The Norwegian governent is offering several blocks for resource exploration. Your geological team believes that large quantities of gas may be found on this specific block. You need to spend $242mn on an exploration activities and the chance of success is estimated at 65%',
        []
      ));
    assets[3].branches.push(
      new Branch(
        'Purchase block and start exploration activities',
        -1201.6,
        1502,
        -250,
        5016,
        'Exploration activities were successful! However, an asset with these characteristics require an expensive development with technologies that have an unclear cost.',
        []
      ));
    assets[3].branches.push(
      new Branch(
        'Do not bid for block',
        0,
        0,
        0,
        0,
        'A large exploration block is offered in the Santos Basin, the asset covers an area of 1,550 square kilometers - equivalent to the size of the city of São Paulo - and is located in ultra-deep waters, at a depth of approximately 2,000 meters. This "pre-salt" area is known for successful exploration in the past and the chance of success is estimated at 25%.',
        []
      ));
    assets[4].branches.push(
      new Branch(
        'Purchase and operate field',
        -1390.7563,
        1738.4454,
        633.2661,
        2019.0549,
        'Production continues from the field. Your team now advises you to invest in Enhance Oil Recovery (EOR) technology to extend life of the field',
        []
      ));
    assets[4].branches.push(
      new Branch(
        'Do not purchase',
        0,
        0,
        0,
        0,
        'A large Dutch operator is selling an onshore producing asset in Nigeria. The asset has a very low breakeven price and promises good returns if operated smartly and government relationships are maintained',
        []
      ));
    assets[5].branches.push(
      new Branch(
        'Purchase field and start development',
        -1100.8,
        1376,
        200,
        4260,
        'Development activities are completed but the field requires higher sustenance capex to produce. New technologies coming to market may prove to be a game-changer, but have very high up-front costs',
        []
      ));
    assets[5].branches.push(
      new Branch(
        'Do not purchase Asset',
        0,
        0,
        0,
        0,
        'An Oil Sands field in Northern Canada promises massive production rates but the technology required for development and extraction, combined with its remote location makes it an expensive asset to operate',
        []
      ));
    assets[6].branches.push(
      new Branch(
        'Purchase block and start exploration activities',
        -380,
        1800,
        0,
        2365.3341,
        'Exploration activities were successful and you struck significant oil quantities. ',
        []
      ));
    assets[6].branches.push(
      new Branch(
        'Do not bid for block',
        0,
        0,
        0,
        0,
        'Exploration block available in onshore Kenya. Your geologist gives you a 20% chance of success on exploration. ',
        []
      ));
    assets[7].branches.push(
      new Branch(
        'Purchase field and start development activities',
        -1512,
        1890,
        442,
        3788,
        'Development activities were successful! At current oil prices this asset is extremely profitable, and you discover that, with new technology you could increase production even further ',
        []
      ));
    assets[7].branches.push(
      new Branch(
        'Do not bid for block',
        0,
        0,
        0,
        0,
        'A field rich in oil in the offshore coasts of Vietnam requiring significant investment for development is in the market',
        []
      ));
    assets[8].branches.push(
      new Branch(
        'Buy and operate',
        -888,
        1112,
        706,
        2949,
        'Production continues with a gradual decline',
        []
      ));
    assets[8].branches.push(
      new Branch(
        'Do not purchase asset',
        0,
        0,
        0,
        0,
        'A large asset with steady production from a number of old wells is up for sale in Argentina',
        []
      ));
    assets[9].branches.push(
      new Branch(
        'Purchase 80% interest in asset ',
        -1036.8,
        1176,
        800,
        1393,
        'Now owning 80% of the oil field with relatively stable off-peak production ',
        []
      ));
    assets[9].branches.push(
      new Branch(
        'Do not purchase',
        0,
        0,
        0,
        0,
        'China Central Petroleum Corporation is selling off operatorship of the oil field in Xianjian province',
        []
      ));
    assets[10].branches.push(
      new Branch(
        'Continue conversations',
        -100,
        0,
        0,
        0,
        'You have conducted conversations and feel that progress is being made, however oil prices have risen and Government demands your company of setting up a local office',
        []
      ));
    assets[10].branches.push(
      new Branch(
        'Stop conversations',
        0,
        0,
        0,
        0,
        'Stopped conversation with the Kuwaiti Government to concentrate resources on your portfolio',
        []
      ));
    assets[0].branches[0].branches.push(
      new Branch(
        'Continue as is',
        0,
        1288.1389175,
        32.7181525,
        -273.2043,
        'Production begins to decline as the field matures. Lower oil price further impacts cash flows',
        []
      ));
    assets[0].branches[0].branches.push(
      new Branch(
        'Invest in extended reach drilling technolgy for near field exploration',
        -200,
        1701.43165,
        318.30999375,
        14.5532833333333,
        'Extended reach drilling widens the footprint of the existing platforms. Previously uneconomic resources can be tied back to the existing infrastructure. However, the program is half complete and oil prices have dropped',
        []
      ));
    assets[0].branches[0].branches.push(
      new Branch(
        'Farm down to partner loosing operatorship of the asset, for their drilling expertise to pursue near field opportunities',
        772.8833505,
        515.255567,
        47.3239975,
        5.82131333333332,
        'Partners extended reach drilling widened the footprint of the existing platforms. Previously uneconomic resources can now be tied back to the existing infrastructure.',
        []
      ));
    assets[0].branches[0].branches.push(
      new Branch(
        'Divest',
        901.69724225,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[0].branches[1].branches.push(
      new Branch(
        'Buy and operate',
        -1030.511134,
        1288.1389175,
        32.7181525,
        -273.2043,
        'Production begins to decline as the field matures. Lower oil price further impacts cash flows',
        []
      ));
    assets[0].branches[1].branches.push(
      new Branch(
        'Pass on offer',
        0,
        0,
        0,
        0,
        'Operator abandons asset',
        []
      ));
    assets[1].branches[0].branches.push(
      new Branch(
        'Install sub-sea solution and use new drilling technology',
        -250,
        7210,
        485,
        -512,
        'Production rate improved, however the drilling took longer than expected, the technology proved to be unreliable and operating costs remained high. Efficiency needs to be improved.',
        []
      ));
    assets[1].branches[0].branches.push(
      new Branch(
        'Continue as-is',
        0,
        6133,
        306,
        -752,
        'Production rates declined slightly, but costs stayed high',
        []
      ));
    assets[1].branches[0].branches.push(
      new Branch(
        'Divest',
        4906.4,
        0,
        0,
        0,
        'Asset sold at low value, given buyers awareness of cost issues',
        []
      ));
    assets[1].branches[1].branches.push(
      new Branch(
        'Purchase field and start developmental activities for production',
        -4742.4,
        5928,
        -723,
        -1043,
        'Development activities were successful, and oil is flowing! However costs are very high, and you need to find ways to improve efficiency if this asset is to be internationally competitive',
        []
      ));
    assets[1].branches[1].branches.push(
      new Branch(
        'Do not bid for block',
        0,
        0,
        0,
        0,
        'A large already discovered ultradeep water field is available for development in the US GoM. The field carries a large cost in an area known for its challenging operations',
        []
      ));
    assets[2].branches[0].branches.push(
      new Branch(
        'Asset not available',
        0,
        0,
        0,
        0,
        'The exploration well did not find any hydrocarbons and you have lost your investment',
        []
      ));
    assets[2].branches[1].branches.push(
      new Branch(
        'Purchase block and start exploration activities',
        -242,
        339,
        0,
        0,
        'The exploration well did not find any hydrocarbons and you have lost your investment',
        []
      ));
    assets[2].branches[1].branches.push(
      new Branch(
        'Do not bid for block',
        0,
        0,
        0,
        0,
        'The Norwegian governent is offering several blocks for resource exploration. Your geological team believes that large quantities of gas may be found on this specific block. You need to spend $80mn on an exploration activities and the chance of success is estimated at 65%',
        []
      ));
    assets[3].branches[0].branches.push(
      new Branch(
        'Start development on your own',
        -500,
        5016,
        0,
        -1013,
        'The development went faster than expected and production is expected to start in the next year.',
        []
      ));
    assets[3].branches[0].branches.push(
      new Branch(
        'Divest 50% and start development with partner',
        1756.4,
        2508,
        0,
        -506.5,
        'The development went faster than expected and production is expected to start in the next year., but you own only 50% of the asset',
        []
      ));
    assets[3].branches[0].branches.push(
      new Branch(
        'Hold-off development',
        0,
        5016,
        0,
        -1513,
        'Exploration activities were successful! However, an asset with these characteristics require an expensive development with technologies that have an unclear cost.',
        []
      ));
    assets[3].branches[0].branches.push(
      new Branch(
        'Divest',
        4012.8,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[3].branches[1].branches.push(
      new Branch(
        'Purchase block and start exploration activities',
        -3813.6,
        4767,
        -250,
        120,
        'Exploration activities were successful! However, an asset with these characteristics require an expensive development with technologies that have an unclear cost.',
        []
      ));
    assets[3].branches[1].branches.push(
      new Branch(
        'Do not bid for block',
        0,
        0,
        0,
        0,
        'A large exploration block is offered in the Santos Basin, the asset covers an area of 1,550 square kilometers - equivalent to the size of the city of São Paulo - and is located in ultra-deep waters, at a depth of approximately 2,000 meters. This "pre-salt" area is known for successful exploration in the past and the chance of success is estimated at 25%.',
        []
      ));
    assets[4].branches[0].branches.push(
      new Branch(
        'Ignore your teams advice and continue as is',
        0,
        2019.05490065062,
        435.272772188154,
        224.340003180266,
        'Large amounts of unusable associated gas is surfacing during production. You can invest in re-injecting the gas into the ground or flare it ',
        []
      ));
    assets[4].branches[0].branches.push(
      new Branch(
        'Accept your teams advice and invest in EOR Technology',
        -50,
        2337.36086892912,
        541.352772927392,
        292.231215671733,
        'EOR has increase production by ~15%. However, large amounts of unusable associated gas is surfacing during production - you can either invest in re-injecting the gas into the ground or flare it ',
        []
      ));
    assets[4].branches[0].branches.push(
      new Branch(
        'Divest',
        1615.2439205205,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[4].branches[1].branches.push(
      new Branch(
        'Purchase and operate field',
        -1615.2439205205,
        2019.05490065062,
        435.272772188154,
        224.340003180266,
        'Large amounts of unusable associated gas is surfacing during production - you can invest in re-injecting the gas into the ground or flare it ',
        []
      ));
    assets[4].branches[1].branches.push(
      new Branch(
        'Do not purchase',
        0,
        0,
        0,
        0,
        'A large Dutch operator is selling an onshore producing asset in Nigeria. The asset has a very low breakeven price and promises good returns if operated smartly and government relationships are maintained',
        []
      ));
    assets[5].branches[0].branches.push(
      new Branch(
        'Do not invest in new technologies and continue as-is',
        0,
        4260,
        68,
        -1804,
        'Production started and operating costs continue to escalate',
        []
      ));
    assets[5].branches[0].branches.push(
      new Branch(
        'Invest in new technologies to enhance recovery',
        -250,
        5122,
        114,
        -1530,
        'New technology has enhanced recovery, but the investment has not be worthwhile at the new lower oil price',
        []
      ));
    assets[5].branches[0].branches.push(
      new Branch(
        'Divest',
        3408,
        0,
        0,
        0,
        'Asset sold at low value, given buyers awareness of high costs',
        []
      ));
    assets[5].branches[1].branches.push(
      new Branch(
        'Purchase field and start development',
        -3408,
        4260,
        68,
        -1804,
        'Development is successful, but costs have escalated',
        []
      ));
    assets[5].branches[1].branches.push(
      new Branch(
        'Do not purchase Asset',
        0,
        0,
        0,
        0,
        'An Oil Sands field in Northern Canada promises massive production rates but the technology required for development and extraction, combined with its remote location makes it an expensive asset to operate',
        []
      ));
    assets[6].branches[0].branches.push(
      new Branch(
        'Start development ',
        -1001,
        2365.33414168444,
        0,
        1916.46898876072,
        'The development was slower than expected. Managing the local workforce and external contractors have been a challenge and does not seem to get easier moving forward',
        []
      ));
    assets[6].branches[0].branches.push(
      new Branch(
        'Hold-off development',
        0,
        2365.33414168444,
        0,
        915.46898876072,
        'Exploration activities were successful and you struck significant oil quantities. ',
        []
      ));
    assets[6].branches[0].branches.push(
      new Branch(
        'Divest',
        1892.26731334755,
        0,
        0,
        0,
        'Asset sold post succesful exploration',
        []
      ));
    assets[6].branches[1].branches.push(
      new Branch(
        'Purchase block and start exploration activities',
        -445.760145503199,
        273.066828336888,
        0,
        915.46898876072,
        'Exploration activities were successful and you struck significant oil quantities. ',
        []
      ));
    assets[6].branches[1].branches.push(
      new Branch(
        'Do not bid for block',
        0,
        0,
        0,
        0,
        'Exploration block available in onshore Kenya. Your geologist gives you a 20% chance of success on exploration.',
        []
      ));
    assets[7].branches[0].branches.push(
      new Branch(
        'Invest in enhanced oil recovery through side-drilling and water injection to protect high production for longer ',
        -200,
        4145,
        354,
        -378,
        'The investment came in too late to take advantage of the spike in oil prices, and now the asset is showing increased production in a low-price environment',
        []
      ));
    assets[7].branches[0].branches.push(
      new Branch(
        'Continue as is - do not invest in new technology',
        0,
        3788,
        289,
        -638,
        'The asset continues producing, making some profit even at the new lower oil price. However you need to consider ways to increase margins',
        []
      ));
    assets[7].branches[0].branches.push(
      new Branch(
        'Divest',
        3030.4,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[7].branches[1].branches.push(
      new Branch(
        'Purchase field and start development activities',
        -3030.4,
        3788,
        289,
        -638,
        'The asset starts producing; however in the new low-price environment you need to look for ways to reduce costs',
        []
      ));
    assets[7].branches[1].branches.push(
      new Branch(
        'Do not bid for block',
        0,
        0,
        0,
        0,
        'A field rich in oil in the offshore coasts of Vietnam requiring significant investment for development is in the market',
        []
      ));
    assets[8].branches[0].branches.push(
      new Branch(
        'Continue as is',
        0,
        2949,
        -188,
        -678,
        'Production continues with a gradual decline',
        []
      ));
    assets[8].branches[0].branches.push(
      new Branch(
        'Invest in a new and promising technology',
        -200,
        3564,
        673,
        2276,
        'Investment in a new promising technology resulted in unlocking shale oil reserves.',
        []
      ));
    assets[8].branches[0].branches.push(
      new Branch(
        'Divest',
        2359.2,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[8].branches[1].branches.push(
      new Branch(
        'Buy and operate',
        -2359.2,
        2949,
        -188,
        -678,
        'Production continues with a gradual decline',
        []
      ));
    assets[8].branches[1].branches.push(
      new Branch(
        'Do not purchase asset',
        0,
        0,
        0,
        0,
        'A large asset with steady production from a number of old wells is up for sale in Argentina',
        []
      ));
    assets[9].branches[0].branches.push(
      new Branch(
        'Continue as is',
        0,
        1393,
        228,
        -183,
        'Reservoir pressure has declined and therefore production is down. Option to invest in new technology to extract new unproven but promising resources',
        []
      ));
    assets[9].branches[1].branches.push(
      new Branch(
        'Do not purchase',
        0,
        0,
        0,
        0,
        'Asset not available',
        []
      ));
    assets[9].branches[1].branches.push(
      new Branch(
        'Purchase 80% interest in asset',
        -2049.6,
        2562,
        309,
        236,
        'Now owning 80% of the oil field with relatively stable off-peak production ',
        []
      ));
    assets[10].branches[0].branches.push(
      new Branch(
        'Continue conversations',
        -10,
        0,
        0,
        0,
        'New office opened in Kuwait to continue conversations. The government now wants you to begin investing in local infrastructure',
        []
      ));
    assets[10].branches[0].branches.push(
      new Branch(
        'Stop conversations',
        0,
        0,
        0,
        0,
        'Asset not available',
        []
      ));
    assets[10].branches[1].branches.push(
      new Branch(
        'Asset not available',
        0,
        0,
        0,
        0,
        'Asset not available',
        []
      ));
    assets[0].branches[0].branches[0].branches.push(
      new Branch(
        'Continue field production, aiming for maximum recovery from the asset',
        0,
        -273.2043,
        56.2451666666666,
        -1.95670833333327,
        'Production declined further and despite the uptick in oil price, the field economics are now marginal',
        []
      ));
    assets[0].branches[0].branches[0].branches.push(
      new Branch(
        'Institute a cost cutting and early abandonment program',
        0,
        -129.0443,
        66.6611666666667,
        30.2992916666667,
        'Cost cutting measures are partly implemented, delayed by strikes and union resistance',
        []
      ));
    assets[0].branches[0].branches[0].branches.push(
      new Branch(
        'Invest in extended reach drilling technology for near field exploration, taking advantage of lower drilling service costs as a result of low oil price',
        -100,
        57.4537333333333,
        245.40780625,
        372.31253125,
        'Regained plateau during sustained low price environment, contractor prices renegotiated down. Field became showcase for brownfield rejuvenation',
        []
      ));
    assets[0].branches[0].branches[0].branches.push(
      new Branch(
        'Divest',
        50,
        0,
        0,
        0,
        'Asset sold at low prices given current oil price environment',
        []
      ));
    assets[0].branches[0].branches[1].branches.push(
      new Branch(
        'Complete investment program',
        -200,
        14.5532833333333,
        304.34135625,
        391.86253125,
        'Redevelopment program has been completed, however low oil prices remains to be a concern',
        []
      ));
    assets[0].branches[0].branches[1].branches.push(
      new Branch(
        'Farm down to partner loosing operatorship of the asset, for their drilling expertise to pursue near field opportunities',
        100,
        7.27664166666665,
        121.7365425,
        156.7450125,
        'Partner renegotiates supplier contracts and drives down cost of development, albeit delayed',
        []
      ));
    assets[0].branches[0].branches[1].branches.push(
      new Branch(
        'Divest',
        11.6426266666666,
        0,
        0,
        0,
        'Asset sold at low prices given current oil price environment',
        []
      ));
    assets[0].branches[0].branches[2].branches.push(
      new Branch(
        'Continue as nonoperating partner as field development ramps up',
        0,
        5.82131333333332,
        41.7365425,
        156.7450125,
        'Partner successfully completed redevelopment program. Field production declines were reversed and ramped back to plateau production. ',
        []
      ));
    assets[0].branches[0].branches[2].branches.push(
      new Branch(
        'Divest',
        4.65705066666666,
        0,
        0,
        0,
        'Asset sold at low prices given current oil price environment',
        []
      ));
    assets[0].branches[0].branches[3].branches.push(
      new Branch(
        'Asset sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[0].branches[1].branches[0].branches.push(
      new Branch(
        'Continue to produce the field, aiming for maximum recovery from current asset',
        0,
        -273.2043,
        56.2451666666666,
        -1.95670833333327,
        'Production declines further and despite the uptick in oil price the field economics are now marginal',
        []
      ));
    assets[0].branches[1].branches[0].branches.push(
      new Branch(
        'Institute a cost cutting and early abandonment program',
        0,
        -129.0443,
        66.6611666666667,
        30.2992916666667,
        'Cost cutting measures are partly implemented, delayed by strikes and union resistance',
        []
      ));
    assets[0].branches[1].branches[0].branches.push(
      new Branch(
        'Invest in extended reach drilling technology for near field exploration, taking advantage of lower drilling service costs as a result of low oil price',
        -100,
        57.4537333333333,
        245.40780625,
        372.31253125,
        'Regained plateau during sustained low price environment, contractor prices renegotiated down. Field became showcase for brownfield rejuvenation',
        []
      ));
    assets[0].branches[1].branches[0].branches.push(
      new Branch(
        'Divest',
        50,
        0,
        0,
        0,
        'Asset sold at low prices given current oil price environment',
        []
      ));
    assets[0].branches[1].branches[1].branches.push(
      new Branch(
        'Asset not available',
        0,
        0,
        0,
        0,
        'Asset not available',
        []
      ));
    assets[1].branches[0].branches[0].branches.push(
      new Branch(
        'Seek efficiency improvement through reduced drilling and well maintenance times in order to minimise production loss',
        0,
        -299,
        549,
        469,
        'You materially reduced costs per barrel, and are now best-in-class! The installation manager has been recognised for creating the exemplar case of how to respond to the continued low-oil price environment. He believes other assets could do the same, but there is stll more potential on this flagship platform. ',
        []
      ));
    assets[1].branches[0].branches[0].branches.push(
      new Branch(
        'Seek cost saving through lower production, with no efficiency improvement on a per-barrel basis',
        0,
        -562,
        415,
        208,
        'Overall costs reduced, but this resulted in lower production',
        []
      ));
    assets[1].branches[0].branches[0].branches.push(
      new Branch(
        'Divest the asset',
        100,
        0,
        0,
        0,
        'Asset sold at low value, given buyers awareness of cost issues',
        []
      ));
    assets[1].branches[0].branches[1].branches.push(
      new Branch(
        'Seek efficiency improvement through reduced drilling and well maintenance times on order to minimise production loss',
        0,
        -538,
        427,
        232,
        'You materially reduced costs per barrel, and are now best-in-class! The installation manager has been recognised for creating the exemplar case of how to respond to the continued low-oil price environment. He believes other assets could do the same, but there is stll more potential on this flagship platform. ',
        []
      ));
    assets[1].branches[0].branches[1].branches.push(
      new Branch(
        'Seek cost saving through lower production, with no efficiency improvement on a per-barrel basis',
        0,
        -777,
        306,
        -6,
        'Overall costs reduced, but this resulted in lower production',
        []
      ));
    assets[1].branches[0].branches[1].branches.push(
      new Branch(
        'Divest',
        100,
        0,
        0,
        0,
        'Asset sold at low value, given buyers awareness of cost issues',
        []
      ));
    assets[1].branches[0].branches[2].branches.push(
      new Branch(
        'Asset sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[1].branches[1].branches[0].branches.push(
      new Branch(
        'Seek efficiency improvement through reduced drilling and well maintenance times on order to minimise production loss',
        0,
        145,
        639,
        1301,
        'You materially reduce costs per barrel, and are now best-in-class! The installation manager is recognised for creating the exemplar case of how to respond to the continued low-oil price environment. He believes other assets could do the same, but there is stll more potential on this flagship platform. ',
        []
      ));
    assets[1].branches[1].branches[0].branches.push(
      new Branch(
        'Seek cost saving through lower production, with no efficiency improvement on a per-barrel basis',
        0,
        -1105,
        210,
        300,
        'Overall costs reduced, but this resulted in lower production',
        []
      ));
    assets[1].branches[1].branches[0].branches.push(
      new Branch(
        'Divest',
        100,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[1].branches[1].branches[1].branches.push(
      new Branch(
        'Purchase field and start developmental activities for production',
        -100,
        -1937,
        -723,
        751,
        'Development activities were succesfull, and oil is flowing. However you need to find ways of making an expensive frontier asset pay for itself in a continued low oil-price evironment',
        []
      ));
    assets[1].branches[1].branches[1].branches.push(
      new Branch(
        'Do not bid for block',
        0,
        0,
        0,
        0,
        'Field  is not longer available',
        []
      ));
    assets[2].branches[0].branches[0].branches.push(
      new Branch(
        'Asset not available',
        0,
        0,
        0,
        0,
        'The exploration well did not find any hydrocarbons and you have lost your investment',
        []
      ));
    assets[2].branches[1].branches[0].branches.push(
      new Branch(
        'Asset not available',
        0,
        0,
        0,
        0,
        'The exploration well did not find any hydrocarbons and you have lost your investment',
        []
      ));
    assets[2].branches[1].branches[1].branches.push(
      new Branch(
        'Purchase block and start exploration activities',
        -80,
        12,
        0,
        0,
        'The exploration well did not find any hydrocarbons and you have lost your investment',
        []
      ));
    assets[2].branches[1].branches[1].branches.push(
      new Branch(
        'Do not bid for block',
        0,
        0,
        0,
        0,
        'The Norwegian governent is offering several blocks for resource exploration. Your geological team believes that large quantities of gas may be found on this specific block. You need to spend $65mn on an exploration activities and the chance of success is estimated at 65%',
        []
      ));
    assets[3].branches[0].branches[0].branches.push(
      new Branch(
        'Continue as is',
        0,
        -1013,
        433,
        186,
        'Your investment has started to payoff. However, your board is now concerned due to rumors of corruption in the government and a possibility of related liabilities in the future',
        []
      ));
    assets[3].branches[0].branches[0].branches.push(
      new Branch(
        'Divest 50% of asset',
        50,
        -506.5,
        216.5,
        93,
        'Your investment has started to payoff. However, your board is now concerned due to rumors of corruption in the government and a possibility of related liabilities in the future',
        []
      ));
    assets[3].branches[0].branches[0].branches.push(
      new Branch(
        'Divest',
        100,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[3].branches[0].branches[1].branches.push(
      new Branch(
        'Continue as is',
        0,
        -506.5,
        216.5,
        93,
        'Your investment has started to payoff. However, your board is now concerned due to rumors of corruption in the government and a possibility of related liabilities in the future',
        []
      ));
    assets[3].branches[0].branches[1].branches.push(
      new Branch(
        'Divest 50% of asset',
        25,
        -253.25,
        108.25,
        46.5,
        'Your investment has started to payoff. However, your board is now concerned due to rumors of corruption in the government and a possibility of related liabilities in the future',
        []
      ));
    assets[3].branches[0].branches[1].branches.push(
      new Branch(
        'Divest',
        50,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[3].branches[0].branches[2].branches.push(
      new Branch(
        'Start development on your own',
        -500,
        -1013,
        0,
        711.85,
        'The development went faster than expected and production will start shortly. However, your board is now concerned due to rumors of corruption in the government and a possibility of related liabilities in the future',
        []
      ));
    assets[3].branches[0].branches[2].branches.push(
      new Branch(
        'Divest 50% and start development with partner',
        -200,
        -506.5,
        0,
        355.925,
        'Your investment has started to payoff. Your board is concerned due to rumors of corruption in the government and a possibility of related liabilities in the future',
        []
      ));
    assets[3].branches[0].branches[2].branches.push(
      new Branch(
        'Hold-off development',
        0,
        -1513,
        0,
        120,
        'Exploration activities were successful! However, an asset of these characteristics require an expensive development and also your board is concerned of rumors of corruption in the government and a possibility of related liabilities in the future',
        []
      ));
    assets[3].branches[0].branches[2].branches.push(
      new Branch(
        'Divest',
        100,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[3].branches[0].branches[3].branches.push(
      new Branch(
        'Asset sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[3].branches[1].branches[0].branches.push(
      new Branch(
        'Start development on your own',
        -500,
        620,
        0,
        620,
        'The development went faster than expected and production will shortly start producing. However, Your board is concerned of rumors of corruption in the government and a possibility of related liabilities in the future',
        []
      ));
    assets[3].branches[1].branches[0].branches.push(
      new Branch(
        'Divest 50% and start development with partner',
        -202,
        310,
        0,
        310,
        'The development went faster than expected and production will shortly start producing. However, Your board is concerned of rumors of corruption in the government and a possibility of related liabilities in the future',
        []
      ));
    assets[3].branches[1].branches[0].branches.push(
      new Branch(
        'Hold-off development',
        0,
        120,
        0,
        120,
        'Exploration activities were successful! However, an asset of these characteristics require an expensive development and your board is concerned of rumors of corruption in the government and a possibility of related liabilities in the future',
        []
      ));
    assets[3].branches[1].branches[0].branches.push(
      new Branch(
        'Divest',
        96,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[3].branches[1].branches[1].branches.push(
      new Branch(
        'Purchase block and start exploration activities',
        -100,
        -130,
        -250,
        120,
        'Exploration activities were successful! However, an asset of these characteristics require an expensive development and your board is concerned due to rumors of corruption in the government and a possibility of related liabilities in the future',
        []
      ));
    assets[3].branches[1].branches[1].branches.push(
      new Branch(
        'Do not bid for block',
        0,
        0,
        0,
        0,
        'Block is not longer available',
        []
      ));
    assets[4].branches[0].branches[0].branches.push(
      new Branch(
        'Flare gas',
        0,
        224.340003180266,
        243.095267789974,
        196.819818647339,
        'The government has taken notice of gas flaring practices and has asked you to invest in gas injection to stop flaring',
        []
      ));
    assets[4].branches[0].branches[0].branches.push(
      new Branch(
        'Invest in gas Injection',
        -50,
        151.802423706123,
        277.503601154974,
        201.45106864734,
        'Flaring has stopped and production continues in the field',
        []
      ));
    assets[4].branches[0].branches[0].branches.push(
      new Branch(
        'Divest',
        179.472002544213,
        0,
        0,
        0,
        'Asset sold at low prices given current oil price and flaring woes',
        []
      ));
    assets[4].branches[0].branches[1].branches.push(
      new Branch(
        'Flare gas',
        0,
        292.231215671733,
        290.076150369753,
        246.133737807187,
        'The government has taken notice of gas flaring practices and has asked you to invest in gas injection to stop flaring',
        []
      ));
    assets[4].branches[0].branches[1].branches.push(
      new Branch(
        'Invest in gas Injection',
        -50,
        224.055452264808,
        278.91331002736,
        198.378614867594,
        'Flaring has stopped and production continues in the field',
        []
      ));
    assets[4].branches[0].branches[1].branches.push(
      new Branch(
        'Divest',
        233.784972537386,
        0,
        0,
        0,
        'Asset sold at low prices given current oil price environment',
        []
      ));
    assets[4].branches[0].branches[2].branches.push(
      new Branch(
        'Asset sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[4].branches[1].branches[0].branches.push(
      new Branch(
        'Flare gas',
        0,
        224.340003180266,
        243.095267789974,
        196.819818647339,
        'The government has taken notice of gas flaring practices and has asked you to invest in gas injection to stop flaring',
        []
      ));
    assets[4].branches[1].branches[0].branches.push(
      new Branch(
        'Invest in gas Injection',
        -50,
        151.802423706123,
        277.503601154974,
        201.45106864734,
        'Flaring has stopped and production continues in the field',
        []
      ));
    assets[4].branches[1].branches[0].branches.push(
      new Branch(
        'Divest',
        179.472002544213,
        0,
        0,
        0,
        'Asset sold at low prices given current oil price environment',
        []
      ));
    assets[4].branches[1].branches[1].branches.push(
      new Branch(
        'Purchase and operate field',
        -229.472002544213,
        224.340003180266,
        277.503601154974,
        201.45106864734,
        'Production continues in the field',
        []
      ));
    assets[4].branches[1].branches[1].branches.push(
      new Branch(
        'Do not purchase',
        0,
        0,
        0,
        0,
        'Asset not longer available',
        []
      ));
    assets[5].branches[0].branches[0].branches.push(
      new Branch(
        'Continue as is',
        0,
        -1804,
        -13,
        -422,
        'Production continues with low levels of profitability. Environmental campaigners have started targeting oil sands projects.',
        []
      ));
    assets[5].branches[0].branches[0].branches.push(
      new Branch(
        'Initiate a cost-cutting exercise, which may reduce production levels',
        0,
        -980,
        86,
        166,
        'Cost-cutting exercise was more successful than first thought. Environmental campaigners have started targeting oil sands projects.',
        []
      ));
    assets[5].branches[0].branches[0].branches.push(
      new Branch(
        'Divest',
        100,
        0,
        0,
        0,
        'Asset sold at low value, given buyers awareness of high costs and environmental concerns',
        []
      ));
    assets[5].branches[0].branches[1].branches.push(
      new Branch(
        'Continue as-is',
        0,
        -1530,
        51,
        -75,
        'Production improved. However, environmental campaigners have started targeting oil sands projects.',
        []
      ));
    assets[5].branches[0].branches[1].branches.push(
      new Branch(
        'Initiate a cost-cutting exercise, which may reduce production levels',
        0,
        -734,
        143,
        478,
        'Cost-cutting exercise was more successful than first thought and EOR technologies helped lower cost with minimal impact on production levels. Environmental campaigners start to target oil sands projects.',
        []
      ));
    assets[5].branches[0].branches[1].branches.push(
      new Branch(
        'Divest',
        100,
        0,
        0,
        0,
        '',
        []
      ));
    assets[5].branches[0].branches[2].branches.push(
      new Branch(
        'Asset sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[5].branches[1].branches[0].branches.push(
      new Branch(
        'Continue as is',
        0,
        -1804,
        -13,
        -422,
        'Production continues with lower profitability due to low oil price. Also, environmental campaigners have started to target oil sands projects.',
        []
      ));
    assets[5].branches[1].branches[0].branches.push(
      new Branch(
        'Initiate a cost-cutting exercise, which may reduce production levels',
        0,
        -980,
        86,
        166,
        'Cost-cutting exercise is more successful than first thought. Environmental campaigners have started to target oil sands projects.',
        []
      ));
    assets[5].branches[1].branches[0].branches.push(
      new Branch(
        'Divest',
        100,
        0,
        0,
        0,
        'Asset sold at low value, given buyers awareness of high costs',
        []
      ));
    assets[5].branches[1].branches[1].branches.push(
      new Branch(
        'Purchase field and start development',
        -100,
        -1804,
        -13,
        -422,
        'Costs have escalated, whilst the continued low oil price environment drives the asset further into a loss. Environmental campaigners have started to target oil sands projects.',
        []
      ));
    assets[5].branches[1].branches[1].branches.push(
      new Branch(
        'Do not purchase Asset',
        0,
        0,
        0,
        0,
        'Field  is not longer available',
        []
      ));
    assets[6].branches[0].branches[0].branches.push(
      new Branch(
        'Continue as is',
        0,
        1916.46898876072,
        1496.83635984375,
        719.52891782968,
        'Oil has started to flow, however you have had more than 50 days of worker strikes. The social situation has escalated and there is a chance of shutting down operations',
        []
      ));
    assets[6].branches[0].branches[0].branches.push(
      new Branch(
        'Invest in social development',
        -100,
        1224.88563079599,
        2082.797105625,
        693.94365697664,
        'Investments in local community development has resulted in a better working environment and increase in productivity',
        []
      ));
    assets[6].branches[0].branches[0].branches.push(
      new Branch(
        'Divest',
        1149.88139325643,
        0,
        0,
        0,
        'Asset sold at low prices on concerns on social situation in the field',
        []
      ));
    assets[6].branches[0].branches[1].branches.push(
      new Branch(
        'Start development ',
        -1001,
        915.46898876072,
        0,
        2216.36527767343,
        'The development was slower than expected. Managing the local workforce and external contractors have been a challenge and does not seem to get easier moving forward',
        []
      ));
    assets[6].branches[0].branches[1].branches.push(
      new Branch(
        'Hold-off development',
        0,
        915.46898876072,
        0,
        1670.31576260164,
        'Exploration activities were successful and you struck significant oil quantities. ',
        []
      ));
    assets[6].branches[0].branches[1].branches.push(
      new Branch(
        'Divest',
        457.73449438036,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[6].branches[0].branches[2].branches.push(
      new Branch(
        'Asset sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[6].branches[1].branches[0].branches.push(
      new Branch(
        'Start development ',
        -1001,
        915.46898876072,
        0,
        2216.36527767343,
        'The development was slower than expected. Managing the local workforce and external contractors have been a challenge and does not seem to get easier moving forward',
        []
      ));
    assets[6].branches[1].branches[0].branches.push(
      new Branch(
        'Hold-off development',
        0,
        915.46898876072,
        0,
        1670.31576260164,
        'Exploration activities were successful and you struck significant oil quantities. ',
        []
      ));
    assets[6].branches[1].branches[0].branches.push(
      new Branch(
        'Divest',
        457.73449438036,
        0,
        0,
        0,
        'Current oil prices provides a very low sell value',
        []
      ));
    assets[6].branches[1].branches[1].branches.push(
      new Branch(
        'Purchase block and start exploration activities',
        -400,
        -17,
        0,
        1670.31576260164,
        'Exploration activities were successful and you struck significant oil quantities. ',
        []
      ));
    assets[6].branches[1].branches[1].branches.push(
      new Branch(
        'Do not bid for block',
        0,
        0,
        0,
        0,
        'Block is not longer available',
        []
      ));
    assets[7].branches[0].branches[0].branches.push(
      new Branch(
        'Initiate a cost-cutting programme, mothballing platforms, laying off staff, sealing wells and cutting production.',
        0,
        -306,
        243,
        684,
        'Cost-cutting programme has increased margins. However continued low oil prices have decimated the countrys finances and they are looking to increase revenues from the oil industry in response to public pressure. ',
        []
      ));
    assets[7].branches[0].branches[0].branches.push(
      new Branch(
        'Continue as-is ',
        0,
        -378,
        206,
        514,
        'Continued low oil prices have decimated the countrys finances and they are looking to increase revenues from the oil industry in response to public pressure',
        []
      ));
    assets[7].branches[0].branches[0].branches.push(
      new Branch(
        'Divest',
        100,
        0,
        0,
        0,
        'Asset sold at low value, given buyers awareness of investment needs',
        []
      ));
    assets[7].branches[0].branches[1].branches.push(
      new Branch(
        'Initiate a cost-cutting programme, mothballing platforms, laying off staff, sealing wells and cutting production.',
        0,
        -306,
        57,
        418,
        'Cost-cutting programme has increased margins. However continued low oil prices have decimated the countrys finances and they are looking to increase revenues from the oil industry in response to public pressure. ',
        []
      ));
    assets[7].branches[0].branches[1].branches.push(
      new Branch(
        'Continue as-is ',
        0,
        -638,
        11,
        219,
        'Continued low oil prices have decimated the countrys finances; they are looking to increase revenues from the oil industry in response to public pressure',
        []
      ));
    assets[7].branches[0].branches[1].branches.push(
      new Branch(
        'Divest',
        100,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[7].branches[0].branches[2].branches.push(
      new Branch(
        'Asset sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[7].branches[1].branches[0].branches.push(
      new Branch(
        'Initiate a cost-cutting programme, mothballing platforms, laying off staff, sealing wells and cutting production.',
        0,
        -306,
        57,
        418,
        'Your cost-cutting programme has increased margins, however continued low oil prices have decimated the countrys finances; they are looking to increase revenues from the oil industry in response to public pressure. ',
        []
      ));
    assets[7].branches[1].branches[0].branches.push(
      new Branch(
        'Continue as-is ',
        0,
        -638,
        11,
        219,
        'Continued low oil prices have decimated the countrys finances; they are looking to increase revenues from the oil industry in response to public pressure',
        []
      ));
    assets[7].branches[1].branches[0].branches.push(
      new Branch(
        'Divest',
        100,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[7].branches[1].branches[1].branches.push(
      new Branch(
        'Purchase field and start development activities',
        -100,
        -638,
        11,
        219,
        'Continued low oil prices have decimated the countrys finances; they are looking to increase revenues from the oil industry in response to public pressure',
        []
      ));
    assets[7].branches[1].branches[1].branches.push(
      new Branch(
        'Do not bid for block',
        0,
        0,
        0,
        0,
        'Field  is not longer available',
        []
      ));
    assets[8].branches[0].branches[0].branches.push(
      new Branch(
        'Continue as is',
        0,
        -678,
        -158,
        219,
        'Production declines have increased. However shale oil has been discovered by another operator in the same basin',
        []
      ));
    assets[8].branches[0].branches[0].branches.push(
      new Branch(
        'Invest in EOR technology',
        -100,
        -264,
        301,
        -211,
        'Investment in EOR marginally improved recovery rates. But shale oil has been discovered by another operator in the same basin and huge investment is required to grab acreage ',
        []
      ));
    assets[8].branches[0].branches[0].branches.push(
      new Branch(
        'Divest',
        100,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[8].branches[0].branches[1].branches.push(
      new Branch(
        'Develop existing acreage for unconventionals',
        -50,
        2276,
        445,
        1831,
        'Productivity from the asset improves but lower oil prices keep development in check',
        []
      ));
    assets[8].branches[0].branches[1].branches.push(
      new Branch(
        'Develop existing acreage for unconventionals and invest in leasing additional acreage',
        -500,
        4276,
        445,
        3831,
        'Productivity and recoverable reserves from the asset improves significantly',
        []
      ));
    assets[8].branches[0].branches[1].branches.push(
      new Branch(
        'Divest',
        1820.8,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[8].branches[0].branches[2].branches.push(
      new Branch(
        'Asset sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[8].branches[1].branches[0].branches.push(
      new Branch(
        'Continue as is',
        0,
        -678,
        -158,
        219,
        'Production declined. However, shale oil has been discovered in your basin. You could take the risk and shift to shale development in your asset or continue with the conventional production',
        []
      ));
    assets[8].branches[1].branches[0].branches.push(
      new Branch(
        'Invest in potential shale development',
        -200,
        799,
        445,
        1831,
        'Productivity and recoverable reserves from the asset improves significantly',
        []
      ));
    assets[8].branches[1].branches[0].branches.push(
      new Branch(
        'Divest',
        100,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[8].branches[1].branches[1].branches.push(
      new Branch(
        'Buy and operate',
        -100,
        -678,
        -158,
        219,
        'Productivity and cash flows declined. However, shale oil discovered elsewhere in the same basin',
        []
      ));
    assets[8].branches[1].branches[1].branches.push(
      new Branch(
        'Do not purchase asset',
        0,
        0,
        0,
        0,
        'A large asset with steady production from a number of old wells is up for sale in Argentina',
        []
      ));
    assets[9].branches[0].branches[0].branches.push(
      new Branch(
        'Continue as is',
        0,
        -183,
        88,
        -80,
        'The asset has become mature; production & cash flows are declining',
        []
      ));
    assets[9].branches[0].branches[0].branches.push(
      new Branch(
        'Invest in new promising horizontal drilling and fracturing technology',
        -400,
        580,
        123,
        -58,
        'Horizontal drilling & fracturing technology has not yielded economical results yet',
        []
      ));
    assets[9].branches[0].branches[0].branches.push(
      new Branch(
        'Divest half and become a non-operator with only 40% stake in the asset',
        50,
        -91.5,
        44,
        -40,
        'Stake sold at a mediocre price to HKMPC, who are now the operator and manages to stabilize production',
        []
      ));
    assets[9].branches[0].branches[0].branches.push(
      new Branch(
        'Divest',
        100,
        0,
        0,
        0,
        'Sold to HKMPC at a mediocre price ',
        []
      ));
    assets[9].branches[1].branches[0].branches.push(
      new Branch(
        'Asset not available',
        0,
        0,
        0,
        0,
        'Asset not available',
        []
      ));
    assets[9].branches[1].branches[1].branches.push(
      new Branch(
        'Continue as is',
        0,
        116,
        228,
        8,
        'Reservoir pressure has declined and therefore production is down. Option to invest in new technology to extract new unproven but promising resources',
        []
      ));
    assets[9].branches[1].branches[1].branches.push(
      new Branch(
        'Divest',
        188.8,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[10].branches[0].branches[0].branches.push(
      new Branch(
        'Continue conversations',
        -25,
        0,
        0,
        0,
        'After several years of production decline the government opens the door to foreign investment. ',
        []
      ));
    assets[10].branches[0].branches[1].branches.push(
      new Branch(
        'Asset not available',
        0,
        0,
        0,
        0,
        'Asset not available',
        []
      ));
    assets[10].branches[1].branches[0].branches.push(
      new Branch(
        'Asset not available',
        0,
        0,
        0,
        0,
        'Asset not available',
        []
      ));
    assets[0].branches[0].branches[0].branches[0].branches.push(
      new Branch(
        'Continue production',
        0,
        -1.95670833333327,
        211.528883333333,
        58.8593333333334,
        'Increase in oil prices provided positive cash flows before field is abandoned',
        []
      ));
    assets[0].branches[0].branches[0].branches[0].branches.push(
      new Branch(
        'Divest',
        10,
        0,
        0,
        0,
        'Asset sold for a low price given abandonment liabilities',
        []
      ));
    assets[0].branches[0].branches[0].branches[1].branches.push(
      new Branch(
        'Challenge union position and continue with cost cutting',
        0,
        30.2992916666667,
        236.616883333333,
        0,
        'Economics damaged by poor labor relations and field abandonment is brought forward',
        []
      ));
    assets[0].branches[0].branches[0].branches[1].branches.push(
      new Branch(
        'Agree a deal with the union but take the opportunity of lowered service costs to invest in near field redevelopment ',
        -100,
        337.408383333333,
        341.360733333333,
        80.0485,
        'Near field assets brought online, abandonment pushed back',
        []
      ));
    assets[0].branches[0].branches[0].branches[1].branches.push(
      new Branch(
        'Divest',
        24.2394333333334,
        0,
        0,
        0,
        'Asset sold at low value, given the short remaining asset life and poor labor relations',
        []
      ));
    assets[0].branches[0].branches[0].branches[2].branches.push(
      new Branch(
        'End investment program and operate',
        0,
        372.31253125,
        326.501733333333,
        100.1935,
        'Production declined but cash flows in the round increase as a result of oil price rise',
        []
      ));
    assets[0].branches[0].branches[0].branches[2].branches.push(
      new Branch(
        'Continue investment and streamline',
        -50,
        444.045821875,
        438.83234375,
        102.3925,
        'Plateau production is sustained and oil price rise helps in additional cash flows',
        []
      ));
    assets[0].branches[0].branches[0].branches[2].branches.push(
      new Branch(
        'Partial divestment giving up operatorship as asset nears end of life',
        178.710015,
        148.9250125,
        130.600693333333,
        40.0774,
        'Partial divestment brought in reasonable returns before the asset production declined further and enabled sustained production',
        []
      ));
    assets[0].branches[0].branches[0].branches[2].branches.push(
      new Branch(
        'Full divestment',
        297.850025,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[0].branches[0].branches[0].branches[3].branches.push(
      new Branch(
        'Asset sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[0].branches[0].branches[1].branches[0].branches.push(
      new Branch(
        'Operate field and hope for prices to go back up',
        0,
        391.86253125,
        415.25734375,
        101.47375,
        'Plateau is sustained, oil price rise brings good cash flows',
        []
      ));
    assets[0].branches[0].branches[1].branches[0].branches.push(
      new Branch(
        'Invest to streamline',
        -50,
        246.133737807187,
        478.09373125,
        113.2469375,
        'Streamlined asset process and organisation accompanied buy lengthend plateau and oil price rise bring sustained excellent results',
        []
      ));
    assets[0].branches[0].branches[1].branches[0].branches.push(
      new Branch(
        'Divest',
        352.676278125,
        0,
        0,
        0,
        'Asset sold at good value given restored plateau',
        []
      ));
    assets[0].branches[0].branches[1].branches[1].branches.push(
      new Branch(
        'Continue as nonoperating partner as field development ramps up',
        0,
        156.7450125,
        166.1029375,
        40.5895,
        'Partner brings redevelopment program to completion successfully and field production declines are reversed and stabilises at a higher level',
        []
      ));
    assets[0].branches[0].branches[1].branches[1].branches.push(
      new Branch(
        'Divest remaining stake in the asset',
        141.07051125,
        0,
        0,
        0,
        'Asset sold to partner at a reasonable price',
        []
      ));
    assets[0].branches[0].branches[1].branches[2].branches.push(
      new Branch(
        'Asset sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[0].branches[0].branches[2].branches[0].branches.push(
      new Branch(
        'Continue as nonoperating partner ',
        0,
        156.7450125,
        166.1029375,
        40.5895,
        'Redevelopment efforts were successful enabling an extended plateau production',
        []
      ));
    assets[0].branches[0].branches[2].branches[0].branches.push(
      new Branch(
        'Jointly invest with the partner to streamline the asset',
        0,
        246.133737807187,
        478.09373125,
        113.2469375,
        'Streamlined asset operations accompanied by extended plateau production brings in sustained excellent results',
        []
      ));
    assets[0].branches[0].branches[2].branches[0].branches.push(
      new Branch(
        'Divest',
        141.07051125,
        0,
        0,
        0,
        'Asset sold at good value given restored plateau',
        []
      ));
    assets[0].branches[0].branches[2].branches[1].branches.push(
      new Branch(
        'Asset sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[0].branches[0].branches[3].branches[0].branches.push(
      new Branch(
        'Asset Sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[0].branches[1].branches[0].branches[0].branches.push(
      new Branch(
        'Continue production',
        0,
        -1.95670833333327,
        211.528883333333,
        58.8593333333334,
        'Increase in oil prices provided positive cash flows before field is abandoned',
        []
      ));
    assets[0].branches[1].branches[0].branches[0].branches.push(
      new Branch(
        'Divest',
        10,
        0,
        0,
        0,
        'Asset sold for a low price given abandonment liabilities',
        []
      ));
    assets[0].branches[1].branches[0].branches[1].branches.push(
      new Branch(
        'Challenge union position and continue with cost cutting',
        0,
        30.2992916666667,
        236.616883333333,
        0,
        'Economics damaged by poor labor relations and field abandonment is brought forward',
        []
      ));
    assets[0].branches[1].branches[0].branches[1].branches.push(
      new Branch(
        'Agree a deal with the union but take the opportunity of lowered service costs to invest in near field redevelopment ',
        -100,
        337.408383333333,
        341.360733333333,
        80.0485,
        'Near field assets brought online, abandonment pushed back',
        []
      ));
    assets[0].branches[1].branches[0].branches[1].branches.push(
      new Branch(
        'Divest',
        24.2394333333334,
        0,
        0,
        0,
        'Asset sold at low value, given short remaining life time and poor labor relations',
        []
      ));
    assets[0].branches[1].branches[0].branches[2].branches.push(
      new Branch(
        'End investment program and operate',
        0,
        372.31253125,
        326.501733333333,
        100.1935,
        'Field declines, cash flow good due to oil price rise',
        []
      ));
    assets[0].branches[1].branches[0].branches[2].branches.push(
      new Branch(
        'Continue investment and streamline',
        -50,
        444.045821875,
        438.83234375,
        102.3925,
        'Plateau is sustained, oil price rise brings good cash flows',
        []
      ));
    assets[0].branches[1].branches[0].branches[2].branches.push(
      new Branch(
        'Partial divestment giving up operatorship as asset nears end of life',
        178.710015,
        148.9250125,
        130.600693333333,
        40.0774,
        'Partial divestment brought in reasonable returns before the asset production declined further and enabled sustained production',
        []
      ));
    assets[0].branches[1].branches[0].branches[2].branches.push(
      new Branch(
        'Full divestment',
        297.850025,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[0].branches[1].branches[0].branches[3].branches.push(
      new Branch(
        'Asset sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[0].branches[1].branches[1].branches[0].branches.push(
      new Branch(
        'Asset not available',
        0,
        0,
        0,
        0,
        'Asset not available',
        []
      ));
    assets[1].branches[0].branches[0].branches[0].branches.push(
      new Branch(
        'Keep the installation manager on the same asset and attempt further efficiency gains on the flagship platform',
        0,
        539.35,
        -692,
        1032,
        'Continued cost-saving resulted in a well blowout, resulting in a massive spill. You are now liable in civil and criminal courts, and have enormous clean-up costs and regulatory fines to pay',
        []
      ));
    assets[1].branches[0].branches[0].branches[0].branches.push(
      new Branch(
        'Move the installation manager to another platform to replicate the success',
        0,
        515.9,
        258,
        1032,
        'The new installation manager discovered serious safety breaches, and shut down the asset for a month to rectify them. Regulators inspected all other assets, and issued a small fine. ',
        []
      ));
    assets[1].branches[0].branches[0].branches[0].branches.push(
      new Branch(
        'Divest the asset',
        375.2,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[1].branches[0].branches[0].branches[1].branches.push(
      new Branch(
        'Seek further efficiency savings, this time on a cost-per-barrel basis',
        0,
        329,
        213,
        850,
        'A routine safety inspection has uncovered poor practice, and regulators have ordered inspections of all other assets, and issued a small fine. ',
        []
      ));
    assets[1].branches[0].branches[0].branches[1].branches.push(
      new Branch(
        'Continue as-is',
        0,
        208,
        352.5,
        1134,
        'Production crept back up but at lower costs, allowing you to achieve better margins',
        []
      ));
    assets[1].branches[0].branches[0].branches[1].branches.push(
      new Branch(
        'Divest',
        166.4,
        0,
        0,
        0,
        'Asset sold at low value, given buyers awareness of cost issues',
        []
      ));
    assets[1].branches[0].branches[0].branches[2].branches.push(
      new Branch(
        'Asset Sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[1].branches[0].branches[1].branches[0].branches.push(
      new Branch(
        'Keep the installation manager on the asset and attempt further efficiency gains on the flagship platform',
        0,
        266.8,
        -758,
        781,
        'Continued cost-saving resulted in a well blowout, resulting in a massive spill. You are now liable in civil and criminal courts, and have enormous clean-up costs and regulatory fines to pay',
        []
      ));
    assets[1].branches[0].branches[1].branches[0].branches.push(
      new Branch(
        'Move the installation manager to another platform, to replicate their success',
        0,
        255.2,
        192,
        781,
        'The new installation manager discovered serious safety breaches, and shut down the asset for a month to rectify them. Regulators inspected all other assets, and issued a small fine. ',
        []
      ));
    assets[1].branches[0].branches[1].branches[0].branches.push(
      new Branch(
        'Divest the asset',
        185.6,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[1].branches[0].branches[1].branches[1].branches.push(
      new Branch(
        'Seek further efficiency savings, this time on a cost-per-barrel basis',
        0,
        115,
        153,
        624,
        'A routine safety inspection has uncovered poor practice, and regulators have ordered inspections of all other assets, and issued a small fine. ',
        []
      ));
    assets[1].branches[0].branches[1].branches[1].branches.push(
      new Branch(
        'Divest',
        100,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[1].branches[0].branches[1].branches[2].branches.push(
      new Branch(
        'Asset Sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[1].branches[0].branches[2].branches[0].branches.push(
      new Branch(
        'Asset Sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[1].branches[1].branches[0].branches[0].branches.push(
      new Branch(
        'Keep the installation manager on the asset and attempt further efficiency gains on the flagship platform',
        0,
        1496.15,
        22,
        1476,
        'Continued cost-saving resulted in a well blowout, resulting in a massive spill. You are now liable in civil and criminal courts, and have enormous clean-up costs and regulatory fines to pay',
        []
      ));
    assets[1].branches[1].branches[0].branches[0].branches.push(
      new Branch(
        'Move the installation manager to another platform, to replicate their success',
        0,
        1431.1,
        972,
        1476,
        'The new installation manager discovered serious safety breaches, and shut down the asset for a month to rectify them. Regulators inspected all other assets, and issued a small fine. ',
        []
      ));
    assets[1].branches[1].branches[0].branches[0].branches.push(
      new Branch(
        'Divest the asset',
        1040.8,
        0,
        0,
        0,
        'Asset sold at low value, given buyers awareness of cost issues',
        []
      ));
    assets[1].branches[1].branches[0].branches[1].branches.push(
      new Branch(
        'Seek further efficiency savings, this time on a cost-per-barrel basis',
        0,
        471,
        671,
        827,
        'A routine safety inspection has uncovered poor practice, and regulators have ordered inspections of all other assets, and issued a small fine. ',
        []
      ));
    assets[1].branches[1].branches[0].branches[1].branches.push(
      new Branch(
        'Continue as-is',
        0,
        300,
        671,
        707,
        'Asset continues to produce, but with high operating costs',
        []
      ));
    assets[1].branches[1].branches[0].branches[1].branches.push(
      new Branch(
        'Divest',
        240,
        0,
        0,
        0,
        'Asset sold at low value, given buyers awareness of cost issues',
        []
      ));
    assets[1].branches[1].branches[0].branches[2].branches.push(
      new Branch(
        'Asset Sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[1].branches[1].branches[1].branches[0].branches.push(
      new Branch(
        'Seek efficiency improvement through reduced drilling and well maintenance times on order to minimise production loss',
        0,
        1939,
        1185,
        2498,
        'The new installation manager discovered serious safety breaches, and shut down the asset for a month to rectify them. Regulators inspected all other assets, and issued a small fine. ',
        []
      ));
    assets[1].branches[1].branches[1].branches[0].branches.push(
      new Branch(
        'Seek cost saving through lower production, with no efficiency improvement on a per-barrel basis',
        0,
        681,
        747,
        1549,
        'Asset continues to produce, but with high operating costs',
        []
      ));
    assets[1].branches[1].branches[1].branches[0].branches.push(
      new Branch(
        'Divest',
        600.8,
        0,
        0,
        0,
        'Asset sold at low value, given buyers awareness of cost issues',
        []
      ));
    assets[1].branches[1].branches[1].branches[1].branches.push(
      new Branch(
        'Field  is not longer available',
        0,
        0,
        0,
        0,
        'Field  is not longer available',
        []
      ));
    assets[2].branches[0].branches[0].branches[0].branches.push(
      new Branch(
        'Asset not available',
        0,
        0,
        0,
        0,
        'The exploration well did not find any hydrocarbons and you have lost your investment',
        []
      ));
    assets[2].branches[1].branches[0].branches[0].branches.push(
      new Branch(
        'Asset not available',
        0,
        0,
        0,
        0,
        'The exploration well did not find any hydrocarbons and you have lost your investment',
        []
      ));
    assets[2].branches[1].branches[1].branches[0].branches.push(
      new Branch(
        'Asset not available',
        0,
        0,
        0,
        0,
        'The exploration well did not find any hydrocarbons and you have lost your investment',
        []
      ));
    assets[2].branches[1].branches[1].branches[1].branches.push(
      new Branch(
        'Purchase block and start exploration activities',
        -64.5333333333333,
        150,
        0,
        0,
        'The exploration well did not find any hydrocarbons and you have lost your investment',
        []
      ));
    assets[2].branches[1].branches[1].branches[1].branches.push(
      new Branch(
        'Do not bid for block',
        0,
        0,
        0,
        0,
        'Good call - another company bought that block and was unable to find any gas',
        []
      ));
    assets[3].branches[0].branches[0].branches[0].branches.push(
      new Branch(
        'Continue as is',
        0,
        186,
        919,
        335,
        'Massive scandal unearthed in the Government. You are now liable for additional costs',
        []
      ));
    assets[3].branches[0].branches[0].branches[0].branches.push(
      new Branch(
        'Divest',
        148.8,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[3].branches[0].branches[0].branches[1].branches.push(
      new Branch(
        'Continue as is',
        0,
        93,
        459.5,
        167.5,
        'Massive scandal unearthed in the Government. You are now liable for additional costs',
        []
      ));
    assets[3].branches[0].branches[0].branches[1].branches.push(
      new Branch(
        'Divest',
        74.4,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[3].branches[0].branches[0].branches[2].branches.push(
      new Branch(
        'Asset Sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[3].branches[0].branches[1].branches[0].branches.push(
      new Branch(
        'Continue as is',
        0,
        93,
        459.5,
        167.5,
        'Massive scandal unearthed in the Government. You are now liable for additional costs',
        []
      ));
    assets[3].branches[0].branches[1].branches[0].branches.push(
      new Branch(
        'Divest',
        74.4,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[3].branches[0].branches[1].branches[1].branches.push(
      new Branch(
        'Continue as is',
        0,
        46.5,
        229.75,
        83.75,
        'Massive scandal unearthed in the Government. You are now liable for additional costs',
        []
      ));
    assets[3].branches[0].branches[1].branches[1].branches.push(
      new Branch(
        'Divest',
        37.2,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[3].branches[0].branches[1].branches[2].branches.push(
      new Branch(
        'Asset Sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[3].branches[0].branches[2].branches[0].branches.push(
      new Branch(
        'Continue as is',
        0,
        711.85,
        998,
        1253,
        'Massive scandal unearthed in the Government. You are now liable for additional costs',
        []
      ));
    assets[3].branches[0].branches[2].branches[0].branches.push(
      new Branch(
        'Divest 50% of asset',
        284.74,
        355.925,
        499,
        626.5,
        'Massive scandal unearthed in the Government. You are now liable for additional costs',
        []
      ));
    assets[3].branches[0].branches[2].branches[0].branches.push(
      new Branch(
        'Divest',
        569.48,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[3].branches[0].branches[2].branches[1].branches.push(
      new Branch(
        'Continue as is',
        0,
        355.925,
        499,
        626.5,
        'Massive scandal unearthed in the Government. You are now liable for additional costs',
        []
      ));
    assets[3].branches[0].branches[2].branches[1].branches.push(
      new Branch(
        'Divest',
        284.74,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[3].branches[0].branches[2].branches[2].branches.push(
      new Branch(
        'Start development on your own',
        -500,
        120,
        0,
        2252,
        'The development went faster than expected and production will start shortly start producing. However,  a massive scandal was unearthed in the Government and you are now liable for additional costs',
        []
      ));
    assets[3].branches[0].branches[2].branches[2].branches.push(
      new Branch(
        'Divest 50% and start development with partner',
        -202,
        60,
        0,
        1126,
        'The development went faster than expected and production will start shortly start producing. However,  a massive scandal was unearthed in the Government and you are now liable for additional costs',
        []
      ));
    assets[3].branches[0].branches[2].branches[2].branches.push(
      new Branch(
        'Hold-off development',
        0,
        0,
        0,
        1752,
        'Massive scandal unearthed in the Government. You are now liable for additional costs',
        []
      ));
    assets[3].branches[0].branches[2].branches[2].branches.push(
      new Branch(
        'Divest',
        96,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[3].branches[0].branches[2].branches[3].branches.push(
      new Branch(
        'Asset Sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[3].branches[0].branches[3].branches[0].branches.push(
      new Branch(
        'Asset Sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[3].branches[1].branches[0].branches[0].branches.push(
      new Branch(
        'Continue as is',
        0,
        620,
        998,
        1253,
        'Massive scandal unearthed in the Government. You are now liable for additional costs',
        []
      ));
    assets[3].branches[1].branches[0].branches[0].branches.push(
      new Branch(
        'Divest 50% of asset',
        248,
        310,
        499,
        626.5,
        'Massive scandal unearthed in the Government. You are now liable for additional costs',
        []
      ));
    assets[3].branches[1].branches[0].branches[0].branches.push(
      new Branch(
        'Divest',
        496,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[3].branches[1].branches[0].branches[1].branches.push(
      new Branch(
        'Continue as is',
        0,
        310,
        499,
        626.5,
        'Massive scandal unearthed in the Government. You are now liable for additional costs',
        []
      ));
    assets[3].branches[1].branches[0].branches[1].branches.push(
      new Branch(
        'Divest',
        248,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[3].branches[1].branches[0].branches[2].branches.push(
      new Branch(
        'Start development on your own',
        -500,
        620,
        0,
        2252,
        'The development went faster than expected and production will shortly start producing. However,  a massive scandal was unearthed in the Government and you are now liable for additional costs',
        []
      ));
    assets[3].branches[1].branches[0].branches[2].branches.push(
      new Branch(
        'Divest 50% and start development with partner',
        -202,
        310,
        0,
        1126,
        'The development went faster than expected and production will start shortly start producing. However,  a massive scandal was unearthed in the Government and you are now liable for additional costs',
        []
      ));
    assets[3].branches[1].branches[0].branches[2].branches.push(
      new Branch(
        'Hold-off development',
        0,
        0,
        0,
        1752,
        'Massive scandal unearthed in the Government. You are now liable for additional costs',
        []
      ));
    assets[3].branches[1].branches[0].branches[2].branches.push(
      new Branch(
        'Divest',
        96,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[3].branches[1].branches[0].branches[3].branches.push(
      new Branch(
        'Asset Sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[3].branches[1].branches[1].branches[0].branches.push(
      new Branch(
        'Start development on your own',
        -500,
        620,
        0,
        2252,
        'The development went faster than expected and production will start shortly start producing. However,  a massive scandal was unearthed in the Government and you are now liable for additional costs',
        []
      ));
    assets[3].branches[1].branches[1].branches[0].branches.push(
      new Branch(
        'Divest 50% and start development with partner',
        -202,
        310,
        0,
        1126,
        'The development went faster than expected and production will start shortly start producing. However,  a massive scandal was unearthed in the Government and you are now liable for additional costs',
        []
      ));
    assets[3].branches[1].branches[1].branches[0].branches.push(
      new Branch(
        'Hold-off development',
        0,
        0,
        0,
        1752,
        'Massive scandal unearthed in the Government. You are now liable for additional costs',
        []
      ));
    assets[3].branches[1].branches[1].branches[0].branches.push(
      new Branch(
        'Divest',
        96,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[3].branches[1].branches[1].branches[1].branches.push(
      new Branch(
        'Block not available',
        0,
        0,
        0,
        0,
        'Block not available',
        []
      ));
    assets[4].branches[0].branches[0].branches[0].branches.push(
      new Branch(
        'Ignore Governments request and continue as is',
        0,
        196.819818647339,
        234.768177225018,
        0,
        'The Government is not happy with your flaring practice and appropriates your asset. ',
        []
      ));
    assets[4].branches[0].branches[0].branches[0].branches.push(
      new Branch(
        'Invest in Gas Injection',
        -50,
        196.819818647339,
        278.388827225018,
        76.7762687075994,
        'Production continues until end of life',
        []
      ));
    assets[4].branches[0].branches[0].branches[0].branches.push(
      new Branch(
        'Divest',
        157.455854917872,
        0,
        0,
        0,
        'Asset sold at low value, given short life time',
        []
      ));
    assets[4].branches[0].branches[0].branches[1].branches.push(
      new Branch(
        'Continue as is',
        0,
        201.45106864734,
        239.399427225018,
        74.9237687075994,
        'Production continues until end of life (EOL)',
        []
      ));
    assets[4].branches[0].branches[0].branches[1].branches.push(
      new Branch(
        'Divest',
        161.160854917872,
        0,
        0,
        0,
        'Asset sold at low value, given short life time',
        []
      ));
    assets[4].branches[0].branches[0].branches[2].branches.push(
      new Branch(
        'Asset sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[4].branches[0].branches[1].branches[0].branches.push(
      new Branch(
        'Ignore Governments request and continue as is',
        0,
        246.133737807187,
        276.990830523061,
        0,
        'The Government is not happy with your flaring practice and appropriates your asset. ',
        []
      ));
    assets[4].branches[0].branches[1].branches[0].branches.push(
      new Branch(
        'Invest in Gas Injection',
        -50,
        246.133737807187,
        311.042455523061,
        101.588591929912,
        'The investment has extended the life of the field',
        []
      ));
    assets[4].branches[0].branches[1].branches[0].branches.push(
      new Branch(
        'Divest',
        196.90699024575,
        0,
        0,
        0,
        'Asset sold at low value, given short life time',
        []
      ));
    assets[4].branches[0].branches[1].branches[1].branches.push(
      new Branch(
        'Continue as is',
        0,
        198.378614867594,
        268.408437547993,
        63.4629914789248,
        'Production continues until end of life (EOL)',
        []
      ));
    assets[4].branches[0].branches[1].branches[1].branches.push(
      new Branch(
        'Divest',
        158.702891894075,
        0,
        0,
        0,
        'Asset sold at low value, given short life time',
        []
      ));
    assets[4].branches[0].branches[1].branches[2].branches.push(
      new Branch(
        'Asset sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[4].branches[0].branches[2].branches[0].branches.push(
      new Branch(
        'Asset sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[4].branches[1].branches[0].branches[0].branches.push(
      new Branch(
        'Ignore Governments request and continue as is',
        0,
        196.819818647339,
        234.768177225018,
        0,
        'The Government is not happy with your flaring practice and appropriates your asset. ',
        []
      ));
    assets[4].branches[1].branches[0].branches[0].branches.push(
      new Branch(
        'Invest in Gas Injection',
        -50,
        196.819818647339,
        278.388827225018,
        76.7762687075994,
        'Production continues until end of life (EOL)',
        []
      ));
    assets[4].branches[1].branches[0].branches[0].branches.push(
      new Branch(
        'Divest',
        157.455854917872,
        0,
        0,
        0,
        'Asset sold at low value, given short life time',
        []
      ));
    assets[4].branches[1].branches[0].branches[1].branches.push(
      new Branch(
        'Continue as is',
        0,
        201.45106864734,
        239.399427225018,
        74.9237687075994,
        'Production continues until end of life (EOL)',
        []
      ));
    assets[4].branches[1].branches[0].branches[1].branches.push(
      new Branch(
        'Divest',
        161.160854917872,
        0,
        0,
        0,
        'Asset sold at low value, given short life time',
        []
      ));
    assets[4].branches[1].branches[0].branches[2].branches.push(
      new Branch(
        'Asset sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[4].branches[1].branches[1].branches[0].branches.push(
      new Branch(
        'Continue as is',
        0,
        201.45106864734,
        226.176805729721,
        38.9507155828677,
        'Production continues until end of life (EOL)',
        []
      ));
    assets[4].branches[1].branches[1].branches[0].branches.push(
      new Branch(
        'Divest',
        161.160854917872,
        0,
        0,
        0,
        'Asset sold at low value, given short life time',
        []
      ));
    assets[4].branches[1].branches[1].branches[1].branches.push(
      new Branch(
        'Asset not available',
        0,
        0,
        0,
        0,
        'Asset not available',
        []
      ));
    assets[5].branches[0].branches[0].branches[0].branches.push(
      new Branch(
        'Ignore the green campaigners, and continue as-is',
        0,
        -422,
        192,
        542,
        'Despite the threat from environmental campaigners project has raked in profits due to higher oil price',
        []
      ));
    assets[5].branches[0].branches[0].branches[0].branches.push(
      new Branch(
        'Divest the asset',
        100,
        0,
        0,
        0,
        'Asset sold at low value, given buyers awareness of high costs and environmental concerns',
        []
      ));
    assets[5].branches[0].branches[0].branches[1].branches.push(
      new Branch(
        'Ignore the green campaigners, and continue as-is',
        0,
        166,
        274,
        933,
        'The higher oil price combined with previous cost-cutting has significantly increased the profitability of the asset',
        []
      ));
    assets[5].branches[0].branches[0].branches[1].branches.push(
      new Branch(
        'Divest the asset',
        132.8,
        0,
        0,
        0,
        'Asset sold at a discount as buyers were deterred by environmental concerns',
        []
      ));
    assets[5].branches[0].branches[0].branches[2].branches.push(
      new Branch(
        'Asset Sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[5].branches[0].branches[1].branches[0].branches.push(
      new Branch(
        'Ignore the green campaigners, and continue as-is',
        0,
        -75,
        278,
        918,
        'The higher oil price increases the profitability of the project, enhanced by technological advancement',
        []
      ));
    assets[5].branches[0].branches[1].branches[0].branches.push(
      new Branch(
        'Divest the asset',
        150,
        0,
        0,
        0,
        'Asset sold at good value despite environtental concerns due to implementation of EOR projects',
        []
      ));
    assets[5].branches[0].branches[1].branches[1].branches.push(
      new Branch(
        'Ignore the green campaigners, and continue as-is',
        0,
        478,
        351,
        1271,
        'Despite the threat from environmental campaigners project has remained profitable due to higher oil price and implementation of EOR and cost cutting projects',
        []
      ));
    assets[5].branches[0].branches[1].branches[1].branches.push(
      new Branch(
        'Divest the asset',
        382.4,
        0,
        0,
        0,
        'Asset sold at high value given implementation of EOR project and cost cutting exercise',
        []
      ));
    assets[5].branches[0].branches[2].branches[0].branches.push(
      new Branch(
        'Asset Sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[5].branches[1].branches[0].branches[0].branches.push(
      new Branch(
        'Ignore the green campaigners, and continue as-is',
        0,
        -422,
        192,
        542,
        'Despite the threat from environmental campaigners project has raked in profits due to higher oil price',
        []
      ));
    assets[5].branches[1].branches[0].branches[0].branches.push(
      new Branch(
        'Divest the asset',
        100,
        0,
        0,
        0,
        'Asset sold at low value, given buyers awareness of high costs and environmental concerns',
        []
      ));
    assets[5].branches[1].branches[0].branches[1].branches.push(
      new Branch(
        'Ignore the green campaigners, and continue as-is',
        0,
        166,
        274,
        933,
        'The higher oil price combined with previous cost-cutting exercise has significantly increased the profitability of the asset',
        []
      ));
    assets[5].branches[1].branches[0].branches[1].branches.push(
      new Branch(
        'Divest the asset',
        132.8,
        0,
        0,
        0,
        'Asset sold at a discount as buyers were deterred by environmental concerns',
        []
      ));
    assets[5].branches[1].branches[0].branches[2].branches.push(
      new Branch(
        'Asset Sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[5].branches[1].branches[1].branches[0].branches.push(
      new Branch(
        'Ignore the green campaigners, and continue as-is',
        0,
        -422,
        192,
        542,
        'The higher oil price increases the profitability of the project',
        []
      ));
    assets[5].branches[1].branches[1].branches[0].branches.push(
      new Branch(
        'Divest the asset',
        100,
        0,
        0,
        0,
        'Asset sold at a discount due to buyers awareness of high costs and environmental concerns',
        []
      ));
    assets[5].branches[1].branches[1].branches[1].branches.push(
      new Branch(
        'Field  is not longer available',
        0,
        0,
        0,
        0,
        'Field  is not longer available',
        []
      ));
    assets[6].branches[0].branches[0].branches[0].branches.push(
      new Branch(
        'Continue as is',
        0,
        719.52891782968,
        871.452776733851,
        36.8578000552893,
        'Social unrest continues and profits erode from the field',
        []
      ));
    assets[6].branches[0].branches[0].branches[0].branches.push(
      new Branch(
        'Invest in social development',
        -100,
        719.52891782968,
        1393.332848064,
        105.799757975075,
        'Investments in local community development has resulted in a better working environment and increase in productivity',
        []
      ));
    assets[6].branches[0].branches[0].branches[0].branches.push(
      new Branch(
        'Divest',
        575.623134263744,
        0,
        0,
        0,
        'Asset sold at low prices - concerns on social situation in field',
        []
      ));
    assets[6].branches[0].branches[0].branches[1].branches.push(
      new Branch(
        'Continue as is',
        0,
        693.94365697664,
        829.775129179769,
        87.110449447431,
        'Field continues production in a fairly stable environment',
        []
      ));
    assets[6].branches[0].branches[0].branches[1].branches.push(
      new Branch(
        'Divest',
        555.154925581312,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[6].branches[0].branches[0].branches[2].branches.push(
      new Branch(
        'Asset Sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[6].branches[0].branches[1].branches[0].branches.push(
      new Branch(
        'Continue as is',
        0,
        2216.36527767343,
        2082.797105625,
        588.94365697664,
        'Social unrest continues and profits erode from the field',
        []
      ));
    assets[6].branches[0].branches[1].branches[0].branches.push(
      new Branch(
        'Invest in social development',
        -100,
        2216.36527767343,
        2588.924889875,
        536.8546370848,
        'Investments in local community development has resulted in a better working environment and increase in productivity',
        []
      ));
    assets[6].branches[0].branches[1].branches[0].branches.push(
      new Branch(
        'Divest',
        1773.09222213874,
        0,
        0,
        0,
        'Asset sold at low prices - concerns on social situation in field',
        []
      ));
    assets[6].branches[0].branches[1].branches[1].branches.push(
      new Branch(
        'Start development ',
        -1001,
        1670.31576260164,
        0,
        2671.74076260164,
        'The development was slower than expected. Managing the local workforce and external contractors have been a challenge and does not seem to get easier moving forward',
        []
      ));
    assets[6].branches[0].branches[1].branches[1].branches.push(
      new Branch(
        'Hold-off development',
        0,
        1670.31576260164,
        0,
        1002.44445756098,
        'An unhappy community expecting development and jobs has diminished the value of the asset',
        []
      ));
    assets[6].branches[0].branches[1].branches[1].branches.push(
      new Branch(
        'Divest',
        1002.18945756098,
        0,
        0,
        0,
        'Asset sold at lower value do to uncertainty on development prospects',
        []
      ));
    assets[6].branches[0].branches[1].branches[2].branches.push(
      new Branch(
        'Asset Sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[6].branches[0].branches[2].branches[0].branches.push(
      new Branch(
        'Asset Sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[6].branches[1].branches[0].branches[0].branches.push(
      new Branch(
        'Continue as is',
        0,
        2216.36527767343,
        2082.797105625,
        588.94365697664,
        'Social unrest continues and profits erode from the field',
        []
      ));
    assets[6].branches[1].branches[0].branches[0].branches.push(
      new Branch(
        'Invest in social development',
        -100,
        2216.36527767343,
        2588.924889875,
        536.8546370848,
        'Investments in local community development has resulted in a better working environment and increase in productivity',
        []
      ));
    assets[6].branches[1].branches[0].branches[0].branches.push(
      new Branch(
        'Divest',
        1773.09222213874,
        0,
        0,
        0,
        'Asset sold at low prices - concerns on social situation in field',
        []
      ));
    assets[6].branches[1].branches[0].branches[1].branches.push(
      new Branch(
        'Start development ',
        -1001,
        1670.31576260164,
        0,
        2671.74076260164,
        'The development was slower than expected. Managing the local workforce and external contractors have been a challenge and does not seem to get easier moving forward',
        []
      ));
    assets[6].branches[1].branches[0].branches[1].branches.push(
      new Branch(
        'Hold-off development',
        0,
        1670.31576260164,
        0,
        1002.44445756098,
        'An unhappy community expecting development and jobs has diminished the value of the asset',
        []
      ));
    assets[6].branches[1].branches[0].branches[1].branches.push(
      new Branch(
        'Divest',
        1002.18945756098,
        0,
        0,
        0,
        'Asset sold at lower value do to uncertainty on development prospects',
        []
      ));
    assets[6].branches[1].branches[0].branches[2].branches.push(
      new Branch(
        'Asset Sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[6].branches[1].branches[1].branches[0].branches.push(
      new Branch(
        'Start development ',
        -1001,
        1670.31576260164,
        0,
        2671.74076260164,
        'The development was slower than expected. Managing the local workforce and external contractors have been a challenge and does not seem to get easier moving forward',
        []
      ));
    assets[6].branches[1].branches[1].branches[0].branches.push(
      new Branch(
        'Hold-off development',
        0,
        1670.31576260164,
        0,
        1002.44445756098,
        'An unhappy community expecting development and jobs has diminished the value of the asset',
        []
      ));
    assets[6].branches[1].branches[1].branches[0].branches.push(
      new Branch(
        'Divest',
        1002.18945756098,
        0,
        0,
        0,
        'Asset sold at lower value do to uncertainty on development prospects',
        []
      ));
    assets[6].branches[1].branches[1].branches[1].branches.push(
      new Branch(
        'Block not available',
        0,
        0,
        0,
        0,
        'Block not available',
        []
      ));
    assets[7].branches[0].branches[0].branches[0].branches.push(
      new Branch(
        'Offer the government a small share of oil volumes, but refuse to make increased cash payments',
        0,
        81,
        0,
        0,
        'The govenrment nationalises your asset with no compensatory cash offer, in response to refusal to part with higher volumes despite being profitable and firing local staff. You launched a legal challenge but it failed.',
        []
      ));
    assets[7].branches[0].branches[0].branches[0].branches.push(
      new Branch(
        'Offer the government a increased fixed royalty fee but retain the rights to all the oil',
        0,
        -155,
        500,
        812,
        'The government, desperate for cash, accepted your offer! You benefit from the increase in oil prices over the period',
        []
      ));
    assets[7].branches[0].branches[0].branches[0].branches.push(
      new Branch(
        'Divest',
        547.2,
        0,
        0,
        0,
        'Asset sold at a discount, given buyers fear of the governments stance',
        []
      ));
    assets[7].branches[0].branches[0].branches[1].branches.push(
      new Branch(
        'Offer the government a small share of oil volumes, but refuse to make increased cash payments',
        0,
        -439,
        0,
        0,
        'The govenrment nationalises your asset with no compensatory cash offer, in response to refusal to part with higher volumes. You launched a legal challenge but it failed.',
        []
      ));
    assets[7].branches[0].branches[0].branches[1].branches.push(
      new Branch(
        'Divest',
        100,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[7].branches[0].branches[0].branches[2].branches.push(
      new Branch(
        'Asset Sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[7].branches[0].branches[1].branches[0].branches.push(
      new Branch(
        'Offer the government a small share of oil volumes, but refuse to make increased cash payments',
        0,
        -437,
        0,
        0,
        'The govenrment nationalises your asset with no compensatory cash offer, in response to refusal to part with higher volumes despite being profitable and for failing to investing in new technology. You launched a legal challenge but it failed.',
        []
      ));
    assets[7].branches[0].branches[1].branches[0].branches.push(
      new Branch(
        'Offer the government a increased fixed royalty fee but retain the rights to all the oil',
        0,
        -376,
        -50,
        0,
        'The govenrment nationalises your asset with no compensatory cash offer, for failing to investing in new technology and firing local staff. The US prosecutors have interpreted your cash offer as an attempt to bribe, and levied a large fine in response',
        []
      ));
    assets[7].branches[0].branches[1].branches[0].branches.push(
      new Branch(
        'Divest',
        100,
        0,
        0,
        0,
        'Asset sold at a discount, given buyers fear of the governments stance',
        []
      ));
    assets[7].branches[0].branches[1].branches[1].branches.push(
      new Branch(
        'Offer the government a small share of oil volumes, but refuse to make increased cash payments',
        0,
        -675,
        -126,
        476,
        'The government accepts your offer; however you therefore do not gain the full benefit of the increase in oil price over the course of the project',
        []
      ));
    assets[7].branches[0].branches[1].branches[1].branches.push(
      new Branch(
        'Divest',
        100,
        0,
        0,
        0,
        'Asset sold at a discount, given buyers fear of the governments stance',
        []
      ));
    assets[7].branches[0].branches[1].branches[2].branches.push(
      new Branch(
        'Asset Sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[7].branches[0].branches[2].branches[0].branches.push(
      new Branch(
        'Asset Sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[7].branches[1].branches[0].branches[0].branches.push(
      new Branch(
        'Offer the government a small share of oil volumes, but refuse to make increased cash payments',
        0,
        -437,
        0,
        0,
        'The govenrment nationalised your asset, in response to firing of local staff with no compensatory cash offer, and historic failure to invest in new technology. You launch a legal challenge but, as expected, it fails.',
        []
      ));
    assets[7].branches[1].branches[0].branches[0].branches.push(
      new Branch(
        'Offer the government a increased fixed royalty fee but retain the rights to all the oil',
        0,
        -376,
        -50,
        0,
        'The govenrment nationalises your asset with no compensatory cash offer, for firing local staff. The US prosecutors have interpreted your cash offer as an attempt to bribe, and levied a large fine in response',
        []
      ));
    assets[7].branches[1].branches[0].branches[0].branches.push(
      new Branch(
        'Divest',
        100,
        0,
        0,
        0,
        'Asset sold at a discount, given buyers fear of the governments stance',
        []
      ));
    assets[7].branches[1].branches[0].branches[1].branches.push(
      new Branch(
        'Offer the government a small share of oil volumes, but refuse to make increased cash payments',
        0,
        -675,
        -126,
        476,
        'The government accepts your offer; however you therefore do not gain the full benefit of the increase in oil price over the course of the project',
        []
      ));
    assets[7].branches[1].branches[0].branches[1].branches.push(
      new Branch(
        'Divest',
        100,
        0,
        0,
        0,
        'Asset sold at a discount, given buyers fear of the governments stance',
        []
      ));
    assets[7].branches[1].branches[0].branches[2].branches.push(
      new Branch(
        'Asset Sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[7].branches[1].branches[1].branches[0].branches.push(
      new Branch(
        'Offer the government a small share of oil volumes, but refuse to make increased cash payments',
        0,
        -675,
        -126,
        476,
        'The government accepts your offer; however you therefore do not gain the full benefit of the increase in oil price over the course of the project',
        []
      ));
    assets[7].branches[1].branches[1].branches[0].branches.push(
      new Branch(
        'Offer the government a increased fixed royalty fee but retain the rights to all the oil',
        0,
        -608,
        0,
        0,
        'The government, desperate for cash, accepts your offer! You benefit from the increase in oil prices over the period',
        []
      ));
    assets[7].branches[1].branches[1].branches[0].branches.push(
      new Branch(
        'Divest',
        109.5,
        0,
        0,
        0,
        'Asset sold at a discount, given buyers fear of the governments stance',
        []
      ));
    assets[7].branches[1].branches[1].branches[1].branches.push(
      new Branch(
        'Field  is not longer available',
        0,
        0,
        0,
        0,
        'Field  is not longer available',
        []
      ));
    assets[8].branches[0].branches[0].branches[0].branches.push(
      new Branch(
        'Continue as is',
        0,
        219,
        172,
        584,
        'Production has declined rapidly and the field is near end of life.',
        []
      ));
    assets[8].branches[0].branches[0].branches[0].branches.push(
      new Branch(
        'Shift to shale development',
        -200,
        1831,
        827,
        2079,
        'Shale resources have extended the life of the field and unlocked huge reserves',
        []
      ));
    assets[8].branches[0].branches[0].branches[0].branches.push(
      new Branch(
        'Divest',
        175.2,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[8].branches[0].branches[0].branches[1].branches.push(
      new Branch(
        'Continue as is',
        0,
        -211,
        237,
        734,
        'Production has declined rapidly and the field is near end of life.',
        []
      ));
    assets[8].branches[0].branches[0].branches[1].branches.push(
      new Branch(
        'Shift to shale development',
        -200,
        2153,
        958,
        2378,
        'Your investment in shale has unlocked huge resources',
        []
      ));
    assets[8].branches[0].branches[0].branches[1].branches.push(
      new Branch(
        'Divest',
        100,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[8].branches[0].branches[0].branches[2].branches.push(
      new Branch(
        'Asset sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[8].branches[0].branches[1].branches[0].branches.push(
      new Branch(
        'Continue as is',
        0,
        1831,
        827,
        2079,
        'Production declines significantly due to the steeper shale decline curve. Continuous development required to maintain stable production',
        []
      ));
    assets[8].branches[0].branches[1].branches[0].branches.push(
      new Branch(
        'Buy additional shale acreage, and continue development',
        -500,
        3331,
        827,
        2579,
        'Production upside is limited as the new shale acreage turns out to be non-sweet spots (Poor rock quality)',
        []
      ));
    assets[8].branches[0].branches[1].branches[0].branches.push(
      new Branch(
        'Divest',
        1464.8,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[8].branches[0].branches[1].branches[1].branches.push(
      new Branch(
        'Continue as is',
        0,
        3831,
        827,
        4079,
        'Production grows significantly and the company now holds the prime shale acreage in the basin',
        []
      ));
    assets[8].branches[0].branches[1].branches[1].branches.push(
      new Branch(
        'Divest',
        3064.8,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[8].branches[0].branches[1].branches[2].branches.push(
      new Branch(
        'Asset sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[8].branches[0].branches[2].branches[0].branches.push(
      new Branch(
        'Asset sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[8].branches[1].branches[0].branches[0].branches.push(
      new Branch(
        'Continue as is',
        0,
        219,
        172,
        584,
        'Production declines - field near end of life. ',
        []
      ));
    assets[8].branches[1].branches[0].branches[0].branches.push(
      new Branch(
        'Shift to shale development',
        -200,
        499,
        827,
        2079,
        'Production imroves  - and shale resources extend field life. ',
        []
      ));
    assets[8].branches[1].branches[0].branches[0].branches.push(
      new Branch(
        'Divest',
        175.2,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[8].branches[1].branches[0].branches[1].branches.push(
      new Branch(
        'Continue as is',
        0,
        1831,
        827,
        2079,
        'Production imroves  - and shale resources extend field life. ',
        []
      ));
    assets[8].branches[1].branches[0].branches[1].branches.push(
      new Branch(
        'Buy additional shale acreage for development',
        -500,
        3831,
        827,
        2579,
        'Shift to unconventionals increase production and recoverable reserves from your original asset. However new shale acreage purchased has turned out to be non sweet spots (Poor rock quality)',
        []
      ));
    assets[8].branches[1].branches[0].branches[1].branches.push(
      new Branch(
        'Divest',
        1464.8,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[8].branches[1].branches[0].branches[2].branches.push(
      new Branch(
        'Asset sold',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[8].branches[1].branches[1].branches[0].branches.push(
      new Branch(
        'Continue as is',
        0,
        219,
        172,
        584,
        'Production declines - field near end of life. ',
        []
      ));
    assets[8].branches[1].branches[1].branches[0].branches.push(
      new Branch(
        'Shift to Shale development',
        -200,
        1831,
        827,
        2079,
        'Production imroves  - and shale resources extend field life. ',
        []
      ));
    assets[8].branches[1].branches[1].branches[0].branches.push(
      new Branch(
        'Divest',
        175.2,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[8].branches[1].branches[1].branches[1].branches.push(
      new Branch(
        'Buy and operate',
        -175.2,
        219,
        172,
        584,
        'Production has declined and the field is near end of life. ',
        []
      ));
    assets[8].branches[1].branches[1].branches[1].branches.push(
      new Branch(
        'Do not purchase asset',
        0,
        0,
        0,
        0,
        'Asset not available',
        []
      ));
    assets[9].branches[0].branches[0].branches[0].branches.push(
      new Branch(
        'Continue as is',
        0,
        -200,
        93,
        -101,
        'Production decline continues. Field is now near end of life. ',
        []
      ));
    assets[9].branches[0].branches[0].branches[0].branches.push(
      new Branch(
        'Invest in EOR technology in an attempt to enhance production',
        -10,
        -58,
        116,
        -95,
        'EOR has increased production by 10% however, the field is still near end of life. ',
        []
      ));
    assets[9].branches[0].branches[0].branches[0].branches.push(
      new Branch(
        'Divest',
        -64,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[9].branches[0].branches[0].branches[1].branches.push(
      new Branch(
        'Continue as is',
        0,
        -58,
        116,
        -95,
        'Transferrable technologies for shale development has not been successful. Production decline continues - field near end of life.',
        []
      ));
    assets[9].branches[0].branches[0].branches[1].branches.push(
      new Branch(
        'Divest',
        -46.4,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[9].branches[0].branches[0].branches[2].branches.push(
      new Branch(
        'Continue as is',
        0,
        -40,
        46.5,
        -50.5,
        'Production decline continues. Field is now near end of life. ',
        []
      ));
    assets[9].branches[0].branches[0].branches[2].branches.push(
      new Branch(
        'Divest',
        -32,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[9].branches[0].branches[0].branches[3].branches.push(
      new Branch(
        'Divest',
        0,
        0,
        0,
        0,
        'Asset sold',
        []
      ));
    assets[9].branches[1].branches[0].branches[0].branches.push(
      new Branch(
        'Asset not available',
        0,
        0,
        0,
        0,
        'Asset not available',
        []
      ));
    assets[9].branches[1].branches[1].branches[0].branches.push(
      new Branch(
        'Continue as is',
        0,
        8,
        207,
        -8,
        'The asset has become mature; production & cash flows are declining',
        []
      ));
    assets[9].branches[1].branches[1].branches[0].branches.push(
      new Branch(
        'Invest in new promising horizontal drilling and fracturing technology',
        -400,
        581,
        254,
        21,
        'Horizontal drilling & fracturing technology has not yielded economical results',
        []
      ));
    assets[9].branches[1].branches[1].branches[0].branches.push(
      new Branch(
        'Divest',
        6.4,
        0,
        0,
        0,
        'Asset not available',
        []
      ));
    assets[9].branches[1].branches[1].branches[1].branches.push(
      new Branch(
        'Asset not available',
        0,
        0,
        0,
        0,
        'Asset not available',
        []
      ));
    assets[10].branches[0].branches[0].branches[0].branches.push(
      new Branch(
        'Participate in the field as a service provider. You feel this is a safe exposure with a small return and opportunity to build your relationship',
        -100,
        170,
        243,
        0,
        'Successful short-lived partnership. The government provided the agreed upon payment for your services but finished the venture after the agreed time period',
        []
      ));
    assets[10].branches[0].branches[0].branches[0].branches.push(
      new Branch(
        'Participate in the field in a JV mode. It requires upfront investment and faith on the government future behavior and provides higher return potential',
        -500,
        500,
        200,
        700,
        'Successful partnership. The recovery in oil prices has helped the government to increase revenues and provided a healthy return to you.',
        []
      ));
    assets[10].branches[0].branches[0].branches[0].branches.push(
      new Branch(
        'Do not participate and exit country',
        0,
        0,
        0,
        0,
        'Country exited',
        []
      ));
    assets[10].branches[0].branches[1].branches[0].branches.push(
      new Branch(
        'Asset not available',
        0,
        0,
        0,
        0,
        'Asset not available',
        []
      ));
    assets[10].branches[1].branches[0].branches[0].branches.push(
      new Branch(
        'Asset not available',
        0,
        0,
        0,
        0,
        'Asset not available',
        []
      ));

      return assets;
  }

}
