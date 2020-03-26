// Create a class here
// =====================================
class Episode {
  constructor (title, duration, hasBeenWatched){
    this.title = title;
    this.duration = duration;
    this.hasBeenWatched = hasBeenWatched;
  }
}

 let firstEpisode = new Episode("Debout les gars", 45, true);
 console.log(firstEpisode);
 console.log(firstEpisode.title);
 console.log(firstEpisode.duration);
 console.log(firstEpisode.hasBeenWatched);
 let secondEpisode = new Episode("Reveillez-vous", 42, true);
 let thirdEpisode = new Episode("Il va falloir en mettre un coup", 69, false);
// =====================================

document.querySelector('#first-episode-info').innerText = `Episode: ${firstEpisode.title}
Duration: ${firstEpisode.duration} min
${firstEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;

document.querySelector('#second-episode-info').innerText = `Episode: ${secondEpisode.title}
Duration: ${secondEpisode.duration} min
${secondEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;

document.querySelector('#third-episode-info').innerText = `Episode: ${thirdEpisode.title}
Duration: ${thirdEpisode.duration} min
${thirdEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;