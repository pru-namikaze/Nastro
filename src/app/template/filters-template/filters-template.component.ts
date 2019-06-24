import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

import DescDict from '../../services/domainDescDict.json';
import { InfrastructureApiService } from 'src/app/services/infrastructure-api.service';

import { ApodTemplateComponent } from '../apod-template/apod-template.component'

@Component({
  selector: 'app-filters-template',
  templateUrl: './filters-template.component.html',
  styleUrls: ['./filters-template.component.css']
})
export class FiltersTemplateComponent implements OnInit {

  DescDict: any;

  constructor(
    public infrastructureApi: InfrastructureApiService,
    public ApodTemplate: ApodTemplateComponent
    ) {
    this.DescDict = DescDict;

  }

  ngOnInit() {
  }

}
