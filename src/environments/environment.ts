// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://mbsoftwarehorseracingcoreapi.azurewebsites.net/api/', // 'https://localhost:44303/api/',
  raceResultLoadStatusUrl: 'https://raceresultloadstatusservice.azurewebsites.net/api/',
  raceResultImportServiceUrl: 'https://horseracingimportraceresultfunctions.azurewebsites.net/api/',
  raceResultServiceUrl: 'https://horseracingresultservice.azurewebsites.net/api/',
  raceLoadStatusUrl: 'https://raceloadstatusservice.azurewebsites.net/api/',
  callbackUrl: 'logincallback',
  horseImportTriggerKey: 'put the key from the .net API in here',
  auth0ApiClientId: 'auth0 client_id',
  auth0ApiClientSecret: 'auth0 client secret',
  auth0Domain: 'myauth0.auth0.com',
  auth0ClientId: 'myauth0 client_id'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
