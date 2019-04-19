import {Injectable} from '@angular/core';

@Injectable()
export class CalculatorService {

  constructor() {
  }

  public isfullfilled(percentage: number): FullFilledState {
    let state: FullFilledState = {
      color: 'hsl(141, 71%, 48%)',
      value: percentage
    };
    if (percentage > 95) {
      state = {
        color: 'hsl(348, 100%, 61%)',
        value: percentage
      };
    } else if (percentage > 75) {
      state = {
        color: 'hsl(48, 100%, 67%)',
        value: percentage
      };
    }
    return state
  }
}

export interface FullFilledState {
  color: string;
  value: number
}
