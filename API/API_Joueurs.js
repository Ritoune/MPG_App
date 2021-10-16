export function getAllPlayers () {
    console.log("Recherche en cours...")
    const url = 'https://api.mpg.football/api/data/championship-players-pool/1'    
  return fetch(url)
    .then((response) => response.json(),console.log("C'est good"))
    .catch((error) => console.error(error))
  }

  /*export function getImageFromApi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
  }

  export function getFilmDetailFromApi (id) {
    return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr')
      .then((response) => response.json())
      .catch((error) => console.error(error));
  }*/