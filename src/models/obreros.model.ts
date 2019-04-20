import {NeedModel} from './need.model';

export class ObrerosModel {
  public static needs: Array<NeedModel> = [
    {
      name: 'Market',
      influx: 5,
      iconPath: 'assets/images/buildings/Marketplace.png'
    },
    {
      name: 'Fried Plantains',
      consumption: 0.00285714,
      influx: 3,
      income: [3],
      populationRequirement: 50,
      iconPath: 'assets/images/goods/Friend_plantains.png'
    },
    {
      name: 'Ponchos',
      consumption: 0.002500002,
      influx: 3,
      income: [3],
      populationRequirement: 200,
      iconPath: 'assets/images/goods/Poncho.png'
    },
    {
      name: 'Rum',
      consumption: 0.00142857,
      happiness: 6,
      income: [3],
      populationRequirement: 100,
      iconPath: 'assets/images/goods/Rum.png'
    },
    {
      name: 'Chapel',
      populationRequirement: 300,
      iconPath: 'assets/images/buildings/Chapel.png'
    },
    {
      name: 'Tortillas',
      consumption: 0.00142857,
      influx: 4,
      income: [3],
      populationRequirement: 1,
      iconPath: 'assets/images/goods/Tortilla.png'
    },
    {
      name: 'Coffee',
      consumption: 0.000588237,
      influx: 2,
      income: [3],
      populationRequirement: 300,
      iconPath: 'assets/images/goods/Coffee.png'
    },
    {
      name: 'Bowler Hats',
      consumption: 0.001333332,
      influx: 2,
      income: [3],
      populationRequirement: 600,
      iconPath: 'assets/images/goods/Bowler_hats.png'
    },
    {
      name: 'Sewing Machines',
      consumption: 0.001250001,
      influx: 2,
      income: [6],
      populationRequirement: 1000,
      iconPath: 'assets/images/goods/Sewing_machine.png'
    },
    {
      name: 'Beer',
      consumption: 0.001333332,
      happiness: 4,
      income: [7],
      populationRequirement: 600,
      iconPath: 'assets/images/goods/Rum.png'
    },
    {
      name: 'Cigars',
      consumption: 0.000555555,
      happiness: 2,
      income: [9],
      populationRequirement: 1000,
      iconPath: 'assets/images/goods/Cigars.png'
    },
    {
      name: 'Boxing Arena',
      populationRequirement: 300,
      iconPath: 'assets/images/buildings/Boxing_arena.png'
    }
  ];

  constructor() {
  }
}
