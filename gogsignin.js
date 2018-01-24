var provider = new firebase.auth.GoogleAuthProvider();
var user;
var myBtn1=document.getElementById('goglog');
var myBtn2=document.getElementById('goglogout');

// sign in wi9th google
myBtn1.addEventListener('click',function(){
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    console.log(result.user);
    user = result.user;
    // fetch user name for greeting
    console.log(user.displayName);
    document.getElementById('signed').style.display = "block";
    document.getElementById('goglogout').style.display = "block";
    document.getElementById('goglog').style.display = "none";
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
},false);

// sign out
myBtn2.addEventListener('click',function(){
  firebase.auth().signOut().then(function() {
  // Sign-out successful.
  console.log("success");
  document.getElementById('signed').style.display = "none";
  document.getElementById('goglogout').style.display = "none";
  document.getElementById('goglog').style.display = "block";
  // reload site

  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
},false);
