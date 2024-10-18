document.addEventListener('DOMContentLoaded', () => {

    // FAQ Toggle Functionality

    const faqItems = document.querySelectorAll('.faq-item h3');

    

    faqItems.forEach(item => {

        item.addEventListener('click', () => {

            const answer = item.nextElementSibling; // Get the next sibling element (the <p> tag)

            if (answer.style.display === 'block') {

                answer.style.display = 'none'; // Hide the answer if it's visible

            } else {

                answer.style.display = 'block'; // Show the answer if it's hidden

            }

        });

    });

    // Form Validation for Ticket Submission

    const form = document.getElementById('ticket-form');

    

    form.addEventListener('submit', function(event) {

        const name = document.getElementById('name').value;

        const email = document.getElementById('email').value;

        const subject = document.getElementById('subject').value;

        const issue = document.getElementById('issue').value;

        if (!name || !email || !subject || !issue) {

            event.preventDefault(); // Stop form submission

            alert('Please fill in all fields before submitting.');

        } else {

            alert('Ticket Submitted Successfully!'); // You can replace this with actual form handling.

        }

    });

});