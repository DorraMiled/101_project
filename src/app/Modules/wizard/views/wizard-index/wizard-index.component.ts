import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import IWizard from 'src/app/Models/wizard';
import { BonusService } from 'src/app/services/bonus.service';


@Component({
  selector: 'app-wizard-index',
  templateUrl: './wizard-index.component.html',
  styleUrls: ['./wizard-index.component.css']
})
export class WizardIndexComponent implements OnInit {
  allwizards: Partial<IWizard[]> = [];
  allwizards$!: Observable<any>;


  constructor(
    private bonusService: BonusService,
  ) { }



  ngOnInit(): void {

    this.allwizards$ = this.bonusService.getAllWizards();



    // this.bonusService.getAllWizards()
    //   .subscribe({
    //     next: (data: Partial<IWizard[]>) => {

    //       this.allwizards = data;
    //     }
    //   });

  }

}








