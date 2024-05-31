import { Component, Input, OnInit } from '@angular/core';
import IWand from 'src/app/Models/character';
import ICharacter from 'src/app/Models/character';
import { CharService } from 'src/app/services/character.service'

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent {
  @Input() data: Partial<ICharacter> = {};
}
