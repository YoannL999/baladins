/** Modification simplifiée des Asides */

/**let piece_titre ="Le Repas des Fauves (Vahé Katcha)" /** Titre de la pièce en cours */
let piece_titre = "infos à venir"
let annee_ndt ="2027" /** l'année de la nuit du théatre en cours */
let date_ndt ="Samedi 10 avril 2027" /** la date de la nuit du théatre en cours */
let petite_piece_titre ="Moi je crois pas ! (Jean-Claude Grumberg)" /** la petite pièce */

/**Application dans la page Web */

let piece = document.getElementById("piece")
piece.innerText = piece_titre

let annee = document.getElementById("annee")
annee.innerText = annee_ndt

let date = document.getElementById("date")
date.innerText = date_ndt

let petite_piece = document.getElementById("petite_piece")
petite_piece.innerText = petite_piece_titre