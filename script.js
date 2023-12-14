const filmInput = document.querySelector(".film-input");
const A_Voir = $( '<div class="A_Voir"></div>' );
const A_Venir = $( '<div class="A_Venir"></div>' );
const ChoixVoir = document.querySelector(".Choix_A_Voir");
const ChoixVenir = document.querySelector(".Choix_A_Venir");
const AfficheFilm = document.querySelector("#affiche");

$(".film-button").on("click",function(event){
    event.preventDefault();
    if (".film-input" !== null && ChoixVoir.checked ){
        let nouvelleDiv = document.createElement("div");
        nouvelleDiv.className = "film";
        nouvelleDiv.innerHTML =
                "<p class='tache' name='modifier' >" +
                filmInput.value +
                "</p>" + "<img class='image' src=" + AfficheFilm.value + "></img>";
       $('.A_Voir').append(nouvelleDiv);
       $(".A_Voir").css("height", "100px");
       $(".film").css("height", "50px");
} else if(".film-input" !== null && ChoixVenir.checked) {
    let nouvelleDiv = document.createElement("div");
            nouvelleDiv.className = "film";
            nouvelleDiv.innerHTML =
                    "<p class='tache' name='modifier' >" +
                    filmInput.value +
                    "</p>";
        $('.A_Venir').append(nouvelleDiv);
        $(".A_Venir").css("height", "100px");
       $(".film").css("height", "50px");
        console.log("clic")
} else {
    console.log("erreur");
}
})