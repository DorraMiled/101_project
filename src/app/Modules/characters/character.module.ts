import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './characters-routing.module';

import { IndexComponent } from './views/index/index.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';



@NgModule({
  declarations: [
    CharacterCardComponent,
    IndexComponent,

  ],
  imports: [
    CommonModule,
    CharacterRoutingModule
  ]

})
export class CharacterModule { }
