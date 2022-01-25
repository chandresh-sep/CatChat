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

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
 room_name = document.getElementById("room_name").value;

 firebase.database().ref("/").child(room_name).update({
   purpose : "adding room_name"
 });

   localStorage.setItem("room_name", room_name);
   
   window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) {
   document.getElementById("output").innerHTML = "";
   snapshot.forEach(function(childSnapshot) {
      childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
   });
 });

}

getData();

function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
}
