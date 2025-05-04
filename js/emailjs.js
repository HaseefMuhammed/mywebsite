function sendMail(){
  let parms = {
    name : document.getElementById('name').value,
    email : document.getElementById('email').value,
    subject : document.getElementById('subject').value,
		message : document.getElementById('message').value,
  }
  
  emailjs.send("service_k1t4ac8", "template_eb69yqu", parms).then(alert('Thankyou for contacting !!! , Check your email for more info !!'));
}