document.getElementById('infoForm').addEventListener('submit', function(event) {
    // Get form field values
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;

    // 1. Check if any field is completely empty
    if (!fullName || !email || !phone || !dob || !gender) {
        alert('Please fill out all fields before submitting.');
        event.preventDefault(); // Stops the form from submitting
        return;
    }

    // 2. Validate phone number layout (Must be exactly 10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        event.preventDefault();
        return;
    }

    // 3. Validate email layout using a standard regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
        return;
    }

    // If everything is completely correct, the form proceeds to submit.php smoothly!
});