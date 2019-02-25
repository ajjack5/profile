import { Component, OnInit } from '@angular/core';
import { IProjects } from './models/projects.model';
import { ProjectsData } from './data/projects.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public projects: IProjects[];

  constructor() { }

  ngOnInit() {
    this.projects = ProjectsData.Projects;
  }

}
