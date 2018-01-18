firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById('signin').style.display = "none";
  } else {
    // No user is signed in.
    document.getElementById('signin').style.display = "block";
  }
});

function login(){
  var userEmail = document.getElementbyId("email_field").value;
  var userPass = document.getElementbyId("pw_field").value;

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error:" + errorMessage);
  });

}

function logout(){
  firebase.auth().signOut().then(function() {
  // Sign-out successful.
  }).catch(function(error) {
  // An error happened.
  });
}
