// Create variables here
// =========================================

let episode = {
    title : "Terminal TOR - Le soulevement des machines",
    duration : 120,
    hasBeenWatched : false
};

// =========================================

document.querySelector('#episode-info').innerText = `Episode: ${episode.title}
Duration: ${episode.duration} min
${episode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`