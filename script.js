const filmInput = document.querySelector(".film-input");
const ChoixVoir = document.querySelector(".Choix_A_Voir");
const ChoixVenir = document.querySelector(".Choix_A_Venir");
const AfficheFilm = document.querySelector("#affiche");
const listeCategories = document.querySelector("#listeCategories");
const supprimer = document.querySelectorAll(".supprimer");

let compteurDiv = 1;

$(".film-button").on("click", function(event){
    event.preventDefault();
    if (".film-input" !== null && ChoixVoir.checked ){
        $("<div></div>", {"id": `numDiv${compteurDiv}`, 
                          "class": "ficheFilm"}).appendTo('.A_Voir');
        $(`#numDiv${compteurDiv}`).html('<p class="titreFilm" name="modifier" >' + filmInput.value + '</p>' 
            + '<p class="categorieFilm" name="modifier">' + "Catégorie: " + listeCategories.value + '</p>' 
            + '<div class="boutons"><button class="modifier">' + "Modifier" + '</button>' + '<button class="supprimer">' + "Supprimer" + '</button>'
            +'<button>' + "Vu" + '</button>');
        compteurDiv++;
} else if(".film-input" !== null && ChoixVenir.checked) {
        $("<div></div>", {"id": `numDiv${compteurDiv}`, 
                          "class": "ficheFilm"}).appendTo('.A_Venir');
        $(`#numDiv${compteurDiv}`).html('<p class="titreFilm" name="modifier" >' + filmInput.value + '</p>' 
            + '<p class="categorieFilm" name="modifier">' + "Catégorie: " + listeCategories.value + '</p>' 
            + '<div class="boutons"><button>' + "Modifier" + '</button>' + '<button class="supprimer">' + "Supprimer" + '</button>'
            +'<button>' + "Vu" + '</button>');
        compteurDiv++;
} else {
    console.log("erreur");
}
})

$(document).on("click", ".supprimer", function() {
        $(this).closest('.ficheFilm').remove();
    console.log('click');
});
