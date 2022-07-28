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

function logout() {
    window.location = "index.html"
}


function getData() {
    firebase.database().ref("/").on('value',
        function (snapshot) {document.getElementById("output").innerHTML = "";
    snapshot.forEach(function childSnapshot() {
        childKey = childSnapshot.key
        Room_names = childKey;
        //Start code
"<div>"+Room_names+"</div>"
        //End code
    });});
}
getData();

function redirectToRoomName(name) {
    localStorage.setItem("room_name", name)
    window.location = "chat_page.html"
  }
  function addRoom(){
    room_name = document.getElementById("roomName").value;
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
    })
  
    localStorage.setItem("room_name", room_name)
  
    window.location = "chat_page.html"
  }