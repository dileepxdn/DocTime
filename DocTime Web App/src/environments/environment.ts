// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyBUkMeI4Kjbgzrf-4Re6IIXoT35pLtKcBY",
    authDomain: "doc-slot.firebaseapp.com",
    databaseURL: "https://doc-slot.firebaseio.com",
    projectId: "doc-slot",
    storageBucket: "doc-slot.appspot.com",
    messagingSenderId: "487434105601"
  },
  algolia:{
      apiKey: 'ee42930d8fba609e64b4ed2819006175',
      appId: 'O9UAPFMUCH',
      indexName: 'doctors',
      routing: true
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
