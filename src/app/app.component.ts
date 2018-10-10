import {Component, OnInit} from '@angular/core';
import {Memorygame} from "../../projects/game/src/lib/game";

@Component({
  selector: 'itu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  game: Memorygame;
  ngOnInit() {}
}
