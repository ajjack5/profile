import { Component, OnInit } from '@angular/core';
import { ParticleSettings } from './models/particle-settings';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public particleStyles: object = {};
  public particleParams: object = {};

  constructor() { }

  ngOnInit() {
    this.particleStyles = ParticleSettings.Style
    this.particleParams = ParticleSettings.Params
  }

}
