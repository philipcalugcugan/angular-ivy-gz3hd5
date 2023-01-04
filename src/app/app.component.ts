import { Component, VERSION } from '@angular/core';
import { IisLocationService } from '@service/iis-location-service/iis-location-service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
