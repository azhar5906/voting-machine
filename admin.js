document.addEventListener("DOMContentLoaded", function () {
    const teamList = document.getElementById("teamList");
    const teamNameInput = document.getElementById("teamName");
    let teams = JSON.parse(localStorage.getItem("teams")) || [];

    // Password for accessing admin.html
    const adminPassword = "admin123"; // Replace with a secure password

    // Function to check password
    function checkPassword() {
        const adminPassword = "admin123"; // Replace with your secure password
        const password = prompt("Please enter the admin password:");
    
        if (password === adminPassword) {
            return true; // Allow access
        } else {
            alert("Incorrect password. Access denied.");
            window.location.href = "vote.html"; // Redirect to index.html
            return false; // Deny access
        }
    }
    
    // Example usage
    // function accessAdminPanel() {
    //     if (checkPassword()) {
    //         // Code to grant access to the admin panel
    //         alert("Access granted! Redirecting to admin panel...");
    //         window.location.href = "admin.html"; // Redirect to admin panel
    //     }
    // }
    
    // // Call this function to trigger the password check
    // accessAdminPanel();

    // Render teams function
    function renderTeams() {
        teamList.innerHTML = "";
        teams.forEach((team, index) => {
            const div = document.createElement("div");
            div.innerText = `${team.name} - Votes: ${team.votes}`;
            
            const removeBtn = document.createElement("button");
            removeBtn.innerText = "Remove";
            removeBtn.onclick = function () {
                if (checkPassword()) { // Check password before allowing removal
                    teams.splice(index, 1);
                    localStorage.setItem("teams", JSON.stringify(teams));
                    renderTeams();
                }
            };
            div.appendChild(removeBtn);
            teamList.appendChild(div);
        });
    }

    // Add team function
    window.addTeam = function () {
        if (checkPassword()) { // Check password before allowing addition
            const name = teamNameInput.value.trim();
            if (name) {
                teams.push({ name, votes: 0 });
                localStorage.setItem("teams", JSON.stringify(teams));
                renderTeams();
                teamNameInput.value = "";
            }
        }
    };

    // Initial render
    renderTeams();
});