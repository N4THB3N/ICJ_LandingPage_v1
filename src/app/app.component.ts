import { Component } from '@angular/core';
import { callJsFun } from '../app/scrollfunction.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Iglesia Cristiana Jesucristo';
  ngOnInit():void{
    callJsFun()
  }

}
