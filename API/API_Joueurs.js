//Fonction demandant une requête api pour obtenir la liste de tous les joueurs
export function getAllPlayers () {
    const url = 'https://api.mpg.football/api/data/championship-players-pool/1'    
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
  }
