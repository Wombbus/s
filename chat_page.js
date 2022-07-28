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

function getData() {
    firebase.database().ref("/" + room_name).on('value',
        function snapshot() {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot)) {
                childKey = childSnapshot.key;
                childData = childSnapshot.val();
                if (childKey != "purpose") {
                    firebase_message_id = childKey
                    message_data = childData;
                    //Start code
                    console.log(messageData)
                  var name = messageData["userName"]
                     message = messageData["message"]
                     like - messageData["like"]
                     nameTag = "<h4>" + name + " <img src = 'tick.png' class='user_tick'></h4>"
                     messageTag - "<h4>" + message + "</h4>"
                     buttonTag = "<button id='firebaseMessageId' value=likes onclick='updateLikes(this.id)'"
                     spanTag - "<span class='glyphicon glyphicon thumbs-up>"+likes+"</span>"
                 var  row = nameTag+messageTag+buttonTag+spanTag

                    //End code
                }
            }
        })
}

function exit() {
    window.location = "index.html"
}

var room_name = localStorage.getItem("roomName")
user_name = localStorage.getItem("userName")

function send() {
    firebase.database().ref(roomName).push({
        name: user_name,
        message: document.getElementById("message").value,
        like: 0
    })
}

function updateLikes(messageId) {
    var btnLike = document.getElementById(messageId).value
    btnLike = number[btnLike + 1]
    firebase.database.ref("room_name").child(MessageId).update({
        like: btnLike
    })
}