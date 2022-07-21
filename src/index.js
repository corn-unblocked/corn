// Import the functions you need from the SDKs you need
import { initializeApp, getDatabase } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDUCu1-mV98QJfo8VAyO-D2OB9SthwJ65Y",
	authDomain: "hot-corn-5a8ba.firebaseapp.com",
	projectId: "hot-corn-5a8ba",
	storageBucket: "hot-corn-5a8ba.appspot.com",
	messagingSenderId: "945726798663",
	appId: "1:945726798663:web:632078f55968f1d1fd6a62",
	databaseURL: "https://hot-corn-5a8ba-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
