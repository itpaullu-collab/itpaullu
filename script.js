// Example JavaScript functionality for Learn More button
document.querySelector('.learn-more').addEventListener('click', function (event) {
    event.preventDefault();
    alert('Learn more about Paul-Lu Samuel Kamara and his work!');
});

// Example JavaScript functionality for Read More buttons
document.querySelectorAll('.read-more').forEach(function (button) {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        alert('Read more about this section!');
    });
});

// Example JavaScript functionality for Subscribe form
document.querySelector('.btn').addEventListener('click', function (event) {
    event.preventDefault();
    const emailInput = document.querySelector('input[type="email"]');
    const email = emailInput.value.trim();

    // Simple email validation
    if (isValidEmail(email)) {
        alert(`Subscribed with email: ${email}`);
        emailInput.value = ''; // Clear input after successful subscription
    } else {
        alert('Please enter a valid email address.');
    }
});

// Function to validate email format
function isValidEmail(email) {
    // Basic email format check
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
