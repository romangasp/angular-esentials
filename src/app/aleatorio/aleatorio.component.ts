import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aleatorio',
  templateUrl: './aleatorio.component.html',
  styleUrls: ['./aleatorio.component.sass'],
})
export class AleatorioComponent implements OnInit {
  aleatorio: Number = Math.floor(Math.random() * 100);
  constructor() {}

  ngOnInit(): void {}
}
