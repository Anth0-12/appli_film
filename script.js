const filmInput = document.querySelector(".film-input"); 
const ChoixVoir = document.querySelector(".Choix_A_Voir");
const ChoixVenir = document.querySelector(".Choix_A_Venir");
const listeCategories = document.querySelector("#listeCategories");

let compteurDiv = 1; // Variable qui permet de compter le nombre de films
let temporaryImageURL = ""; // Stocke temporairement l'image sélectionnée

// Gestionnaire d'événement pour l'input file
$("#affiche").on("change", function() {
    if (this.files && this.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            temporaryImageURL = e.target.result; // Stocker temporairement l'URL de l'image
        };
        reader.readAsDataURL(this.files[0]);
    } else {
        temporaryImageURL = ""; // Réinitialiser si aucun fichier n'est sélectionné
    }
});

// Sur le clic du bouton envoyer
$(".film-button").on("click", function(event) {
    event.preventDefault(); // Empêche la page de se recharger

    // Vérifie que le film a bien été saisi dans la barre de recherche
    if (filmInput.value !== "" && (ChoixVoir.checked || ChoixVenir.checked)) {
        const sectionClass = ChoixVoir.checked ? ".A_Voir" : ".A_Venir";
        const buttonClass = ChoixVoir.checked ? "changerVu" : "changerVoir";
        const buttonText = ChoixVoir.checked ? "Vu" : "A voir";

        // Crée une div pour chaque film avec un id différent
        $("<div></div>", {
            id: `numDiv${compteurDiv}`,
            class: "ficheFilm"
        }).appendTo(sectionClass);

        // Ajoute le contenu à la fiche
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

        compteurDiv++; // Incrémenter le compteur de div
        temporaryImageURL = ""; // Réinitialiser l'URL temporaire

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

// Supprimer une fiche
$(document).on("click", ".supprimer", function() {
    $(this).closest(".ficheFilm").remove();
});

// Changer la section vers "Vu"
$(document).on("click", ".changerVu", function() {
    $(this).closest(".ficheFilm").appendTo(".Vu");
    $(this).closest(".boutonsCaches").remove();
});

// Changer la section vers "À voir"
$(document).on("click", ".changerVoir", function() {
    $(this).closest(".ficheFilm").appendTo(".A_Voir");
    $(this).replaceWith('<button class="changerVu">Vu</button>');
});

// Modifier le titre
$(document).on("click", ".modifier", function() {
    let nouveauTitre = prompt("Modifier le titre");
    while (nouveauTitre === "") {
        nouveauTitre = prompt("Veuillez entrer un titre");
    }
    if (nouveauTitre) {
        $(this).closest(".ficheFilm").find(".titreFilm").text(nouveauTitre);
    }
});

// Afficher/Cacher sections
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
