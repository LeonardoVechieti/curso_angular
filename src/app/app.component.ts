import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email: String = 'leonardo.vechieti@gmail.com';
  userData = {
    name: 'Leonardo',
    surname: 'Vechieti',
    email: 'leonardo.vechieti@gmail.com'
  }

  title = 'teoria';
}
