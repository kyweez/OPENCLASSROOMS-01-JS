// Create variables here
// =========================================

let episodeTitle = "La revanche des slips";
let episodeDuration = 42;
let hasBeenWatched = true;

// =========================================

document.querySelector('#episode-info').innerText = `Episode: ${episodeTitle}
Duration: ${episodeDuration} min
${hasBeenWatched ? 'Already watched' : 'Not yet watched'}`