import { Component, OnInit } from '@angular/core';
import { CharService } from 'src/app/services/character.service'
import ICharacter from 'src/app/Models/character'

@Component({
  selector: 'app-root',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: ICharacter[] = [];

  constructor(private charService: CharService) { }

  ngOnInit(): void {
    this.charService.getCharacters().subscribe((data: ICharacter[]) => {
      this.characters = data;
    });
  }
}
