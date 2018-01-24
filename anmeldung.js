// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCtLV8vwFX9TsdbL0CDgCJG-DB5F7PBFDI",
    authDomain: "anmeldung-wlauf.firebaseapp.com",
    databaseURL: "https://anmeldung-wlauf.firebaseio.com",
    projectId: "anmeldung-wlauf",
    storageBucket: "",
    messagingSenderId: "1062814993831"
  };
  firebase.initializeApp(config);

  // Refrence messages collection
  var messagesRef = firebase.database().ref('messages');


function radio(){
	return document.querySelector('input[name="typ"]:checked').value;
}
function radio2(){
	return document.querySelector('input[name="streckenlänge"]:checked').value;
}

document.getElementById('contactform').addEventListener('submit', submitForm);

// submit form
function submitForm(e){
	e.preventDefault();

	//Get values
	var name = getInputVal('name');
	var vorname = getInputVal('vorname');
	var geburtsdatum = getInputVal('geburtsdatum');
	var verein = getInputVal('verein');
	var strasse = getInputVal('strasse');
	var post = getInputVal('post');
	var ort = getInputVal('ort');
	var typ = radio();
	var streckenlänge = radio2();
	//save message
	saveMessage(name, vorname, geburtsdatum, verein, strasse, post, ort, typ, streckenlänge);
  alert('Anmeldung abgesendet');
}
//Function to get form values
function getInputVal(id){
	return document.getElementById(id).value;
}
//Save messages to firebase
function saveMessage(name, vorname, geburtsdatum, verein, strasse, post, ort, typ, streckenlänge){
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		name: name,
		vorname: vorname,
		geburtsdatum: geburtsdatum,
		verein: verein,
		strasse: strasse,
		post: post,
		ort: ort,
		typ: typ,
		streckenlänge: streckenlänge});
	document.getElementById('contactform').reset();
}
