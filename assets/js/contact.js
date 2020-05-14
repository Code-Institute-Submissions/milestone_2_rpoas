function sendMail(contactForm) {
    emailjs.send("gmail", "rpoas", {
        "from_name": contactForm.fullName.value,
        "from_email": contactForm.emailAddress.value,
        "email_details": contactForm.query.value
    })
    .then(
        function(response) {
            console.log('SUCCESS!', response);
        }, 
        function(error) {
            console.log('FAILED...', error);
    });
    return false;
}