import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'itu-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  // Solution: app.component.ts - Add 'version' property and assign to '1.0'
  version = '1.0';
  constructor() { }
  ngOnInit() {}
}
