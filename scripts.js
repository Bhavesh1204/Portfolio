document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name && email && subject && message) {
            // Form is valid - you can add your form submission logic here
            alert("Message sent successfully!");
            contactForm.reset();
        } else {
            // Form is invalid
            alert("Please fill out all fields.");
        }
    });
});