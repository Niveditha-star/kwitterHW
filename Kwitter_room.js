const firebaseConfig = {
    apiKey: "AIzaSyCGYTDzRtOSMdR37ykV4O_vdemx0hluaJs",
    authDomain: "kwitter-bbf0b.firebaseapp.com",
    databaseURL: "https://kwitter-bbf0b-default-rtdb.firebaseio.com",
    projectId: "kwitter-bbf0b",
    storageBucket: "kwitter-bbf0b.appspot.com",
    messagingSenderId: "341005701387",
    appId: "1:341005701387:web:7bc42075a81913ae59520e"
  };
  
        function getData()
        {
        firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
  
               
              console.log ("Room_name -" + Room_names);
              row= "<div class='room_name' id="+Room_names+ "onclick='redirectToRoomName(this.id)' >#"
              + Room_names +"</div><hr>";
              document.getElementById("output").innerHTML += row;
        });});}  
        getData();
        function addRoom()
         {
              room_name = document.getElementById("room_name").value;
  
              firebase.database().ref("/").child(room_name).update({
                    purpose: "adding room name"
              });
  
              localStorage.setItem("room_name" , room_name);
              window.location = "kwitter_page.html";
  
         }
         
        function redirectToRoomName(name)
        {
              console.log(name);
              localStorage.setItem("room_name" , name);
              window.location = "kwitter_page.html"; 
        }