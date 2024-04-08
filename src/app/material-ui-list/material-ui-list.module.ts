import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list'; 



const materialList=[
    MatSlideToggleModule,
    MatButtonModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    MatListModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialList
  ],
  exports:[
    materialList
  ]
})
export class MaterialUiListModule { }
