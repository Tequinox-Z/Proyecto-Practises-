// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serverAddress: 'http://localhost:8080',                        // Dirección del servidor
  serverFileAddress: 'http://localhost:8080',
  mapBoxToken: "pk.eyJ1IjoidGVxdWlub3giLCJhIjoiY2wwbGtqYjdsMHdlcDNrbTlqeWZnZnY3cSJ9.YoG8c5FaerdYy7gvbLDz6w",
  routeMap: "https://api.mapbox.com/directions/v5/mapbox/cycling/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
