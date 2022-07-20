// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {

    production: false,
    versionCheckURL : location.origin+ '/version.json',
      // Main_API: "http://192.168.1.69:7090/v1/api/",

    Main_API: "https://fmis.fcgo.gov.np/v1/api/",
    // Main_API :"http://192.168.1.69:7090/v1/api/",
    //Main_API: "https://simplysoft.ngrok.io/v1/api/"

    //  Main_API: "https://fmis.fcgo.gov.np/v1/api/"

    // logoimage:"assets/images/logo/fmislogo.jpg",
    // BannerLogo:"assets/images/logo/fmis.jpg",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
