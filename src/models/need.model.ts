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
