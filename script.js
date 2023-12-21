const filmInput = document.querySelector(".film-input");
const ChoixVoir = document.querySelector(".Choix_A_Voir");
const ChoixVenir = document.querySelector(".Choix_A_Venir");
const AfficheFilm = document.querySelector("#affiche");
const listeCategories = document.querySelector("#listeCategories");
const supprimer = document.querySelectorAll(".supprimer");

let compteurDiv = 1; // Variable qui permet de compter le nombre de films

// Sur le clic du bouton envoyer 
$(".film-button").on("click", function(event){
    event.preventDefault(); // Empeche la page de se recharger

    if (".film-input" !== null && ChoixVoir.checked ){ // Vérifie que le film a bien été saisi dans la barre de recherche et que la case "A voir" est coche
        $("<div></div>", {"id": `numDiv${compteurDiv}`, // Crée une div pour chaque film avec un id différent
                          "class": "ficheFilm"}).appendTo('.A_Voir'); // Ajoute la div au conteneur
                           
        $(`#numDiv${compteurDiv}`).html('<p class="titreFilm" name="titre" >' + filmInput.value + '</p>' 
            + '<p class="categorieFilm" name="categorie">' + "Catégorie: " + listeCategories.value + '</p>' 
            + '<div class="boutons"> <div class="boutonsCaches"><button class="modifier">' + "Modifier" + '</button>' 
            + '<button class="changerVu">' + "Vu" + '</button></div>'
            + '</button>' + '<button class="supprimer">' + "Supprimer" + '</button>'); // Ajoute le contenu
             
        compteurDiv++; // Incrémente le compteur de div 
        console.log('clic')
}
else if(".film-input" !== null && ChoixVenir.checked) { // On fait pareil mais pour la case "A venir"
        $("<div></div>", {"id": `numDiv${compteurDiv}`, 
                          "class": "ficheFilm"}).appendTo('.A_Venir');

        $(`#numDiv${compteurDiv}`).html('<p class="titreFilm" name="titre" >' + filmInput.value + '</p>' 
            + '<p class="categorieFilm" name="categorie">' + "Catégorie: " + listeCategories.value + '</p>' 
            + '<div class="boutons"> <div class="boutonsCaches"><button class="modifier">' + "Modifier" + '</button>' 
            + '<button class="changerVoir">' + "A voir" + '</button></div>'
            + '</button>' + '<button class="supprimer">' + "Supprimer" + '</button>');
            
        compteurDiv++;
} else {
    console.log("erreur");
}
})

//FONCTION SUPPRIMER
// Sur le clic du bouton supprimer on supprime la fiche
$(document).on("click", ".supprimer", function() {
        $(this).closest('.ficheFilm').remove(); 
});     // $(this)fait référence à l'élément actuel sur lequel l'événement a été déclenché, c'est-à-dire le bouton "Supprimer"
        // .closest('.ficheFilm'): Cette méthode recherche l'élément ascendant le plus proche qui correspond au sélecteur spécifié, 
        // dans ce cas, l'élément avec la classe ficheFilm. En d'autres termes, il remonte dans l'arborescence du DOM 
        // (Document Object Model) à partir du bouton "Supprimer" pour trouver le premier parent qui a la classe ficheFilm.

$(document).on("click", ".changerVu", function() {
        $(this).closest('.ficheFilm').appendTo('.Vu');  
        $(this).closest('.ficheFilm .boutonsCaches').remove();      
});    

$(document).on("click", ".changerVoir", function() {
        $(this).closest('.ficheFilm').appendTo('.A_Voir');        
        $(this).closest('.ficheFilm .changerVoir').replaceWith('<button class="changerVu">' + "Vu" + '</button>');        
});        
