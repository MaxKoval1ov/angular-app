import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { fromEvent, interval } from 'rxjs';
import { map, mergeAll } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'new-project';

  ngOnInit(): void {

    

    const clicks = fromEvent(document, 'click');
    const higherOrder = clicks.pipe(map((ev) => interval(1000)));
    const firstOrder = higherOrder.pipe(mergeAll());
    firstOrder.subscribe(x => console.log(x));
  }



}
