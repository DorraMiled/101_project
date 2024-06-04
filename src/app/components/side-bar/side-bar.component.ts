import { Component } from '@angular/core';
import INavigationItems from 'src/app/types/type';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  protected navigationItems: INavigationItems[] = [
    { label: 'Home', route: '/', icon: "home" },
    { label: 'Characters', route: 'characters', icon: "characters", },
    { label: 'Spells', route: 'spells', icon: "spells" },
    { label: 'Bonus', route: 'wizards', icon: "bonus" },
  ];

}
