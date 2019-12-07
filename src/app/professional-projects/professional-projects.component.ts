import { Component, OnInit } from '@angular/core';
import { ProfessionalProjectsData } from './data/professional-projects.data';
import { IProfessionalProject } from '../shared/models/professional-project.interface';

@Component({
  selector: 'app-professional-projects',
  templateUrl: './professional-projects.component.html',
  styleUrls: ['./professional-projects.component.scss']
})
export class ProfessionalProjectsComponent implements OnInit {
  public professionalProjects: IProfessionalProject[];

  constructor() { }

  ngOnInit() {
    this.professionalProjects = ProfessionalProjectsData.ProfessionalProjects;
    console.log(this.professionalProjects);
  }

}
