import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainTemplateComponentComponent } from './main-template-component.component';
import { ApodTemplateComponent } from './apod-template/apod-template.component';

@NgModule({
  declarations: [
    MainTemplateComponentComponent,
    ApodTemplateComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TemplateModule { }
