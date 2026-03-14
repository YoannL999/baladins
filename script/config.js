/** Modification simplifiée des Asides */

let annee_1_an ="2026" /** l'année en cours */
let piece_titre ="Impair et Père (Ray Cooney)" /** Titre de la pièce en cours */
let annee_2_ndt ="2026" /** l'année de la nuit du théatre en cours */
let date_ndt ="Samedi 4 avril 2026" /** la date de la nuit du théatre en cours */
let petite_piece_titre ="Moi je crois pas ! (Jean-Claude Grumberg)"

/**Application dans la page Web */

let piece = document.getElementById("piece")
piece.innerText = piece_titre

let annee_2 = document.getElementById("annee_2")
annee_2.innerText = annee_2_ndt

let date = document.getElementById("date")
date.innerText = date_ndt

let petite_piece = document.getElementById("petite_piece")
petite_piece.innerText = petite_piece_titre

let annee_1 = document.getElementById("annee_1")
annee_1.innerText = annee_1_an