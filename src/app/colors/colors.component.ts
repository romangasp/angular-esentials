import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.sass'],
})
export class ColorsComponent implements OnInit {
  colorLocal: string;
  constructor() {
    this.colorLocal = '';
  }

  ngOnInit(): void {}

  generarRandom(): string {
    return Math.floor(Math.random() * 255).toString(16);
  }

  colorHex(): String {
    this.colorLocal =
      '#' + this.generarRandom() + this.generarRandom() + this.generarRandom();
    return this.colorLocal;
  }
}
