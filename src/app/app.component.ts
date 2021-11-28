import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoslist';
  constructor(){
    //setTimeout(()=>{
    //  this.title = "Changed title";
    //}, 5000);
  }
}
