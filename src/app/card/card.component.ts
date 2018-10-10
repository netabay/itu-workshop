import {Component, Input} from '@angular/core';
import {Card} from "./card";
@Component({
  selector: 'itu-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  shield = 'url("../../assets/shield.svg")';
  // Solution: card.component.ts - Add input for card with an interface corresponding to the deck items
  // Solution: card.component.ts - Remove unused properties - image and name
  @Input() card: Card;

  onClick() {
    if (this.card.flipped) {
      return;
    }
    // Exercise: Add event emitter (output) to emit when the card is selected
    // app.component.html - Pass down 'selectCard' method by 'select' (output)
    // card.component.ts - Add new event emitter 'select' (output)
    // card.component.ts - Emit 'select' with card as payload
    // card.component.html - Add click event and call onClick() method to emit event
  }
}
