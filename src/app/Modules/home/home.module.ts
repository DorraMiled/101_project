import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeindexComponent } from './homeindex/homeindex.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    HomeindexComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
