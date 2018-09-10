// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
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
},
WebClientId:'487434105601-qm15m06254qh7bl5vqr6m87eukp660sg.apps.googleusercontent.com'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
