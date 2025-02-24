document.addEventListener("DOMContentLoaded", function () {
    const teamsDiv = document.getElementById("teams");
    const teams = JSON.parse(localStorage.getItem("teams")) || [];
    const voted = localStorage.getItem("voted");

    if (voted) {
        teamsDiv.innerHTML = "<p>You have already voted.</p>";
        return;
    }
    
    teams.forEach((team, index) => {
        const btn = document.createElement("button");
        btn.innerText = `${team.name} (Votes: ${team.votes})`;
        btn.onclick = function () {
            teams[index].votes++;
            localStorage.setItem("teams", JSON.stringify(teams));
            localStorage.setItem("voted", "true");
            teamsDiv.innerHTML = "<p>Thank you for voting!</p>";
        };
        teamsDiv.appendChild(btn);
    });
});