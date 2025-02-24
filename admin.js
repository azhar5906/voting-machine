document.addEventListener("DOMContentLoaded", function () {
    const teamList = document.getElementById("teamList");
    const teamNameInput = document.getElementById("teamName");
    let teams = JSON.parse(localStorage.getItem("teams")) || [];

    function renderTeams() {
        teamList.innerHTML = "";
        teams.forEach((team, index) => {
            const div = document.createElement("div");
            div.innerText = `${team.name} - Votes: ${team.votes}`;
            
            const removeBtn = document.createElement("button");
            removeBtn.innerText = "Remove";
            removeBtn.onclick = function () {
                teams.splice(index, 1);
                localStorage.setItem("teams", JSON.stringify(teams));
                renderTeams();
            };
            div.appendChild(removeBtn);
            teamList.appendChild(div);
        });
    }

    window.addTeam = function () {
        const name = teamNameInput.value.trim();
        if (name) {
            teams.push({ name, votes: 0 });
            localStorage.setItem("teams", JSON.stringify(teams));
            renderTeams();
            teamNameInput.value = "";
        }
    };
    
    renderTeams();
});