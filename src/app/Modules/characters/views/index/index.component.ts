import { Component } from '@angular/core';
import { CharService } from 'src/app/services/character.service';
import ICharacter from 'src/app/Models/character';
import { take } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  characters: any[] = [];

  constructor(private charService: CharService) { }

  ngOnInit(): void {
    this.getAllCharacters()
  }

  getAllCharacters() {
    this.charService.getCharacters()
      .pipe(take(1))
      .subscribe({
        next: (data: ICharacter[]) => {
          this.characters = data;
        }
      })

  }

}

