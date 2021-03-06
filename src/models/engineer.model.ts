import {NeedModel} from "./need.model";

export class EngineerModel {
  public static needs: Array<NeedModel> = [
    {
      name: 'Glasses',
      consumption: 0.000222222,
      influx: 4,
      income: [25],
      iconPath: 'assets/images/goods/Glasses.png'
    },
    {
      name: 'Coffee',
      consumption: 0.001176471,
      influx: 2,
      iconPath: 'assets/images/goods/Coffee.png'
    },
    {
      name: 'Light Bulbs',
      consumption: 0.0003124995,
      influx: 2,
      iconPath: 'assets/images/goods/Light_bulb.png'
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
      iconPath: 'assets/images/goods/Sewing_machine.png'
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
      name: 'High Wheelers',
      consumption: 0.0006250005,
      happiness: 5,
      populationRequirement: 500,
      iconPath: 'assets/images/goods/High_wheeler.png'
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
      name: 'Bank',
      happiness: 7,
      populationRequirement: 150,
      iconPath: 'assets/images/buildings/Bank.png'
    },
    {
      name: 'Pocket Watches',
      consumption: 0.0001960785,
      happiness: 3,
      populationRequirement: 1000,
      iconPath: 'assets/images/goods/Pocket_watch.png'
    }
  ];

  constructor() {
  }
}
