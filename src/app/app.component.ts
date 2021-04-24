import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HolaMundo';
  presentacion = "";
  download = "";
  textSearch= "";

  constructor(){
    setInterval(() => this.presentacion = "Hi, my name is Juan Cruz", 2000);
    setInterval(() => this.download = "Download CV Juan Cruz Izaurralde", 3000);
  }
  downloadCV(){
    this.download = "downloading";
  }
}
