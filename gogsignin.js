var provider = new firebase.auth.GoogleAuthProvider();
var user;

firebase.auth().onAuthStateChanged(function(user)){
  if (user) {
    document.getElementById('goglog').style.display = "none";
    document.getElementById('sigend').style.display = "block";
    $("#greeting1").html("Hello, "+ user.displayName);
  }else{
    document.getElementById('goglog').style.display = "block";
    document.getElementById('signed').style.display = "none";
  }
}

function googlsignin(){
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    user = result.user;
    console.log(user.displayName);
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

function googlsignout(){
  firebase.auth().signOut().then(function() {
  // Sign-out successful.
  location.reload();
  }).catch(function(error) {
  // An error happened.
  });
}
