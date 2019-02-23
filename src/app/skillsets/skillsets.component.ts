import { Component, OnInit } from '@angular/core';
import { ISkillGroups } from '../projects/models/skill-groups.interface';
import { SkillGroupsData } from '../projects/data/skill-groups.data';

@Component({
  selector: 'app-skillsets',
  templateUrl: './skillsets.component.html',
  styleUrls: ['./skillsets.component.scss']
})
export class SkillsetsComponent implements OnInit {
  public skillGroups: ISkillGroups[];

  constructor() { }

  ngOnInit() {
    this.skillGroups = SkillGroupsData.SkillGroups;
  }

}
