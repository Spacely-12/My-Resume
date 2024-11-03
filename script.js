document.addEventListener('DOMContentLoaded', () => {

    // Contact Form Validation

    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const message = document.getElementById('contact-message').value;

            if (!name || !email || !message) {
                event.preventDefault(); // Stop form submission
                alert('Please fill in all fields before submitting.');
            } else {
                alert('Thank you for reaching out!'); // Replace this with actual form handling logic
            }
        });
    }

});
