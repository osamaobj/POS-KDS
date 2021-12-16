import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalfunctionService } from 'src/Shared/Services/FrontServices/globalfunction.service';
import { GoogleAnalyticsService } from 'src/Shared/Services/FrontServices/google-analytics.service';
import * as myGlobals from 'src/Shared/global_var';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    public _items: any;
    public _allitems: any;
    url = "https://jsonplaceholder.typicode.com/posts";


    constructor(public _http: HttpClient, private _Global: GlobalfunctionService, private _GA: GoogleAnalyticsService) { }

    // setData(data: any, pactive?: any) {
    //     try {
    //         if (pactive === undefined || pactive === null) {
    //             pactive = true;
    //         }
    //         this._items = data;
    //         this._items = this._Global.sort(this._items);
    //         this._allitems = this._items;
    //         if (pactive !== '-1') {
    //             this._items = this._items.filter((item: { active: { toString: () => any; }; }) => item.active.toString() === pactive.toString());
    //         }
    //     } catch (X) { }
    // }
    // LoadData(pactive?: any, api?: any) {
    //     // debugger 
    //     try {
    //         if (pactive === undefined || pactive === null) {
    //             pactive = true;
    //         }
    //         this._http.get(myGlobals._apiPathv2 + 'auth/apikey/' + api )
    //             .subscribe(data => {
    //                 this._items = <any>data;
    //                 // debugger
    //                 this.setData(this._items, pactive);

    //             }, 
    //                 error => {
    //                 });
    //     } catch (x) { }
    // }
    GetAll(pactive?: any): any {
        return this._http.get(this.url);

    }
    // }
}
