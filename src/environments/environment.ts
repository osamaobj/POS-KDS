// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  auto_testing_btn: true,
  // APIEndpoint : 'https://dev-pegasus.millsoft.com.pk/api/v1/' ,
  APIEndpoint: 'http://localhost:5000/api/v1/',
  APIEndpointv2: 'http://localhost:5000/api/v2.0/',
  APIURLBase: 'http://localhost:5000/',
  ASSET_URL: 'https://picpics.s3.us-east-2.amazonaws.com/',
  // ASSET_URL: 'https://pegasus-staging-cdn.s3.us-east-2.amazonaws.com/',
  sentry_URL: 'https://6d23a9d51ff04a3dafd284e6a526ad62@sentry.io/1306826',
  mixpanel_token: '30f61590ed547863100218892d970bd0',
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
