import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


let firebaseConfig = {
    apiKey: "AIzaSyBDvGhlnEfCqXKJZjSZisW5matK3KW8lsQ",
    authDomain: "myfinances-7bbd6.firebaseapp.com",
    projectId: "myfinances-7bbd6",
    storageBucket: "myfinances-7bbd6.appspot.com",
    messagingSenderId: "426538636342",
    appId: "1:426538636342:web:554f5b64f29be6e031b497"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;