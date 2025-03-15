function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    
    if (!dobInput) {
        alert("Please select your date of birth.");
        return;
    }

    const dob = new Date(dobInput);
    const now = new Date();
    const diff = now - dob;

    const years = now.getFullYear() - dob.getFullYear();
    const months = now.getMonth() - dob.getMonth() + (years * 12);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(days / 7);
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60));
    const seconds = Math.floor(diff / 1000);

    document.getElementById('result').innerHTML = `
        <p><strong>Years:</strong> ${↪️Years}</p>
        <p><strong>Months:</strong> ${↪️Months}</p>
        <p><strong>Days:</strong> ${↪️Days}</p>
        <p><strong>Weeks:</strong> ${↪️Weeks}</p>
        <p><strong>Hours:</strong> ${↪️Hours}</p>
        <p><strong>Minutes:</strong> ${↪️Minutes}</p>
        <p><strong>Seconds:</strong> ${↪️Seconds}</p>
    `;
}
