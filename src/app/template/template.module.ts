import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainTemplateComponentComponent } from './main-template-component.component';
import { ApodTemplateComponent } from './apod-template/apod-template.component';
import { NeowsTemplateComponent } from './neows-template/neows-template.component';

@NgModule({
  declarations: [
    MainTemplateComponentComponent,
    ApodTemplateComponent,
    NeowsTemplateComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TemplateModule { }
