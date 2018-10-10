import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'itu-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  version = '1.0';
  constructor() { }
  ngOnInit() {}
}
