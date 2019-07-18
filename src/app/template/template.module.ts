import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material';

import { MainTemplateComponentComponent } from './main-template-component.component';
import { ApodTemplateComponent } from './apod-template/apod-template.component';
import { NeowsTemplateComponent } from './neows-template/neows-template.component';
import { FiltersTemplateComponent } from './filters-template/filters-template.component';
import { TableTemplateComponent } from './table-template/table-template.component';
import { DonkiTemplateComponent } from './donki-template/donki-template.component';
import { HeaderTemplateComponent } from './header-template/header-template.component';
import { FooterTemplateComponent } from './footer-template/footer-template.component';

@NgModule({
  declarations: [
    MainTemplateComponentComponent,
    ApodTemplateComponent,
    NeowsTemplateComponent,
    DonkiTemplateComponent,
    FiltersTemplateComponent,
    TableTemplateComponent,
    HeaderTemplateComponent,
    FooterTemplateComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MatTableModule
  ]
})
export class TemplateModule { }
