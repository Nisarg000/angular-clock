import { Component, VERSION,OnInit,ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  @ViewChild('hrHand',{static:false}) hrHand:ElementRef;
  @ViewChild('minHand',{static:false}) minHand:ElementRef;
  @ViewChild('secHand',{static:false}) secHand:ElementRef;

  ngonInit()
  {
    setInterval(() =>
    {
      const date = new Date();
      this.updateClock(date);
      },1000);
  }
  updateClock(date)
  {
    
  }
}

