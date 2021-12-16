'use strict';
import { environment } from '../environments/environment';

// export const _apiPath = 'http://POSBackendALB-937766685.us-east-2.elb.amazonaws.com/api/v1/'; // 'http://5ef9f551.ngrok.io/api/';
// export const _apiPath = 'https://d72bab25.ngrok.io/api/v1/';
// export const _apiPath = 'https://c6d0befe.ngrok.io/api/v1/';
export const _apiPath = environment.APIEndpoint; // 'https://localhost:5001/api/v1/';
export const _apiPathv2 = environment.APIEndpointv2; // 'https://localhost:5001/api/v1/';
export const _apiUrlBase = environment.APIURLBase; // 'https://localhost:5001/';
export const _assetURL = environment.ASSET_URL; // https://picpics.s3.us-east-2.amazonaws.com/

export const _screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
export const _screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

export const _HOrderTakingRatio = 0.90; // in percentge 90%
export const _HTrayRatio = 0.90; // in percentge 90%
export const _HProductListRatio = 0.80; // in percentge 90%
// Cart
export const _HCartHeaderRatio = 0.06; // in percentge 90%
export const _HCartRatio = 0.55; // in percentge 90%
export const _HCartFooterRatio = 0.12; // in percentge 90%
export const _HCartButtonRatio = 0.07; // in percentge 90%

export const _RatioOrderTakingWidth = 3;
export const _RatioCartWidth = 1;
//

// it is on screen based///
export const _trayCols = 6;
export const _productCols = 6;
export const _productWidth = 0.65; // in percentge meanse 65 percent

export const _ShowflavourTitle = true;

export const offsettime = (new Date()).getTimezoneOffset();
