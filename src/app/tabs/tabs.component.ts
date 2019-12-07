import { Component, OnInit } from '@angular/core';
import { TabType } from '../shared/enums/tab-types.enum';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  public selected: TabType;

  constructor() { }

  ngOnInit() {
    this.selected = 0;
  }

  public setSelected(type: TabType): void {
    this.selected = type;
  }
}
