const filmInput = document.querySelector(".film-input");
const ChoixVoir = document.querySelector(".Choix_A_Voir");
const ChoixVenir = document.querySelector(".Choix_A_Venir");
const affiche = document.querySelector("#affiche");
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

        $("#section-1").css("display", "flex"); // Affiche la section A_Voir 
        $("#section-2").css("display", "none"); // Cache la section A_Venir 
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

        $("#section-1").css("display", "none");
        $("#section-2").css("display", "flex");
} else {
    console.log("erreur");
}
});


//FONCTION SUPPRIMER
// Sur le clic du bouton supprimer on supprime la fiche
$(document).on("click", ".supprimer", function() {
        $(this).closest('.ficheFilm').remove(); 
});     // $(this)fait référence à l'élément actuel sur lequel l'événement a été déclenché, c'est-à-dire le bouton "Supprimer"
        // .closest('.ficheFilm'): Cette méthode recherche l'élément ascendant le plus proche qui correspond au sélecteur spécifié, 
        // dans ce cas, l'élément avec la classe ficheFilm. En d'autres termes, il remonte dans l'arborescence du DOM 
        // (Document Object Model) à partir du bouton "Supprimer" pour trouver le premier parent qui a la classe ficheFilm.

//FONCTIONS CHANGER SECTION
// Sur le clic du bouton changerVu on change la fiche dans la section Vu et on supprime les boutons modifier et vu
$(document).on("click", ".changerVu", function() {
        $(this).closest('.ficheFilm').appendTo('.Vu');  
        $(this).closest('.ficheFilm .boutonsCaches').remove();      
});    

// Sur le clic du bouton changerVoir on change la fiche dans la section A_Voir et on remplace le bouton "A voir" par "Vu"
$(document).on("click", ".changerVoir", function() {
        $(this).closest('.ficheFilm').appendTo('.A_Voir');        
        $(this).closest('.ficheFilm .changerVoir').replaceWith('<button class="changerVu">' + "Vu" + '</button>');        
});        

// Sur le clic du bouton modifier on demande un nouveau titre
$(document).on("click", ".modifier", function() {
        let nouveauTitre = prompt("Modifier le titre");
        
        while (nouveauTitre == "") // Tant que le titre est vide on redemande
                nouveauTitre = prompt("Veuillez entrer un titre");
        
        if (nouveauTitre !== '') { // On vérifie que le titre n'est pas vide et on affiche le nouveau titre
                $(this).closest('.ficheFilm').find('.titreFilm').text(nouveauTitre);
        }   
});  

//Fonction afficher/cacher sections
$(document).on("click", ".choix_A_Voir", function() {
        $("#section-1").css("display", "flex");
        $("#section-2").css("display", "none");
        $("#section-3").css("display", "none");
})
$(document).on("click", ".choix_A_Venir", function() {
        $("#section-1").css("display", "none");
        $("#section-2").css("display", "flex");
        $("#section-3").css("display", "none");
})
$(document).on("click", ".choix_Vu", function() {
        $("#section-1").css("display", "none");
        $("#section-2").css("display", "none");
        $("#section-3").css("display", "flex");
})