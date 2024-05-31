import { Component } from '@angular/core';
import ISpell from 'src/app/Models/spell';
import { SpellService } from 'src/app/services/spell.service';

@Component({
  selector: 'app-spell-index',
  templateUrl: './spellindex.component.html',
  styleUrls: ['./spellindex.component.css']
})
export class SpellIndexComponent {
  spells: ISpell[] = [];


  constructor(
    private spellService: SpellService
  ) { }

  ngOnInit(): void {
    this.spellService.getSpells()
      .subscribe((data: ISpell[]) => {
        this.spells = data;
      });


  }

}
