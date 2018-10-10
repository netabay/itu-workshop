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
}
