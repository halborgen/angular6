import { Component } from '@angular/core';

@Component({ // decorator
  selector: 'app-root', //<- tag in index.html
  templateUrl: './app.component.html', // view-template for component
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'my portfolio'; // class property type string
}
