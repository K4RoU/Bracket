// Store Teams in Local Storage
const teams = JSON.parse(localStorage.getItem("teams")) || [];

// Add Team Logic
if (document.getElementById("team-form")) {
  const teamForm = document.getElementById("team-form");
  const teamList = document.getElementById("team-list");

  teamForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const teamName = document.getElementById("team-name").value.trim();
    if (teamName) {
      teams.push(teamName);
      localStorage.setItem("teams", JSON.stringify(teams));
      renderTeamList();
      document.getElementById("team-name").value = "";
    }
  });

  const renderTeamList = () => {
    teamList.innerHTML = "";
    teams.forEach((team) => {
      const li = document.createElement("li");
      li.textContent = team;
      li.classList.add("list-group-item");
      teamList.appendChild(li);
    });
  };

  renderTeamList();
}

// Display Teams in Bracket
if (document.getElementById("winner-matches")) {
  const winnerMatches = document.getElementById("winner-matches");
  const loserMatches = document.getElementById("loser-matches");

  const renderBracket = () => {
    winnerMatches.innerHTML = "";
    loserMatches.innerHTML = "";

    // Populate Winners Bracket
    teams.slice(0, 4).forEach((team) => {
      const li = document.createElement("li");
      li.textContent = team;
      li.classList.add("list-group-item");
      winnerMatches.appendChild(li);
    });

    // Populate Losers Bracket
    teams.slice(4).forEach((team) => {
      const li = document.createElement("li");
      li.textContent = team;
      li.classList