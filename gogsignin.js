var provider = new firebase.auth.GoogleAuthProvider();
var user;



// sign in wi9th google
function googlsignin(){
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    console.console.log(result.user);
    user = result.user;
    // hide login if usetr is already logged in
    document.getElementById('goglog').style.display = "none";
    // display greeting
    document.getElementById('signed').style.display = "block";
    // fetch user name for greeting
    $("#greeting1").html("Hello, "+ user.displayName);
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

// sign out
function googlsignout(){
  firebase.auth().signOut().then(function() {
  // Sign-out successful.

  // reload site
  location.reload();
  }).catch(function(error) {
  // An error happened.
  });
}
