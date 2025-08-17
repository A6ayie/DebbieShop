const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(e){
    e.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();
    if(!name || !email || !message){
        alert("Please fill all fields.");
        return;
    }
    alert("Thank you for contacting us! We will get back to you soon.");
    contactForm.reset();
});
