import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBqG1pzkasWcqO3IrbvZcihc2goLUbsox8",
    authDomain: "todoapp-a2b69.firebaseapp.com",
    databaseURL: "https://todoapp-a2b69.firebaseio.com",
    projectId: "todoapp-a2b69",
    storageBucket: "todoapp-a2b69.appspot.com",
    messagingSenderId: "62934320822",
    appId: "1:62934320822:web:bd10004c32a4f5fd"
  };

const fire = firebase.initializeApp(firebaseConfig);
export default fire;