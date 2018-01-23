var login = new Vue({
  el: '#login',
  data: {
    message: 'Hello Vue.js!'
  },
    methods:{
      googlelogin = function(){
        firebase.auth().signInWithPopup(provider).then(function(result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          console.log(result.user);
          user = result.user;
          // fetch user name for greeting
          console.log(user.displayName);
          document.getElementById('signed').style.display = "none";
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
      }
    }
    googlelogout = function() {
      firebase.auth().signOut().then(function() {
      // Sign-out successful.
      console.log("success");
      document.getElementById('signed').style.display = "block";
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
    }
})
