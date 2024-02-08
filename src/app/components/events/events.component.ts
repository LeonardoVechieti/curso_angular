import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  show: boolean = true;

  

  constructor() { }

  ngOnInit(): void {
  }

  showMessages(): void {
    this.show = !this.show;
  }
}
