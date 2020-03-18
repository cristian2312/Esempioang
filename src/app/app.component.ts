import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Esempioang';

  html='<div>ciao</div>';

  link='https://www.google.it/';

  items =[1,2];
  
  constructor(){
    
  }
}
