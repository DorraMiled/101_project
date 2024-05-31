import { Component, Input, OnInit } from '@angular/core';
import ISpell from 'src/app/Models/spell';

@Component({
  selector: 'app-spell-card',
  templateUrl: './spell-card.component.html',
  styleUrls: ['./spell-card.component.css']
})
export class SpellCardComponent {

  @Input() data: Partial<ISpell> = {};

}
