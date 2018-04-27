import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBBS7wyWGb40EWNrDjSseYi0c6mwS88OxQ",
    authDomain: "tp-lab-58eb9.firebaseapp.com",
    databaseURL: "https://tp-lab-58eb9.firebaseio.com",
    projectId: "tp-lab-58eb9",
    storageBucket: "tp-lab-58eb9.appspot.com",
    messagingSenderId: "1050486850415"
};
firebase.initializeApp(config);

export default firebase.database()
