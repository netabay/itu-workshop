import { Component } from '@angular/core';
@Component({
  selector: 'itu-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  flipped = true;
  shield = 'url("../../assets/shield.svg")';
  image = '../../../../assets/viking_happy.svg';
  name = 'Happy viking';
}
