var typed = new Typed(".text",{
    strings:["Software Developer", "Backend Developer", "Frontend Developer"],
    typeSpeed : 10,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
});

function sendEmail() {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject=document.getElementById('subject').value
    const message = document.getElementById('message').value;

    // Construct the mailto URL
    //const subject = encodeURIComponent('Form Submission from ' + name);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=virendev1107@gmail.com&su=${subject}&body=${body}`;

    // Open the mail client
    window.open(mailtoLink, '_blank');
    
}