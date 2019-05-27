import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { InfrastructureApiService } from '../services/infrastructure-api.service';
import UrlDict from './../services/domainUrlDict.json';

@Component({
  selector: 'app-main-template-component',
  templateUrl: './main-template-component.component.html',
  styleUrls: ['./main-template-component.component.css']
})
export class MainTemplateComponentComponent implements OnInit {

  baseServiceNameList: Array<string>;
  columnDefs: Array<string>;
  rowData: object;
  table: string;

  constructor(public infrastructureApi: InfrastructureApiService, private http: HttpClient) {
    this.table = '';
    this.baseServiceNameList = Object.keys(UrlDict);
  }

  demoTable(columnDefs: Array<string>, rowData: object): string {
    let table: string = '';
    table = table.concat('<table class="table table-striped table-bordered table-hover">');
    table = table.concat('<thead class="thead-dark"><tr>');
    for (const header of columnDefs) {
      table = table.concat(`<th scope="col">${header}</th>`);
    }
    table = table.concat('</tr></thead>');
    for (const header of columnDefs) {
      console.log(typeof(rowData[header]) === 'object');
      if (typeof(rowData[header]) === 'object') {
        table = table.concat(`<td>${this.demoTable(Object.keys(rowData[header]), rowData[header])}</td>`);
      }
      table = table.concat(`<td>${rowData[header]}</td>`);
    }
    table = table.concat('</table>');
    return table;
  }

   ngOnInit() {
  }
}
