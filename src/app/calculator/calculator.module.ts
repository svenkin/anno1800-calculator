import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalculatorComponent} from './calculator.component';
import {RouterModule} from "@angular/router";
import {calculatorRoutes} from "./calculator.routes";
import {SideMenuComponent} from "./side-menu/side-menu.component";
import {FormsModule} from "@angular/forms";
import {GoodsComponent} from './goods/goods.component';
import {CalculatorService} from "./calculator.service";
import { RequiredWorkforceComponent } from './required-workforce/required-workforce.component';

@NgModule({
  declarations: [
    CalculatorComponent,
    SideMenuComponent,
    GoodsComponent,
    RequiredWorkforceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(calculatorRoutes),
    FormsModule
  ],
  providers: [
    CalculatorService
  ],
  exports: [RouterModule]
})
export class CalculatorModule {
}
