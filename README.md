********  Test Technique MPG - Henri Petrelli ********

- Cette CRNA utilise les librairies react-navigation et react-native-gesture-handler. Au moindre de souci d'installation de ces packages, vous pouvez jeter un coup d'oeil à ces documentations : 

    - react-native-gesture-handler : https://docs.swmansion.com/react-native-gesture-handler/docs/
    - react-navigation : https://reactnavigation.org/docs/getting-started/


- De plus, la CRNA a été testée et conçue sur un émulateur Android, géré par Expo : https://docs.expo.dev/


- View 1 : Presentation 
Cette view sert uniquement à présenter le contexte.

En appyant sur 'Decouvrir la béta', vous serez redirigé vers la seconde vue. 


- View 2 : JoueursListe
Cette view est composée de deux grandes parties : filtrage et résultats.
Vous pouvez écrire une chaine de caractère dans le TextInput 'Nom du joueur', et choisir un poste de joueur grâce au Picker 'Sélectionner un poste'.

Vous pouvez utiliser un seul type de filtrage (nom ou poste), ou bien les deux ensemble.

Après avoir rempli la champs de rechetche, il suffit d'appuyer sur 'Rechercher', et la liste de joueurs se mettra à jour en fonction de la recherche. 

A noter que si vous ecrivez une chaîne de caractères dans la barre de recherche, les noms affichés sont ceux qui contiennent ces caractères, et non qui commencent par cette chaine de caractère. Par exemple, si vous tapez "Mba", ne soyez pas surprise en voyant Jonathan Bamba apparaitre, et pas seulement Kylian Mbappe. Je me suis inspiré de la fonctionnalité 'Data' de l'application MPG

En appuyant sur un joueur de la liste, vous serez redirigé vers la view 3


- View 3 : DetailPlayer
Cette vue correspond au données d'un joueur sélectionné par l'utilisateur. 

A noter que je n'ai pu me servir que des données contenues dans la requête API donnant la liste des joueurs (
https://api.mpg.football/api/data/championship-players-pool/1
). En effet, la requête api sensé me donner les statistiques d'un joueur (https://api.mpg.football/api/data/championship-player-stats/mpg_championship_player_220160/summary
) ne contenait pas grand chose (ou alors je ne suis pas bon): {"id":"mpg_championship_player_stats_summary_220160","type":"mpg_championship_player_stats_summary","statsSeasons":["2020","2021"]}


Pour toute question sur la prise en main de cette mini application mobile, n'hésitez pas me contacter ! 