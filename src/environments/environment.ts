// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBh0NkzsfwBYRgAg6izI1oNMn7myKQpnNA',
    authDomain: 'firestore-text.firebaseapp.com',
    databaseURL: 'https://firestore-text.firebaseio.com',
    projectId: 'firestore-text',
    storageBucket: 'firestore-text.appspot.com',
    messagingSenderId: '170981505159'
  }
};
