import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit {

  number: number = 0;

  handleNumberChanged(value: number) {
    this.number = value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
