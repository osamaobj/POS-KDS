import { Injectable, OnInit } from '@angular/core';

import { HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';
// import { CompanyOutletFlagSetting } from '@sharedmodels/BackModels/POS/Location/companyOutletFlagSetting';
@Injectable({
    providedIn: 'root'
})
export class GlobalfunctionService implements OnInit {

    //   public isFreeTier: boolean = false;

    //   isPaymentMethodSelected: boolean = false



    //   private _IsReady!: boolean;

    //   public get IsReady(): boolean {
    //     return this._IsReady;

    //   }
    //   public set IsReady(v: boolean) {
    //     this._IsReady = v;
    //     if (v == false) {
    //       this.spinner.show();
    //     }
    //     if (v == true) {
    //       this.spinner.hide();
    //     }
    //   }

    //   private _ShownError!: string;
    //   public get ShownError(): string {
    //     return this._ShownError;
    //   }
    //   public set ShownError(v: string) {
    //     this._ShownError = v;
    //   }
    //   private _IsHandleError!: boolean;
    //   public get IsHandleError(): boolean {
    //     return this._IsHandleError;
    //   }
    //   public set IsHandleError(v: boolean) {
    //     this._IsHandleError = v;
    //   }
    //   private _pincode!: string;
    //   public get pincode(): string {
    //     return this._pincode;
    //   }
    //   public set pincode(v: string) {
    //     this._pincode = v;
    //   }
    //   private _loginName!: string;
    //   public get loginName(): string {
    //     return this._loginName;
    //   }
    //   public set loginName(v: string) {
    //     this._loginName = v;
    //   }
    //   private _email!: string;
    //   public get email(): string {
    //     return this._email;
    //   }
    //   public set email(v: string) {
    //     this._email = v;
    //   }
    //   private _loginkey!: string;
    //   public get loginkey(): string {
    //     return this._loginkey;
    //   }
    //   public set loginkey(v: string) {
    //     this._loginkey = v;
    //   }


    //   // private _companyoutletflagSettings: CompanyOutletFlagSetting[];
    //   // public get companyoutletflagSettings(): CompanyOutletFlagSetting[] {
    //   //   return this._companyoutletflagSettings;
    //   // }
    //   // public set companyoutletflagSettings(v: CompanyOutletFlagSetting[]) {
    //   //   this._companyoutletflagSettings = v;
    //   // }

    //   private _loginuserid!: number;
    //   public get loginuserid(): number {
    //     return this._loginuserid;
    //   }
    //   public set loginuserid(v: number) {
    //     this._loginuserid = v;
    //   }

      private _httpOptions!: HttpHeaders;
      public get httpOptions(): HttpHeaders {
        return this._httpOptions;
      }
      public set httpOptions(v: HttpHeaders) {
        this._httpOptions = v;
      }
    //   private _auth_token: string;
    //   public get auth_token(): string {
    //     return this._auth_token;
    //   }
    //   public set auth_token(v: string) {
    //     this._auth_token = v;
    //   }
    //   private _refreshToken: string;
    //   public get refreshToken(): string {
    //     return this._refreshToken;
    //   }
    //   public set refreshToken(v: string) {
    //     this._refreshToken = v;
    //   }
    //   private _CompanyID: number;

    //   public get CompanyID(): number {
    //     return this._CompanyID;
    //   }
    //   public set CompanyID(v: number) {
    //     this._CompanyID = v;
    //   }
    //   private _Company: Company;

    //   public get Company(): Company {
    //     return this._Company;
    //   }
    //   public set Company(v: Company) {
    //     this._Company = v;
    //   }

    //   // to do kaleem start
    //   private _CompanyoutletID: number;

    //   public get CompanyOutletID(): number {
    //     return this._CompanyoutletID;
    //   }
    //   public set CompanyOutletID(v: number) {
    //     this._CompanyoutletID = v;
    //   }
    //   private _Companyoutlet: CompanyOutlet;

    //   public get CompanyOutlet(): CompanyOutlet {
    //     return this._Companyoutlet;
    //   }
    //   public set CompanyOutlet(v: CompanyOutlet) {
    //     this._Companyoutlet = v;
    //   }
    //   private _userID: number;
    //   public get userID(): number {
    //     return this._userID;
    //   }
    //   public set userID(v: number) {
    //     this._userID = v;
    //   }

    //   // to do kaleem end
    //   private _Screen: string;
    //   public get Screen(): string {
    //     return this._Screen;
    //   }
    //   public set Screen(v: string) {
    //     this._Screen = v;
    //   }

    //   private _dashBoardURL: string;
    //   public get dashBoardURL(): string {
    //     return this._dashBoardURL;
    //   }
    //   public set dashBoardURL(v: string) {
    //     this._dashBoardURL = v;
    //   }
    //   private _loginuser: Users;
    //   public get loginuser(): Users {
    //     return this._loginuser;
    //   }
    //   public set loginuser(v: Users) {
    //     this._loginuser = v;
    //   }
    //   private _isCompanyAdmin: boolean;
    //   public get isCompanyAdmin(): boolean {
    //     return this._isCompanyAdmin;
    //   }
    //   public set isCompanyAdmin(v: boolean) {
    //     this._isCompanyAdmin = v;
    //   }
    //   private _isCompanyTaxInclusive: boolean;
    //   public get isCompanyTaxInclusive(): boolean {
    //     return this._isCompanyTaxInclusive;
    //   }
    //   public set isCompanyTaxInclusive(v: boolean) {
    //     this._isCompanyTaxInclusive = v;
    //   }

    //   private _CompanyCurrency: string;
    //   public get CompanyCurrency(): string {
    //     return this._CompanyCurrency;
    //   }
    //   public set CompanyCurrency(v: string) {
    //     this._CompanyCurrency = v;
    //   }
    //   private _S3foldername: string;
    //   public get S3foldername(): string {
    //     return this._S3foldername;
    //   }
    //   public set S3foldername(v: string) {
    //     this._S3foldername = v;
    //   }

    //   private _Messages: Message[] = [
    //     { MessageKey: 'LoadSucc', MessageDesc: 'Loading Successfuly', ActionDesc: '', Type: 2, DispalyStyle: 0 },
    //     { MessageKey: 'LoadErr', MessageDesc: 'Loading Failed', ActionDesc: '', Type: 0, DispalyStyle: 0 },
    //     { MessageKey: 'DataErr', MessageDesc: 'Data not found', ActionDesc: '', Type: 0, DispalyStyle: 0 },
    //     { MessageKey: 'SaveSucc', MessageDesc: 'Save Successfuly', ActionDesc: '', Type: 2, DispalyStyle: 0 },
    //     { MessageKey: 'SaveErr', MessageDesc: 'Error while saving', ActionDesc: '', Type: 0, DispalyStyle: 0 },
    //     { MessageKey: 'ValidErr', MessageDesc: '', ActionDesc: '', Type: 0, DispalyStyle: 0 },
    //     { MessageKey: '', MessageDesc: '', ActionDesc: '', Type: 0, DispalyStyle: 0 },
    //     { MessageKey: '403', MessageDesc: 'You are not authorized to perform this operation', ActionDesc: '', Type: 0, DispalyStyle: 0 },
    //     { MessageKey: '401', MessageDesc: 'You are not authorized ', ActionDesc: '', Type: 0, DispalyStyle: 0 },

    //   ];



    //   private _Displayproduct: boolean;
    //   public get Displayproduct(): boolean {
    //     return this._Displayproduct;
    //   }
    //   public set Displayproduct(v: boolean) {
    //     this._Displayproduct = v;
    //   }

    //   private _Displaydeal: boolean;
    //   public get Displaydeal(): boolean {
    //     return this._Displaydeal;
    //   }
    //   public set Displaydeal(v: boolean) {
    //     this._Displaydeal = v;
    //   }
    //   private _DayEndStarted: boolean;
    //   public get DayEndStarted(): boolean {
    //     return this._DayEndStarted;
    //   }
    //   public set DayEndStarted(v: boolean) {
    //     this._DayEndStarted = v;
    //   }

    public ngOnInit() {
        // this._pincode = '';
        // this._Displayproduct = false;
        // this._Displaydeal = false;
        // this._loginName = '';
        // this._loginkey = '';
        // this._companyflagSettings = [];
        // // this._companyoutletflagSettings = [];
        // this._auth_token = '';
        // this._CompanyCurrency = 'PKR';
        // this._CompanyID = 0;
        // this._CompanyoutletID = 0;
        // this._Companyoutlet = null;
        // this._dashBoardURL = '';
        // this._isCompanyAdmin = false;
        // this._loginuser = null;
        // this.isCompanyTaxInclusive = false;
        // this._S3foldername = '';
        // this._Screen = '';
        // this._IsReady = true;
        // this._IsHandleError = true;
        // this._ShownError = '';
        // this._httpOptions = null;
        // this._refreshToken = '';
        // this._eventCategory = 'Pegasus Dashboard';
        // this._tokenexpires = null;
        // this._tokenexpireslocal = null;
        // this._DayEndStarted = false;

    }

    //   clean(obj) {
    //     for (const propName in obj) {
    //       if (obj[propName] === null || obj[propName] === undefined) {
    //         delete obj[propName];
    //       }
    //     }
    //   }

    //   // showLoader() {
    //   //   this.IsReady = false;
    //   //   return this.spinner.show();
    //   // }

    //   // hideLoader() {
    //   //   this.IsReady = true;
    //   //   return this.spinner.hide();
    //   // }

    //   showconfirmMsg(msg: string): boolean {
    //     this.IsReady = true;
    //     return this._SweetAlertComponent.showSwal('confirmation', msg, msg);
    //     // return JSON.stringify(errMsg);
    //   }
    //   showSuccessMsg(msg: string) {
    //     this.IsReady = true;
    //     this._SweetAlertComponent.showSwal('success-message', 'Done', msg);
    //     // return JSON.stringify(errMsg);
    //   }
    //   showErrorMsg(msg: string) {
    //     this.IsReady = true;
    //     this._SweetAlertComponent.showSwal('title-and-text', 'Error', msg);
    //     // return JSON.stringify(errMsg);
    //   }
    //   sortDealPrice(_sorted: DealPrice[], direction: string): DealPrice[] {
    //     try {
    //       _sorted = _sorted.slice(0);
    //       if (direction.toLowerCase() === 'desc') {
    //         _sorted.sort((ls, rs): number => {
    //           if (ls.dealPriceID < rs.dealPriceID) { return 1; }
    //           if (ls.dealPriceID > rs.dealPriceID) { return -1; }
    //         });
    //       } else {
    //         _sorted.sort((ls, rs): number => {
    //           if (ls.dealPriceID > rs.dealPriceID) { return 1; }
    //           if (ls.dealPriceID < rs.dealPriceID) { return -1; }
    //         });
    //       }
    //       return _sorted;
    //     } catch (Error) {
    //       return _sorted;
    //     }
    //   }
    //   sortDealAddPrice(_sorted: DealRuleMaterialAddPrice[], direction: string): DealRuleMaterialAddPrice[] {
    //     try {
    //       _sorted = _sorted.slice(0);
    //       if (direction.toLowerCase() === 'desc') {
    //         _sorted.sort((ls, rs): number => {
    //           if (ls.dealRuleMaterialAddPriceID < rs.dealRuleMaterialAddPriceID) { return 1; }
    //           if (ls.dealRuleMaterialAddPriceID > rs.dealRuleMaterialAddPriceID) { return -1; }
    //         });
    //       } else {
    //         _sorted.sort((ls, rs): number => {
    //           if (ls.dealRuleMaterialAddPriceID > rs.dealRuleMaterialAddPriceID) { return 1; }
    //           if (ls.dealRuleMaterialAddPriceID < rs.dealRuleMaterialAddPriceID) { return -1; }
    //         });
    //       }
    //       return _sorted;
    //     } catch (Error) {
    //       return _sorted;
    //     }
    //   }
    //   sortCustomerAdressID(_sorted: CustomerAddress[]): CustomerAddress[] {
    //     try {

    //       _sorted = _sorted.slice(0);
    //       _sorted.sort((ls, rs): number => {
    //         if (ls.customerAddressID < rs.customerAddressID) { return 1; }
    //         if (ls.customerAddressID > rs.customerAddressID) { return -1; }
    //       });
    //       return _sorted;
    //     } catch (e) {

    //       return _sorted;
    //     }
    //   }
    //   sortCart(_sorted: Cart[]): Cart[] {
    //     try {
    //       _sorted = _sorted.slice(0);
    //       _sorted.sort((ls, rs): number => {
    //         if (ls.cartID < rs.cartID) { return 1; }
    //         if (ls.cartID > rs.cartID) { return -1; }
    //       });
    //       return _sorted;
    //     } catch (Error) {
    //       return _sorted;
    //     }
    //   }
    //   sortDayProc(_sorted: DayStartEnd[]): DayStartEnd[] {
    //     try {
    //       _sorted = _sorted.slice(0);
    //       _sorted.sort((ls, rs): number => {
    //         if (ls.dayProcID < rs.dayProcID) { return 1; }
    //         if (ls.dayProcID > rs.dayProcID) { return -1; }
    //       });
    //       return _sorted;
    //     } catch (Error) {
    //       return _sorted;
    //     }
    //   }
    //   sortDescending(_sorted: any[]): any[] {
    //     try {
    //       _sorted = _sorted.slice(0);
    //       _sorted.sort((ls, rs): number => {
    //         if (ls.lastUpdatedAt > rs.lastUpdatedAt) { return 1; }
    //         if (ls.lastUpdatedAt < rs.lastUpdatedAt) { return -1; }
    //       });
    //       return _sorted;
    //     } catch (Error) {

    //       return _sorted;
    //     }
    //   }
    sort(_sorted: any[]): any[] {
        try {
            _sorted = _sorted.slice(0);
            _sorted.sort((ls, rs): any => {
                if (ls.lastUpdatedAt < rs.lastUpdatedAt) { return 1; }
                if (ls.lastUpdatedAt > rs.lastUpdatedAt) { return -1; }
            });
            return _sorted;
        } catch (Error) {

            return _sorted;
        }
    }
    //   setData(obj: any) {
    //     try {
    //       const data = JSON.parse(obj);
    //       // console.log (data );
    //       this.loginkey = data.user.loginKey;
    //       this.loginuserid = data.userID;
    //       this.auth_token = data.auth_token;
    //       this.refreshToken = data.refreshToken;
    //       this.tokenexpires = data.expires;
    //       this.tokenexpireslocal = data.expires_local;
    //       this.CompanyID = data.loginCompany.companyID;
    //       this.Company = data.loginCompany;
    //       this.CompanyOutlet = data.loginCompanyOutlet;
    //       try {
    //         if (data.loginCompany.companyFlagSettings !== undefined && data.loginCompany.companyFlagSettings !== null) {
    //           this.companyflagSettings = data.loginCompany.companyFlagSettings;
    //           this.CompanyCurrency = data.loginCompany.companyFlagSettings.filter(x => x.companyFlagID === 5)[0].value;

    //         } else {
    //           this.CompanyCurrency = 'PKR';
    //         }
    //       } catch (x) { this.CompanyCurrency = 'PKR'; }
    //       try {
    //         if (data.loginCompany.companyFlagSettings !== undefined && data.loginCompany.companyFlagSettings !== null) {
    //           if (data.loginCompany.companyFlagSettings.filter(x => x.companyFlagID === 27)
    //           [0].value === '') {
    //             throw Error('no folder name set for company');
    //           }
    //           this.S3foldername = myGlobals._assetURL + data.loginCompany.companyFlagSettings.filter(x => x.companyFlagID === 27)
    //           [0].value + "/";


    //         } else {
    //           this.S3foldername = '';
    //         }
    //       } catch (x) { this.S3foldername = ''; }
    //       try {
    //         if (data.loginCompany.companyFlagSettings !== undefined && data.loginCompany.companyFlagSettings !== null) {

    //           this.isCompanyTaxInclusive = <boolean>data.loginCompany.companyFlagSettings.filter(x => x.companyFlagID === 1)
    //           [0].status;


    //         } else {
    //           this.isCompanyTaxInclusive = false;
    //         }
    //       } catch (x) { this.isCompanyTaxInclusive = false; }

    //       if (data.loginCompanyOutlet !== undefined && data.loginCompanyOutlet !== null) {
    //         this.CompanyOutletID = data.loginCompanyOutlet.companyOutletID;
    //       } else {
    //         this.CompanyOutletID = 0;
    //       }
    //       this.loginName = data.user.name;
    //       this.email = data.email;
    //       this.dashBoardURL = data.user.dashBoardURL;
    //       this.isCompanyAdmin = false;
    //       if (data.user.role.toLowerCase() === 'admin') {
    //         this.isCompanyAdmin = true;
    //       }
    //       this.loginuser = data.user;
    //       this.httpOptions = new HttpHeaders({ 'Authorization': 'Bearer ' + data.auth_token });
    //       localStorage.clear();
    //       localStorage.setItem('data', obj);
    //       this.IsReady = true;
    //       //  this._daystartendService.GetCurrentDayProc();
    //     } catch (Error) {

    //       //  this.router.navigate(['./login']);
    //     }
    //   }
    //   notifyUser(head: string, det: string, isbeep: boolean = true) {
    //     if (isbeep === undefined || isbeep === null) isbeep = true;
    //     this.showToaster(head, det);
    //     if (isbeep) { this.playsound(); }

    //   }
    //   showToaster(head: string, det: string) {
    //     try {
    //       this.toast.success(head, det);
    //     } catch (x) {

    //     }
    //   }
    //   playsound() {
    //     try {
    //       const sound = new Howl({
    //         src: ['assets/sounds/censor beep 5s.mp3']
    //       });
    //       sound.play();
    //     } catch (e) { }
    //   }
    //   handleError(error: any) {
    //     this.IsReady = true;
    //     //  console.log('on glbal func=' + JSON.stringify(error));
    //     if (this.IsHandleError !== undefined && !this._IsHandleError) { return; }

    //     let errMsg, err;
    //     try {

    //       if (error.status === 404 || error.status === 403) { return; }

    //       if (error.status === 200) { return; }

    //       // errMsg = error.status === 0 ? 'Unknown Host' :
    //       //   error.status && error.status !== 500 ? error.statusText :
    //       //     error.error !== null && error.error.value !== undefined &&
    //       //       error.error.value.status !== undefined ? error.error.value.status :
    //       //       error.error.value && error.error.value !== null && error.error.value !== undefined ? error.error.value :
    //       //         error.message ? error.message :
    //       //           error.value ? error.value : 'Server error';

    //       errMsg = error.status === 0 ? 'Unknown Host' :
    //         error.status && error.status === 400 ? error.statusText :
    //           error.status && error.status !== 500 ? error.statusText :
    //             error.error !== null && error.error.value !== undefined &&
    //               error.error.value.status !== undefined ? error.error.value.status :
    //               error.error.value && error.error.value !== null && error.error.value !== undefined ? error.error.value :
    //                 error.message ? error.message :
    //                   error.value ? error.value : 'Server error';


    //       try {
    //         if (error.status.toString() === '401') {
    //           if (this.refreshToken !== undefined && this.refreshToken !== null && this.refreshToken !== '') {
    //             this.RefreshToken();
    //           } else { this.router.navigate(['./']); }
    //         } else {
    //           try {
    //             //     console.log('in global error=' + JSON.stringify(error));
    //             let FilterMessage: Message[];
    //             FilterMessage = this._Messages.filter(rec => rec.MessageKey.toString() === error.status.toString());
    //             if (FilterMessage.length > 0) {
    //               errMsg = FilterMessage[0].MessageDesc;
    //             }
    //           } catch (Error) { }
    //           if (errMsg === undefined || errMsg === null || errMsg === '') {
    //             errMsg = JSON.stringify(error.error);
    //           }
    //           err = errMsg.replace('"', '');
    //           if (error.status === '401' || error.status === '0') {
    //             // show all other error messages again n agian except unauth and unknown host
    //             this.ShownError = err;
    //           }
    //           if (err === '' || err.trim().toLowerCase() === 'ok') { return; }
    //           if (this.ShownError === '' || this._ShownError !== err) {
    //             this._SweetAlertComponent.showSwal('title-and-text', 'Error', err);
    //           }

    //         }
    //       } catch (Error) { }
    //     } catch (Error) {
    //       this.IsReady = true;
    //       errMsg = 'Error occured- ' + JSON.stringify(error);
    //     }

    //   }

    //   RefreshToken() {
    //     try {
    //       this._RefreshtokenService.RefreshToken(this.refreshToken, this._httpOptions).subscribe((data: any) => {

    //         this.setData(JSON.stringify(data));
    //         //console.log('token refreshed');
    //       },
    //         () => {
    //           this.router.navigate(['./']);
    //         });

    //     } catch (Error) {
    //       this.IsReady = true;
    //       this.router.navigate(['./']);
    //     }
    //   }
    //   constructor(
    //     private _SweetAlertComponent: SweetAlertComponent,
    //     private toast: ToastrService, private spinner: NgxSpinnerService,
    //     // public _daystartendService: DayStartEndService,
    //     public router: Router, public _RefreshtokenService: RefreshtokenService) {


    //     // this._viewWidth = GlobalfunctionHelperService.getScreenWidth();
    //     // this._viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);


    //   }

    //   ShowMessage(MessageKey: string, AdditionalInfo?: string) {
    //     if (AdditionalInfo === undefined) {
    //       AdditionalInfo = '';
    //     } else {
    //       AdditionalInfo = ' ' + AdditionalInfo + '';
    //     }

    //     let FilterMessage: Message[];
    //     FilterMessage = this._Messages.filter(rec => rec.MessageKey.toLowerCase() === MessageKey.toLowerCase());


    //     if (FilterMessage.length > 0) {
    //       switch (FilterMessage[0].DispalyStyle) {
    //         case 0:
    //           alert(FilterMessage[0].MessageDesc + AdditionalInfo); break;
    //         case 1:
    //           alert(FilterMessage[0].MessageDesc + AdditionalInfo); break;

    //       }

    //     }
    //   }
    //   CanActivate(_Link: string): boolean {
    //     if (this._pincode === undefined || this._pincode === null || this._pincode === '') {
    //       return false;
    //     }
    //     // CheckRights and then activated
    //     return true;
    //   }
    //   IsLogin(): boolean {
    //     if (this._pincode === undefined || this._pincode === null || this._pincode === '') {
    //       return true;
    //     }
    //     return false;
    //   }

}
