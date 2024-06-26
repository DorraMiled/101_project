import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import IWand from 'src/app/Models/wizard';
import IWizard from 'src/app/Models/wizard';
import { BonusService } from 'src/app/services/bonus.service';

@Component({
  selector: 'app-wizard-index',
  templateUrl: './wizard-index.component.html',
  styleUrls: ['./wizard-index.component.css']
})
export class WizardIndexComponent implements OnInit {
  allwizards: IWizard[] = [];




  constructor(private bonusService: BonusService) { }

  ngOnInit(): void {
    this.bonusService.getAllWizards().subscribe((data) => {
      this.allwizards = data;
      console.log(this.allwizards);

    });

  }

  getallwands(wands: IWand[]): number {
    console.log(wands)
    if (!wands || !Array.isArray(wands)) {
      return 0;
    }

    return wands.length;

  }



}








