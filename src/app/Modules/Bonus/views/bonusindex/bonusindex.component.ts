import { Component, OnInit } from '@angular/core';
import IWizard from 'src/app/Models/wizard';
import { BonusService } from 'src/app/services/bonus.service';

@Component({
  selector: 'app-bonusindex',
  templateUrl: './bonusindex.component.html',
  styleUrls: ['./bonusindex.component.css']
})
export class BonusindexComponent implements OnInit {
  allwizards: IWizard[] = [];

  test = new Array(5)

  constructor(private bonusService: BonusService) { }

  ngOnInit(): void {
    this.bonusService.getAllWizards().subscribe((data) => {
      this.allwizards = data;

    })

  }

}
