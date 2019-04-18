import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  public workforce: WorkforceData = {
    farmers: 0,
    workers: 0,
    artisans: 0,
    engineers: 0,
    investors: 0
  };
  @Output() workforceUpdate = new EventEmitter();
  @ViewChild(NgForm) ngForm: NgForm;

  constructor() {
  }

  ngOnInit() {
    this.ngForm.valueChanges.subscribe(() => {
      this.workforceUpdate.emit(this.workforce);
    })
  }
}

export interface WorkforceData {
  farmers: number;
  workers: number;
  artisans: number;
  engineers: number;
  investors: number;
}
