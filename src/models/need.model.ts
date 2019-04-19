export class NeedModel {
  /**
   * Nae of the need
   */
  name: string;
  /**
   * Consumption rate for one person
   */
  consumption?: number;
  /**
   * People who move into the house, when fulfilled
   */
  influx?: number;
  /**
   * happiness gained when fulfilled
   */
  happiness?: number;
  /**
   * Income gained (steps depending on how many % the need is fulfilled)
   */
  income?: Array<number>;
  /**
   * Population needed to access the need
   */
  populationRequirement?: number;
  /**
   * path to the icon
   */
  iconPath?: string;
}
// TODO use constants for needs
export class Need {
  public readonly FISH: NeedModel = {
    name: 'Fish',
    consumption: 0.0025000002,
    influx: 3,
    income: [1, 1],
    populationRequirement: 50,
    iconPath: 'assets/images/goods/Fish.png'
  };
  public readonly WORK_CLOTHES: NeedModel = {
    name: 'Work Clothes',
    consumption: 0.003076926,
    influx: 3,
    income: [4, 3],
    populationRequirement: 150,
    iconPath: 'assets/images/goods/Work_clothes.png'
  };
  public readonly SCHNAPPS: NeedModel = {
    name: 'Schnapps',
    consumption: 0.003333336,
    income: [1, 1],
    populationRequirement: 100,
    iconPath: 'assets/images/goods/Schnapps.png'
  };
}
