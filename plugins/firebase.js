import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyBh21Wp2jxEwEtqZDCdckp-2kxd_7NuM4U',
    authDomain: 'ak1nat0r.firebaseapp.com',
    databaseURL: 'https://ak1nat0r.firebaseio.com',
    projectId: 'ak1nat0r',
    storageBucket: 'ak1nat0r.appspot.com',
  })
}

export default firebase