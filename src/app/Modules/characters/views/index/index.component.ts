import { Component } from '@angular/core';
import { CharService } from 'src/app/services/character.service';
import ICharacter from 'src/app/Models/character';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  characters: ICharacter[] = [];


  constructor(private charService: CharService) { }

  ngOnInit(): void {
    this.charService.getCharacters()
      .subscribe((data: ICharacter[]) => {
        this.characters = data;
      });


  }

}

