import { Component, VERSION,OnInit,ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
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
    this.secHand.nativeElement.style.transform = 'rotate(' + date.getSeconds() * 6 + 'deg)';
    this.minHand.nativeElement.style.transform = 'rotate(' + date.getMinutes() * 6 + 'deg)';
    this.hrHand.nativeElement.style.transform = 'rotate(' + date.getHours() * 30 + (date.getMinutes() * 0.5) + 'deg)';
  }
}

