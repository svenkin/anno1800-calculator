import {NeedModel} from "./need.model";

export class ArtisanModel {
  public static needs: Array<NeedModel> = [
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
      name: 'Canned Food',
      consumption: 0.00034188,
      influx: 4,
      income: [7, 7],
      iconPath: 'assets/images/goods/Canned_food.png'
    },
    {
      name: 'Sewing Machines',
      consumption: 0.00095238,
      influx: 2,
      income: [15, 13],
      iconPath: 'assets/images/goods/Sewing_machines.png'
    },
    {
      name: 'Fur Coats',
      consumption: 0.000888888,
      influx: 2,
      income: [22],
      iconPath: 'assets/images/goods/Fur_Coats.png'
    },
    {
      name: 'University',
      influx: 2,
      iconPath: 'assets/images/buildings/University.png'
    },
    {
      name: 'Variety Theatre',
      income: [7, 7],
      iconPath: 'assets/images/buildings/Variety_theatre.png'
    },
    {
      name: 'Beer',
      consumption: 0.00076923,
      income: [13, 11],
      happiness: 3,
      populationRequirement: 500,
      iconPath: 'assets/images/goods/Beer.png'
    },
    {
      name: 'Rum',
      consumption: 0.001904762,
      income: [22],
      happiness: 4,
      populationRequirement: 500,
      iconPath: 'assets/images/goods/Rum.png'
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
