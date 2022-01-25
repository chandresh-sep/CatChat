const firebaseConfig = {
      apiKey: "AIzaSyAacoLNni3fZjc9OEipqIxVmUltX482wZ8",
      authDomain: "fir-bf0be.firebaseapp.com",
      databaseURL: "https://fir-bf0be-default-rtdb.firebaseio.com",
      projectId: "fir-bf0be",
      storageBucket: "fir-bf0be.appspot.com",
      messagingSenderId: "711094541192",
      appId: "1:711094541192:web:e0e94008a8dfc599fc783d"
    };
    
    firebase.initializeApp(firebaseConfig);

    user_name= localStorage.getItem("user_name");
    room_name= localStorage.getItem("room_name");

    function send()
    {

      msg =document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0,
      });

      document.getElementById("msg").value ="";

    }

   

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}