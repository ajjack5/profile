import { Component, OnInit } from '@angular/core';
import { IProject } from '../shared/models/project.interface';
import { ProjectsData } from './data/projects.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public projects: IProject[];

  constructor() { }

  ngOnInit() {
    this.projects = ProjectsData.Projects;
  }

}
