import { MaterialModule } from './../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortComponent } from './sort.component';



@NgModule({
  declarations: [SortComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    SortComponent
  ]
})
export class SortModule { }
