import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {
  @Input() data: any;

  constructor() {
  }

  ngOnInit() {
  }

}
