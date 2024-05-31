import { Component, OnInit } from '@angular/core';
import { BonusService } from './services/bonus.service';
import IWizard from './Models/wizard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  allwizards: IWizard[] = [];

  test = new Array(5)

  constructor(private bonusService: BonusService) { }

  ngOnInit(): void {
    this.bonusService.getAllWizards().subscribe((data) => {
      this.allwizards = data;

    })

  }
}
