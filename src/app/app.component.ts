import { Component, OnInit, VERSION } from '@angular/core';
import { IisLocationData } from '../interface/iis-location-data';
import { IisLocationService } from '../service/iis-location-service/iis-location.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  actionName: string;
  isStarted: boolean;
  timeInterval: number;
  iisLocationList: IisLocationData[];
  timer = null;

  constructor(private iisLocationService: IisLocationService) {}

  /**
   * On Initialize
   */
  ngOnInit() {
    this.actionName = 'Start';
    this.isStarted = false;
    this.timeInterval = 0;
    this.iisLocationList = [];
  }

  /**
   * Trigger this method when Start/Stop button is clicked
   */
  public clickAction() {
    if (this.isStarted) {
      this.actionName = 'Start';
      this.isStarted = false;
      this.stopTimer();
    } else {
      this.actionName = 'Stop';
      this.isStarted = true;
      this.startTimer();
    }
  }

  /**
   * Start Timer
   */
  public startTimer() {
    if (this.timeInterval > 0) {
      this.timer = setInterval(() => {
        // Call the service to get the IIS Location now
        this.iisLocationService.getIisLocation().subscribe((res) => {
          if (res) {
            let iisLocationData: IisLocationData = {
              date: new Date().toISOString(),
              altitude: res.altitude.toFixed(2),
              velocity: res.velocity.toFixed(2),
              daynum: res.daynum.toFixed(2),
            };
            this.iisLocationList.push(iisLocationData);
          }
        });
      }, this.timeInterval * 1000);
    }
  }

  /**
   * Stop Timer
   */
  public stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
}
