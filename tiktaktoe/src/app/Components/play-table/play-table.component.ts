import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-table',
  templateUrl: './play-table.component.html',
  styleUrls: ['./play-table.component.css']
})
export class PlayTableComponent implements OnInit {
  players: string[] = ['x', 'o'];

  topleft: string = " ";
  topmid: string = " "
  topright: string = " ";

  constructor() { }

  ngOnInit(): void {
  }

}
