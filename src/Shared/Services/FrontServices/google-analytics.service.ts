import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { GlobalfunctionService } from './globalfunction.service';

declare let ga: Function; // Declare ga as a function

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  constructor(public _global: GlobalfunctionService,) {

  }
  // eventlog(
  //   eventCategory: string,
  //   eventLabel: string,
  //   eventAction: string,
  //   eventValue?: number) {
  //   this.track(eventCategory, eventLabel, eventAction);
  //   this.eventEmitter(eventCategory, eventLabel, eventAction);
  // }
  // //mixpanel analytics
  // track(id: string, action: string, source: string): void {
  //   //receive data as a  string and convert into json
  //   mixpanel.track(id, { "action": action, "source": source });
  // }




  //mixpanel analytics
  track(source: string, action: any): void {
  }
  identify() {
    // mixpanel.identify(this._global.loginuserid);
  }
  // identify(_loginuserid: string) {
  //   mixpanel.identify(_loginuserid);
  // }

  // create our event emitter to send our data to Google Analytics
  public eventEmitter(eventCategory: string,
    eventAction: string,) {
    ga('send', 'event', {
      eventCategory: eventCategory,
      eventAction: eventAction,
    });

  }
}
