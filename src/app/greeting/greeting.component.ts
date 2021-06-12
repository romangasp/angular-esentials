import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.sass'],
})
export class GreetingComponent implements OnInit {
  @Input() colorNombre: string;
  constructor() {
    this.colorNombre = '';
  }

  ngOnInit(): void {}
}
