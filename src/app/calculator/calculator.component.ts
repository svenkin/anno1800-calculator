import {Component, OnInit} from '@angular/core';
import {WorkforceData} from './side-menu/side-menu.component';
import {FarmerModel} from '../../models/farmer.model';
import {NeedModel} from '../../models/need.model';
import {CalculatorService, FullFilledState} from './calculator.service';
import {WorkerModel} from '../../models/worker.model';
import {ArtisanModel} from '../../models/artisan.model';
import {EngineerModel} from '../../models/engineer.model';
import {InvestorModel} from '../../models/investor.model';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  public consumptionData: Array<any> = [];
  private aggregatedNeeds: any = {};

  constructor(private calculatorService: CalculatorService) {
  }

  ngOnInit() {
    FarmerModel.needs.forEach((need: NeedModel) => {
      this.aggregateNeeds(need, 'farmers');
    });
    WorkerModel.needs.forEach((need: NeedModel) => {
      this.aggregateNeeds(need, 'workers');
    });
    ArtisanModel.needs.forEach((need: NeedModel) => {
      this.aggregateNeeds(need, 'artisans');
    });
    EngineerModel.needs.forEach((need: NeedModel) => {
      this.aggregateNeeds(need, 'engineers');
    });
    InvestorModel.needs.forEach((need: NeedModel) => {
      this.aggregateNeeds(need, 'investors');
    });
    for (let key in this.aggregatedNeeds) {
      if (this.aggregatedNeeds.hasOwnProperty(key)) {
        this.aggregatedNeeds[key].workforce = Object.keys(this.aggregatedNeeds[key].workforce);
      }
    }
  }

  public calculate(data: WorkforceData) {
    this.consumptionData = [];
    for (let key in this.aggregatedNeeds) {
      if (this.aggregatedNeeds.hasOwnProperty(key)) {
        const need = this.aggregatedNeeds[key];
        let consumption = 0;
        need.workforce.forEach((el) => {
          consumption += data[el];
        });
        if (need.consumption && consumption > 0) {
          this.consumptionData.push(this.calculateConsumption(need, consumption));
        }
      }
    }
  }

  private aggregateNeeds(need: NeedModel, workforceType: string) {
    if (this.aggregatedNeeds[need.name]) {
      this.aggregatedNeeds[need.name].workforce[workforceType] = true;
    } else {
      this.aggregatedNeeds[need.name] = {
        ...need,
        workforce: {
          [workforceType]: true
        }
      };
    }
  }

  private calculateConsumption(need: NeedModel, workforce: number) {
    const totalConsumption = need.consumption * workforce;
    const buildingsNeed = Math.ceil(totalConsumption);
    return {
      // normalize to 5 values after comma
      consumption: Math.floor((totalConsumption) * 1000) / 1000,
      name: need.name,
      iconPath: need.iconPath,
      buildingsNeed,
      fulfilled: this.calculatorService.isfullfilled((totalConsumption / buildingsNeed) * 100)
    };
  }
}

export class CalculatedNeed {
  consumption: number;
  name: string;
  iconPath: string;
  buildingsNeed: number;
  fulfilled: FullFilledState;
}
