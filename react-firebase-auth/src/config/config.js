import firebase from 'firebase';

var config = {
        apiKey: "FILL_IN_WITH_YOUR_OWN_DATA",
        authDomain: "FILL_IN_WITH_YOUR_OWN_DATA",
        databaseURL: "FILL_IN_WITH_YOUR_OWN_DATA",
        projectId: "FILL_IN_WITH_YOUR_OWN_DATA",
        storageBucket: "FILL_IN_WITH_YOUR_OWN_DATA",
        messagingSenderId: "FILL_IN_WITH_YOUR_OWN_DATA"
};

const fire = firebase.initializeApp(config);
export default fire;