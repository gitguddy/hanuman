var provider = new firebase.auth.GoogleAuthProvider();
var user;
var myBtn1=document.getElementById('goglog');


// sign in wi9th google
myBtn1.addEventListener('click',function(){
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    console.console.log(result.user);
    user = result.user;
    // fetch user name for greeting
    $("#greeting1").html("Hello, "+ user.displayName);
    console.log(user.displayName);
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("errorMessage");
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
},false);

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
