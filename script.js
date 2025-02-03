function calculateAge() {
    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();
    
    const years = today.getFullYear() - dob.getFullYear();
    const months = today.getMonth() - dob.getMonth() + (months < 0 ? -1 : 0);
    const days = today.getDate() - dob.getDate() + (days < 0 ? -1 : 0);

    const output = `
        Years: ${years}<br>
        Months: ${months}<br>
        Days: ${days}
    `;
    document.getElementById('output').innerHTML = output;
}
