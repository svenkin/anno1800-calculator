import {NeedModel} from './need.model';

export class JornalerosModel {
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
      iconPath: 'assets/images/goods/Fried_plantains.png'

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
    }
  ];

  constructor() {
  }
}
