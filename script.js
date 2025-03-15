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
        <p>↪️ <strong>Years:</strong> ${years}</p>
        <p>↪️ <strong>Months:</strong> ${months}</p>
        <p>↪️ <strong>Days:</strong> ${days}</p>
        <p>↪️ <strong>Weeks:</strong> ${weeks}</p>
        <p>↪️ <strong>Hours:</strong> ${hours}</p>
        <p>↪️ <strong>Minutes:</strong> ${minutes}</p>
        <p>↪️ <strong>Seconds:</strong> ${seconds}</p>
    `;
}
