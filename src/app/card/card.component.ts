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

  // Exercise: Pass data into card component and use it in the template
  // card.component.ts - Add input for card with an interface corresponding to the deck items
  // card.component.ts - Remove unused properties - image and name
  // card.component.html - replace name and image with the passed in data
  // app.html - pass in data as "card" using property binding at itu-card
}
