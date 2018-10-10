import {Component, OnInit} from '@angular/core';
// @ts-ignore
import {Memorygame} from 'game';

@Component({
  selector: 'itu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  game: Memorygame;
  ngOnInit() {}
}
