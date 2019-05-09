import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainTemplateComponentComponent } from './template/main-template-component.component';

const routes: Routes = [
  {path: '', component: MainTemplateComponentComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
