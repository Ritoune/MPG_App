export function getAllClubs () {
    console.log("Recherche en cours...")
    const url = 'https://api.mpg.football/api/data/championship-clubs'    
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
  }