import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {
  @Input() userEmail: String = 'example@example.com';
  @Input() userData = {
    name: 'Username',
    surname: 'UserSurname',
    email: 'example@example.com'
  }


  constructor() { }

  ngOnInit(): void {
  }

}
