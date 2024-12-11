// Sélection des éléments HTML nécessaires
const filmInput = document.querySelector(".film-input"); 
const ChoixVoir = document.querySelector(".Choix_A_Voir");
const ChoixVenir = document.querySelector(".Choix_A_Venir");
const listeCategories = document.querySelector("#listeCategories");

let compteurDiv = 1; // Compteur pour générer des identifiants uniques pour les fiches
let temporaryImageURL = ""; // Stocke temporairement l'URL de l'image sélectionnée

// Gestionnaire d'événement pour la sélection d'une image
$("#affiche").on("change", function() {
    if (this.files && this.files[0]) {
        const reader = new FileReader(); // Crée un lecteur de fichiers
        reader.onload = function(e) {
            temporaryImageURL = e.target.result; // Stocke l'URL de l'image dans une variable temporaire
        };
        reader.readAsDataURL(this.files[0]); // Convertit le fichier sélectionné en URL
    } else {
        temporaryImageURL = ""; // Réinitialise si aucun fichier n'est sélectionné
    }
});

// Gestionnaire d'événement pour le bouton envoyer
$(".film-button").on("click", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Vérifie que les champs requis sont remplis
    if (filmInput.value !== "" && (ChoixVoir.checked || ChoixVenir.checked)) {
        const sectionClass = ChoixVoir.checked ? ".A_Voir" : ".A_Venir"; // Détermine la section cible
        const buttonClass = ChoixVoir.checked ? "changerVu" : "changerVoir"; // Classe du bouton
        const buttonText = ChoixVoir.checked ? "Vu" : "A voir"; // Texte du bouton

        // Crée une fiche pour le film
        $("<div></div>", {
            id: `numDiv${compteurDiv}`, // Attribue un ID unique
            class: "ficheFilm" // Classe CSS pour le style
        }).appendTo(sectionClass); // Ajoute la fiche à la section cible

        // Ajoute le contenu de la fiche
        $(`#numDiv${compteurDiv}`).html(`
            <p class="titreFilm" name="titre">${filmInput.value}</p>
            <p class="categorieFilm" name="categorie">Catégorie: ${listeCategories.value}</p>
            <img class="afficheFilm" name="affiche" src="${temporaryImageURL}" alt="Affiche du film" />
            <div class="boutons">
                <div class="boutonsCaches">
                    <button class="modifier">Modifier</button>
                    <button class="${buttonClass}">${buttonText}</button>
                </div>
                <button class="supprimer">Supprimer</button>
            </div>
        `);

        compteurDiv++; // Incrémente le compteur pour le prochain film
        temporaryImageURL = ""; // Réinitialise l'URL temporaire

        // Affiche la section correspondante
        if (ChoixVoir.checked) {
            $("#section-1").css("display", "flex");
            $("#section-2, #section-3").css("display", "none");
        } else {
            $("#section-2").css("display", "flex");
            $("#section-1, #section-3").css("display", "none");
        }
    } else {
        console.log("Erreur : Veuillez remplir le formulaire correctement.");
    }
});

// Gestionnaire pour supprimer une fiche
$(document).on("click", ".supprimer", function() {
    $(this).closest(".ficheFilm").remove(); // Supprime la fiche correspondante
});

// Gestionnaire pour déplacer une fiche vers la section "Vu"
$(document).on("click", ".changerVu", function() {
    $(this).closest(".ficheFilm").appendTo(".Vu"); // Déplace la fiche
    $(this).closest(".boutonsCaches").remove(); // Supprime les boutons non nécessaires
});

// Gestionnaire pour déplacer une fiche vers la section "À voir"
$(document).on("click", ".changerVoir", function() {
    $(this).closest(".ficheFilm").appendTo(".A_Voir"); // Déplace la fiche
    $(this).replaceWith('<button class="changerVu">Vu</button>'); // Remplace le bouton
});

// Gestionnaire pour modifier le titre d'une fiche
$(document).on("click", ".modifier", function() {
    let nouveauTitre = prompt("Modifier le titre"); // Invite l'utilisateur à saisir un nouveau titre
    while (nouveauTitre === "") {
        nouveauTitre = prompt("Veuillez entrer un titre"); // Redemande si le champ est vide
    }
    if (nouveauTitre) {
        $(this).closest(".ficheFilm").find(".titreFilm").text(nouveauTitre); // Met à jour le titre
    }
});

// Gestionnaires pour afficher/cacher les sections
$(".choix_A_Voir").on("click", function() {
    $("#section-1").css("display", "flex");
    $("#section-2, #section-3").css("display", "none");
});

$(".choix_A_Venir").on("click", function() {
    $("#section-2").css("display", "flex");
    $("#section-1, #section-3").css("display", "none");
});

$(".choix_Vu").on("click", function() {
    $("#section-3").css("display", "flex");
    $("#section-1, #section-2").css("display", "none");
});
