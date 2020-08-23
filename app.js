function getdata(){
var email = document.getElementById('email').value
if(email == ""){
	alert('ad it')
}else{
	var emails = {
	email: email.value
}
firebase.database().ref('Emails').push(email)
email.value
}

}

//https://subscribeus-eba6f.firebaseio.com/