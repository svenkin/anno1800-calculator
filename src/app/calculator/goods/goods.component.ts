import {Component, Input, OnInit} from '@angular/core';
import {CalculatedNeed} from '../calculator.component';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {
  @Input() data: CalculatedNeed;

  constructor() {
  }

  ngOnInit() {
  }

}
