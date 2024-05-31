import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpellIndexComponent } from './views/spellindex/spellindex.component';
import { SpellCardComponent } from './components/spell-card/spell-card.component';
import { SpellRoutingModule } from './spell-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    SpellIndexComponent,
    SpellCardComponent
  ],
  imports: [
    CommonModule,
    //custom imports
    SpellRoutingModule,
  ],

})
export class SpellModule { }
