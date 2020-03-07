import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //Here we have some variables we are gonna use
  title = 'Fake title because this is one is going to be changed';
  authors = 'Mario y Enrique';

  constructor(){
    this.title = 'M&E Checklist '; //This is load before painting the web so we can make some changes 
    console.log(123);
  }

  changeName(name:string):void{ //We can define functions like this
    this.title = 'Car-Checklist using a function'; 
  }
}
