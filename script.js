let caseGame = document.querySelectorAll("#grid-play .cell")

let player2 = ""
let player1 = ""

let choix1 = ""
let current_player = ""


caseGame.forEach(function(choix){

    // Les noms des players peuvent être utilisé grâce au local storage
    player1 = localStorage.player1
    player2 = localStorage.player2

    //le current player a son icone définie à la page précédente
    current_player = localStorage.choix1

    //Initialisation de la variable de fin
    let nextGame = 0
    //permet 1 seul click sur la div avec once:true
    choix.addEventListener("click", function(){
        //Au clic, je met X ou O dans la case correspondante
        event.target.innerText = current_player
        
        // La fonction retourne true si il y a victoire ou égalité
        nextGame = winCondition(current_player)
        
        //si la condition de victoire est réalisé, on bascule sur une autre page
        if (nextGame === true){
            window.open("./lastName.html", "_self")
        }

        //cchangement de joueur si la winCondition n'est pas réalisée
        if (current_player==="X"){
            current_player = "O"
        }  
        else {
            current_player = "X"
        }
        console.log("joueur 1 :", player1)
        console.log("joueur 2 :", player2)
    },{once:true})


})

function winCondition(icon){
    let tictactoeGrid = [...caseGame].map(choix => choix.innerText)
    console.log(tictactoeGrid)
    if (tictactoeGrid[0] === tictactoeGrid[1] && tictactoeGrid[0]=== tictactoeGrid[2] && tictactoeGrid[0] != ""){
        console.log(icon,"Partie gagné !")
        return true
    }
    else if (tictactoeGrid[3] === tictactoeGrid[4] && tictactoeGrid[3]=== tictactoeGrid[5] && tictactoeGrid[3] != ""){
        console.log(icon,"Partie gagné !")
        return true
    }
    else if (tictactoeGrid[6] === tictactoeGrid[7] && tictactoeGrid[6]=== tictactoeGrid[8] && tictactoeGrid[6] != ""){
        console.log(icon,"Partie gagné !")
        return true
    }
    else if (tictactoeGrid[0] === tictactoeGrid[3] && tictactoeGrid[0]=== tictactoeGrid[6] && tictactoeGrid[0] != ""){
        console.log(icon,"Partie gagné !")
        return true
    }
    else if (tictactoeGrid[1] === tictactoeGrid[4] && tictactoeGrid[1]=== tictactoeGrid[7] && tictactoeGrid[1] != ""){
        console.log(icon,"Partie gagné !")
        return true
    }
    else if (tictactoeGrid[2] === tictactoeGrid[5] && tictactoeGrid[2]=== tictactoeGrid[8] && tictactoeGrid[2] != ""){
        console.log(icon,"Partie gagné !")
        return true
    }
    else if (tictactoeGrid[0] === tictactoeGrid[4] && tictactoeGrid[0]=== tictactoeGrid[8] && tictactoeGrid[0] != ""){
        console.log(icon,"Partie gagné !")
        return true
    }
    else if (tictactoeGrid[2] === tictactoeGrid[4] && tictactoeGrid[2]=== tictactoeGrid[6] && tictactoeGrid[2] != ""){
        console.log(icon,"Partie gagné !")
        return true
    }
    else if (tictactoeGrid[0] != "" && tictactoeGrid[1] != "" && tictactoeGrid[2] != "" && tictactoeGrid[3] != "" && tictactoeGrid[4] != "" && tictactoeGrid[5] != "" && tictactoeGrid[6] != "" && tictactoeGrid[7] != "" && tictactoeGrid[8] != "" ){
        console.log("Draw, aucun gagnant")
        return true
    }
}

document.querySelector(".start").addEventListener("click",function(){

    localStorage.player1 = document.getElementById("player1").value
    console.log("joueur test :", localStorage.player1)
    localStorage.player2 = document.getElementById("player2").value

    choix1 = document.querySelector('input[name="player1icon"]:checked').value;
    var choix2 = document.querySelector('input[name="player2icon"]:checked').value;
    console.log("Le choix 1 est :",choix1)
    console.log("Le choix 2 est :",choix2)
    
    //on reste sur la page tant que les 2 icones sont identiques
    if (choix1 === choix2){
        alert("Deux joueurs ne peuvent pas avoir la même icone")
    }

    //je store le choix du joueur 1 pour utliser sont icone en premier dans la page de jeu
    if (choix1 != choix2){
        localStorage.choix1 = choix1
        window.open("./play.html","_self")
    }

    

})



