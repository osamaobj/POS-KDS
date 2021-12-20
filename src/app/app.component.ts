import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppService } from './app.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public _items: any;
  _showspinner: boolean;
  test: Date = new Date();

  constructor(public _AppService: AppService, private spinner: NgxSpinnerService) {
    this._showspinner = false;
  }

  title = 'KitchenDisplayScreen';


  syncButton = false;


  enableButton2() {

    var input = (<HTMLInputElement>document.getElementById("apikey_id")).value;;
    alert(input);

    this._AppService.GetAll().subscribe((data: any) => {
      this._items = <any>data;
      debugger

      console.log("Random Data: ", this._items);
    });
    this.syncButton = !this.syncButton;

    input = '';
  }
}
