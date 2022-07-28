// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyABV4YCw-hvTQeeMUgbekj4f9ifrEDijOI",
    authDomain: "letschat-d6119.firebaseapp.com",
    databaseURL: "https://letschat-d6119-default-rtdb.firebaseio.com",
    projectId: "letschat-d6119",
    storageBucket: "letschat-d6119.appspot.com",
    messagingSenderId: "484723878502",
    appId: "1:484723878502:web:687f648beadcfcbda81ba7",
    measurementId: "G-V035NYWT7G"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
   
}



