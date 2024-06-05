import { Component, OnInit } from '@angular/core';
import { BonusService } from './services/bonus.service';
import IWizard from './Models/wizard';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  allwizards: Partial<IWizard[]> = [];

  constructor(private bonusService: BonusService) { }

  ngOnInit(): void {
    this.bonusService.getAllWizards()
      .pipe(take(1))
      .subscribe({
        next: (data) => {
          this.allwizards = data;
        }
      })
  }
}
