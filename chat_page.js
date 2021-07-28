var firebaseConfig = {
    apiKey: "AIzaSyB53-Ycgmxvpt4D5LL4gUUhMNhcmR7yF5U",
    authDomain: "p-94-92699.firebaseapp.com",
    databaseURL: "https://p-94-92699-default-rtdb.firebaseio.com",
    projectId: "p-94-92699",
    storageBucket: "p-94-92699.appspot.com",
    messagingSenderId: "785138772668",
    appId: "1:785138772668:web:a516ed389c35a0169abeb9"
  };
firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send()
  {
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
        });

        document.getElementById("msg").value = "";
  }