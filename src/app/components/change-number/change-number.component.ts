import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css']
})
export class ChangeNumberComponent implements OnInit {

  @Output() numberChanged = new EventEmitter<number>();

  handleClick() {
    this.numberChanged.emit(Math.floor(Math.random() * 100));
  }

  constructor() { }

  ngOnInit(): void {
  }

}
