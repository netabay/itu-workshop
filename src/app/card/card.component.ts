import {Component, Input} from '@angular/core';
import {Card} from "./card";
@Component({
  selector: 'itu-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  shield = 'url("../../assets/shield.svg")';
  @Input() card: Card;
}
