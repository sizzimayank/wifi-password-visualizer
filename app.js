function checkStrength() {
    const password = document.getElementById("passwordInput").value;
    const ctx = document.getElementById("strengthChart").getContext("2d");

    let score = 0;
    let tips = "";

    if (password.length >= 12) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    switch(score) {
        case 4:
            tips = "Strong password!";
            break;
        case 3:
            tips = "Moderate password. Add symbols or more characters.";
            break;
        default:
            tips = "Weak password. Use uppercase, numbers, and special characters.";
    }

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Strength"],
            datasets: [{
                label: "Password Strength",
                data: [score],
                backgroundColor: ["#ff4d4d", "#ffcc00", "#4caf50", "#4caf50"],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: { beginAtZero: true, max: 4 }
            }
        }
    });

    document.getElementById("tips").innerText = tips;
}
