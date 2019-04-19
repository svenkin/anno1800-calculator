import {NeedModel} from "./need.model";

export class InvestorModel {
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
      iconPath: 'assets/images/goods/Light_bulbs.png'
    },
    {
      name: 'Champagne',
      consumption: 0.0004704,
      influx: 2,
      iconPath: 'assets/images/goods/Champagne.png'
    },
    {
      name: 'Cigars',
      consumption: 0.000444444,
      influx: 2,
      iconPath: 'assets/images/goods/Cigars.png'
    },
    {
      name: 'Chocolate',
      consumption: 0.0010666668,
      influx: 2,
      income: [22],
      iconPath: 'assets/images/goods/Chocolate.png'
    },
    {
      name: 'Steam Carriages',
      influx: 2,
      consumption: 0.000133332,
      iconPath: 'assets/images/goods/Steam_carriages.png'
    },
    {
      name: 'Club House',
      iconPath: 'assets/images/buildings/Club_house.png'
    },
    {
      name: 'High Wheelers',
      consumption: 0.0006250005,
      happiness: 5,
      populationRequirement: 500,
      iconPath: 'assets/images/goods/High_Wheelers.png'
    },
    {
      name: 'Jewelry',
      consumption: 0.0004210524,
      happiness: 2,
      populationRequirement: 1750,
      iconPath: 'assets/images/goods/Jewelry.png'
    },
    {
      name: 'Gramophones',
      consumption: 0.00010524	,
      happiness: 4,
      populationRequirement: 3000,
      iconPath: 'assets/images/goods/Gramophone.png'
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
      iconPath: 'assets/images/goods/Pocket_Watches.png'
    }
  ];

  constructor() {
  }
}
