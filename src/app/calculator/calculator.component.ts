import {Component, OnInit} from '@angular/core';
import {WorkforceData} from "./side-menu/side-menu.component";
import {FarmerModel} from "../../models/farmer.model";
import {NeedModel} from "../../models/need.model";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  public consumptionData: Array<any> = [];

  constructor() {
  }

  ngOnInit() {
  }

  public calculate(data: WorkforceData) {
    console.log(data);
    this.consumptionData = [];
    FarmerModel.needs.forEach((need: NeedModel) => {
      if (need.consumption) {
        this.consumptionData.push({
          // normalize to 5 values after comma
          consumption: Math.floor((need.consumption * data.farmers) * 100000) / 100000,
          name: need.name,
          iconPath: need.iconPath
        })
      }
    });
    console.log(this.consumptionData)
  }
}
