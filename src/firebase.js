import firebase from 'firebase/app'
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyD-w3DBlvAvvRskQNSF1yoKrrcRN_oTE0w",
    authDomain: "fake-interview.firebaseapp.com",
    databaseURL: "https://fake-interview.firebaseio.com",
    projectId: "fake-interview",
    storageBucket: "fake-interview.appspot.com",
    messagingSenderId: "284782516391",
    appId: "1:284782516391:web:c14c49534de8257f39a382"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;