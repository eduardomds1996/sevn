const apiUrl = "https://sevn-pleno-esportes.deno.dev/";
let currentRound = 1;
let roundsData = [];
async function fetchRounds() {
  const response = await fetch(apiUrl);
  roundsData = await response.json();
  renderGames();
}
function renderGames() {
  const gamesList = document.getElementById("games-list");
  const roundDisplay = document.getElementById("round-number");
  const roundData = roundsData[currentRound - 1];
  roundDisplay.innerText = `Rodada ${roundData.round}`;
  gamesList.innerHTML = "";
  const gradients = {
    "time-a": "url(#gradientA)",
    "time-b": "url(#gradientB)",
    "time-c": "url(#gradientC)",
    "time-d": "url(#gradientD)",
    "time-e": "url(#gradientE)",
    "time-f": "url(#gradientF)",
    "time-g": "url(#gradientG)",
    "time-h": "url(#gradientH)",
  };
  roundData.games.forEach((game) => {
    const gameDiv = document.createElement("div");
    gameDiv.classList.add("game-item");
    gameDiv.innerHTML = `
<div class="team">
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="30" viewBox="0 0 24 30">
      <path d="M12 0C11.1627 1.12221 10.6201 3.23737 7.15872 3.76028C6.8344 3.80729 6.52776 3.83079 6.23292 3.83079C4.03931 3.83079 2.71253 2.63807 2.71253 2.63807L0 5.48766C0 5.48766 4.19853 6.82726 0.837346 18.8367C-1.43882 26.9683 10.9445 28.2021 12 30C13.0496 28.2021 25.4329 26.9683 23.1627 18.8367C19.8074 6.82726 24 5.48766 24 5.48766L21.2816 2.63807C21.2816 2.63807 19.9548 3.83079 17.7612 3.83079C17.4663 3.83079 17.1597 3.80729 16.8354 3.76028C13.3799 3.24324 12.8373 1.12221 11.9941 0L12 0Z" fill="${
        gradients[game.team_home_id]
      }"/>
      <defs>
         <linearGradient id="gradientA" x1="12" y1="0" x2="12" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#FF0000"/>
            <stop offset="100%" stop-color="rgba(233, 101, 101, 0.3)"/>
         </linearGradient>
         <linearGradient id="gradientB" x1="12" y1="0" x2="12" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#00FF00"/>
            <stop offset="100%" stop-color="rgba(101, 233, 101, 0.3)"/>
         </linearGradient>
         <linearGradient id="gradientC" x1="12" y1="0" x2="12" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#0000FF"/>
            <stop offset="100%" stop-color="rgba(101, 101, 233, 0.3)"/>
         </linearGradient>
         <linearGradient id="gradientD" x1="12" y1="0" x2="12" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#FFFF00"/>
            <stop offset="100%" stop-color="rgba(233, 233, 101, 0.3)"/>
         </linearGradient>
         <linearGradient id="gradientE" x1="12" y1="0" x2="12" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#FF00FF"/>
            <stop offset="100%" stop-color="rgba(233, 101, 233, 0.3)"/>
         </linearGradient>
         <linearGradient id="gradientF" x1="12" y1="0" x2="12" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#00FFFF"/>
            <stop offset="100%" stop-color="rgba(101, 233, 233, 0.3)"/>
         </linearGradient>
         <linearGradient id="gradientG" x1="12" y1="0" x2="12" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#FFA500"/>
            <stop offset="100%" stop-color="rgba(233, 165, 101, 0.3)"/>
         </linearGradient>
         <linearGradient id="gradientH" x1="12" y1="0" x2="12" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#800080"/>
            <stop offset="100%" stop-color="rgba(165, 101, 233, 0.3)"/>
         </linearGradient>
      </defs>
   </svg>
   <strong>${game.team_home_name}</strong> ${game.team_home_score} 
   <span class="block-x">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
         <path d="M13 1L1 13" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
         <path d="M1 1L13 13" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
   </span>
   ${game.team_away_score}
   <strong>${game.team_away_name}</strong>
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="30" viewBox="0 0 24 30">
      <path d="M12 0C11.1627 1.12221 10.6201 3.23737 7.15872 3.76028C6.8344 3.80729 6.52776 3.83079 6.23292 3.83079C4.03931 3.83079 2.71253 2.63807 2.71253 2.63807L0 5.48766C0 5.48766 4.19853 6.82726 0.837346 18.8367C-1.43882 26.9683 10.9445 28.2021 12 30C13.0496 28.2021 25.4329 26.9683 23.1627 18.8367C19.8074 6.82726 24 5.48766 24 5.48766L21.2816 2.63807C21.2816 2.63807 19.9548 3.83079 17.7612 3.83079C17.4663 3.83079 17.1597 3.80729 16.8354 3.76028C13.3799 3.24324 12.8373 1.12221 11.9941 0L12 0Z" fill="${
        gradients[game.team_away_id]
      }"/>
   </svg>
</div>
`;
    gamesList.appendChild(gameDiv);
  });
  document.getElementById("prev").disabled = currentRound === 1;
  document.getElementById("next").disabled = currentRound === roundsData.length;
}
function changeRound(direction) {
  if (direction === "next" && currentRound < roundsData.length) {
    currentRound++;
  } else if (direction === "prev" && currentRound > 1) {
    currentRound--;
  }
  renderGames();
}
document
  .getElementById("next")
  .addEventListener("click", () => changeRound("next"));
document
  .getElementById("prev")
  .addEventListener("click", () => changeRound("prev"));
fetchRounds();
