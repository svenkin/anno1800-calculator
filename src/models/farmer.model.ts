import {NeedModel} from "./need.model";

export class FarmerModel {
  public static needs: Array<NeedModel> = [
    {
      name: 'Market',
      influx: 5,
      iconPath: 'assets/images/buildings/Marketplace.png'
    },
    {
      name: 'Fish',
      consumption: 0.0025000002,
      influx: 3,
      income: [1, 1],
      populationRequirement: 50,
      iconPath: 'assets/images/goods/Fish.png'
    },
    {
      name: 'Work Clothes',
      consumption: 0.003076926,
      influx: 3,
      income: [4, 3],
      populationRequirement: 150,
      iconPath: 'assets/images/goods/Work_clothes.png'
    },
    {
      name: 'Schnapps',
      consumption: 0.003333336,
      income: [1, 1],
      populationRequirement: 100,
      iconPath: 'assets/images/goods/Schnapps.png'
    },
    {
      name: 'Pub',
      income: [1, 1],
      populationRequirement: 150,
      iconPath: 'assets/images/buildings/Pub.png'
    }
  ];
  constructor(){}
}
