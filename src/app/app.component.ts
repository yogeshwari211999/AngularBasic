import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'practice';
  chidData:string | undefined;

  receiveDataFromChild(data:string){
    this.chidData=data;
    console.log("received data fromchild",data)
  }
}
