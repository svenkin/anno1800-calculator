import {NeedModel} from "./need.model";

export class WorkerModel {
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
      income: [3, 2],
      iconPath: 'assets/images/goods/Fish.png'
    },
    {
      name: 'Work Clothes',
      consumption: 0.003076926,
      influx: 3,
      income: [7, 7],
      iconPath: 'assets/images/goods/Work_clothes.png'
    },
    {
      name: 'Sausages',
      consumption: 0.001000002,
      influx: 3,
      income: [5, 4],
      iconPath: 'assets/images/goods/Sausages.png'
    },
    {
      name: 'Bread',
      consumption: 0.00090909,
      influx: 3,
      income: [5, 4],
      iconPath: 'assets/images/goods/Bread.png'
    },
    {
      name: 'Soap',
      consumption: 0.000416667,
      influx: 2,
      income: [5, 4],
      iconPath: 'assets/images/goods/Soap.png'
    },
    {
      name: 'School',
      influx: 2,
      iconPath: 'assets/images/buildings/School.png'
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
    },
    {
      name: 'Beer',
      consumption: 0.00076923,
      income: [13, 11],
      happiness: 3,
      populationRequirement: 500,
      iconPath: 'assets/images/goods/Schnapps.png'
    },
    {
      name: 'Church',
      happiness: 7,
      populationRequirement: 150,
      iconPath: 'assets/images/buildings/Church.png'
    }
  ];

  constructor() {
  }
}
