import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
    public count = 0;
  
    public incremenet() {
      ++this.count;
    }
  
    public decremenet() {
      --this.count;
    }
}
