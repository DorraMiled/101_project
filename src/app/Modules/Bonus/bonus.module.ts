import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormbonusComponent } from './views/formbonus/formbonus.component';
import { BonusindexComponent } from './views/bonusindex/bonusindex.component';
import { BonusRoutingModule } from './bonus-routing.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    BonusindexComponent,
    FormbonusComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BonusRoutingModule
  ]
})
export class BonusModule { }
