import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDFUW7Cj3XUPWHEstaPzb3jOucBUwRGLtQ",
    authDomain: "fir-project-e3062.firebaseapp.com",
    databaseURL: "https://fir-project-e3062.firebaseio.com",
    projectId: "fir-project-e3062",
    storageBucket: "fir-project-e3062.appspot.com",
    messagingSenderId: "324892423498",
    appId: "1:324892423498:web:9f1ff0b22d5d14f4e07db3",
    measurementId: "G-FM777XSQNK"
};
var fire=firebase.initializeApp(firebaseConfig)
export default fire