// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDGuuAA9SviLDsl-hi22z0w-lA8U_vWSw8",
    authDomain: "all-site-01.firebaseapp.com",
    databaseURL: "https://all-site-01.firebaseio.com",
    projectId: "all-site-01",
    storageBucket: "all-site-01.appspot.com",
    messagingSenderId: "664071456325",
    appId: "1:664071456325:web:3974d704287199be"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function logout(){
    firebase.auth().signOut().then(() => {
        alert('Usuário deslogou');
    })
}