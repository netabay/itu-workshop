import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Card} from "./card";
@Component({
  selector: 'itu-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  shield = 'url("../../assets/shield.svg")';
  @Input() card: Card;
  // Solution: card.component.ts - Add new event emitter 'select' (output)
  @Output() select = new EventEmitter();

  onClick() {
    if (this.card.flipped) {
      return;
    }
    // Solution: card.component.ts - Emit 'select' with card as payload
    this.select.emit(this.card);
  }
}
