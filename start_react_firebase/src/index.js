import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
	    apiKey: "FILL_IN_WITH_YOUR_OWN_DATA",
	    authDomain: "FILL_IN_WITH_YOUR_OWN_DATA",
	    databaseURL: "FILL_IN_WITH_YOUR_OWN_DATA",
	    projectId: "FILL_IN_WITH_YOUR_OWN_DATA",
	    storageBucket: "",
	    messagingSenderId: "FILL_IN_WITH_YOUR_OWN_DATA"
	};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
