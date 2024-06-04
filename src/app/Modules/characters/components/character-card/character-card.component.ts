import { Component, Input } from '@angular/core';
import ICharacter from 'src/app/Models/character';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent {
  @Input() data: Partial<ICharacter> = {};
}
