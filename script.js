let caseGame = document.querySelectorAll("#grid-play .cell")

let player2 = ""
let player1 = ""

let choix1 = ""
let choix2 = ""

let current_player = localStorage.choix1

let random_pick = 0
let turnPlayer = 1
let tictactoeGridIA

let winner = ""

caseGame.forEach(function (choix) {

    // Les noms des players peuvent être utilisé grâce au local storage
    player1 = localStorage.player1
    player2 = localStorage.player2

    //le current player a son icone définie à la page précédente

    // on affiche le nom des joueur dans le cadre destiné à le recevoir id player
    var writePlayer1 = document.querySelector("#player1")
    let text1 = localStorage.player1
    writePlayer1.innerHTML = text1

    var writePlayer2 = document.querySelector("#player2")
    let text2 = localStorage.player2
    writePlayer2.innerHTML = text2

    // la meme chose qu'au dessus pour les icones
    var writeicon1 = document.querySelector("#player1-icon")
    let icon1 = localStorage.choix1
    writeicon1.innerHTML = icon1

    var writeicon2 = document.querySelector("#player2-icon")
    let icon2 = localStorage.choix2
    writeicon2.innerHTML = icon2

    //Initialisation de la variable de fin
    let nextGame = 0

    if(player1==="IA" || player2 === "IA"){
        tictactoeGridIA = [...caseGame].map(choix => choix.innerText)
        console.log("Grille de jeu",tictactoeGridIA)
        if (turnPlayer === 1){
            turnPlayer = turnPlayer + 1
            
            //sleep(500)
            console.log("current player :",current_player)

            //Initialisation de la variable de fin
            let nextGame = 0
            
            let random_pick = Math.floor(Math.random() * caseGame.length);
            console.log(random_pick)
            caseGame[random_pick].innerText = current_player
            nextGame = winCondition(current_player)
            //changement de joueur si la winCondition n'est pas réalisée
            if (current_player==="X"){
                current_player = "O"

            }  
            else {
                current_player = "X"
            }
            
        }
        tictactoeGridIA = [...caseGame].map(choix => choix.innerText)
        console.log("Grille de jeu",tictactoeGridIA)  

        choix.addEventListener("click", function(){
            tictactoeGridIA = [...caseGame].map(choix => choix.innerText)
            //Au clic, je met X ou O dans la case correspondante
            event.target.innerText = current_player


            // La fonction retourne true si il y a victoire ou égalité
            nextGame = winCondition(current_player)
            
            //si la condition de victoire est réalisé, on bascule sur une autre page
            if (nextGame === true){
                localStorage.winner = current_player
                console.log("Le joueur humain a gagné",current_player)
                window.open("./lastName.html", "_self")
            }
            
            if (nextGame != true){
                //changement de joueur si la winCondition n'est pas réalisée
                if (current_player==="X"){
                    current_player = "O"
                }  
                else {
                    current_player = "X"
                }
            }
            turnPlayer = turnPlayer + 1
            console.log ("tour a jouer", turnPlayer)

            if (turnPlayer === 3){
                tictactoeGridIA = [...caseGame].map(choix => choix.innerText)
                turnPlayer = turnPlayer + 1
                
                
                console.log("Tour 3: Remplissage Tictactoe Grid",tictactoeGridIA)
    
                //Initialisation de la variable de fin
                let nextGame = 0
                random_pick = Math.floor(Math.random() * caseGame.length);
                while (tictactoeGridIA[random_pick] === "X" || tictactoeGridIA[random_pick] === "O"){ 
                    random_pick = Math.floor(Math.random() * caseGame.length);
                    console.log(random_pick)
                }
                caseGame[random_pick].innerText = current_player
                nextGame = winCondition(current_player)
                if (nextGame === true) {
                    localStorage.winner = current_player
                    window.open("./lastName.html", "_self")
                }
                //changement de joueur si la winCondition n'est pas réalisée
                if (current_player==="X"){
                    current_player = "O"
    
                }  
                else {
                    current_player = "X"
                }
                
            }

            if (turnPlayer === 5){
                tictactoeGridIA = [...caseGame].map(choix => choix.innerText)
                turnPlayer = turnPlayer + 1
                
                
                console.log("current player :",current_player)
    
                //Initialisation de la variable de fin
                let nextGame = 0
                
                random_pick = Math.floor(Math.random() * caseGame.length);
                while (tictactoeGridIA[random_pick] === "X" || tictactoeGridIA[random_pick] === "O"){ 
                    random_pick = Math.floor(Math.random() * caseGame.length);
                    console.log(random_pick)
                }

                caseGame[random_pick].innerText = current_player
                nextGame = winCondition(current_player)
                if (nextGame === true) {
                    localStorage.winner = current_player
                    console.log("Le joueur IA a gagné 5",current_player)

                    window.open("./lastName.html", "_self")
                }
                //changement de joueur si la winCondition n'est pas réalisée
                if (current_player==="X"){
                    current_player = "O"
    
                }  
                else {
                    current_player = "X"
                }
                
            }

            if (turnPlayer === 7){
                tictactoeGridIA = [...caseGame].map(choix => choix.innerText)
                turnPlayer = turnPlayer + 1
                
                
                //console.log("current player :",current_player)
    
                //Initialisation de la variable de fin
                let nextGame = 0
                
                random_pick = Math.floor(Math.random() * caseGame.length);
                console.log("randompick before loop",random_pick)
                while (tictactoeGridIA[random_pick] === "X" || tictactoeGridIA[random_pick] === "O"){ 
                    random_pick = Math.floor(Math.random() * caseGame.length);
                    console.log(random_pick)
                }
                console.log("randompick after loop",random_pick)
                caseGame[random_pick].innerText = current_player
                nextGame = winCondition(current_player)
                if (nextGame === true) {
                    localStorage.winner = current_player
                    console.log("Le joueur IA a gagné 7",current_player)
                    window.open("./lastName.html", "_self")
                }
                //changement de joueur si la winCondition n'est pas réalisée
                if (current_player==="X"){
                    current_player = "O"
    
                }  
                else {
                    current_player = "X"
                }
                
            }

            if (turnPlayer === 9){
                tictactoeGridIA = [...caseGame].map(choix => choix.innerText)
                turnPlayer = turnPlayer + 1
                
                
                console.log("current player :",current_player)
    
                //Initialisation de la variable de fin
                let nextGame = 0
                
                random_pick = Math.floor(Math.random() * caseGame.length);
                while (tictactoeGridIA[random_pick] === "X" || tictactoeGridIA[random_pick] === "O"){ 
                    random_pick = Math.floor(Math.random() * caseGame.length);
                    console.log(random_pick)
                }
                caseGame[random_pick].innerText = current_player
                nextGame = winCondition(current_player)
                if (nextGame === true) {
                    localStorage.winner = current_player
                    console.log("Le joueur IA a gagné 9",current_player)
                    window.open("./lastName.html", "_self")
                }
                //changement de joueur si la winCondition n'est pas réalisée
                if (current_player==="X"){
                    current_player = "O"
    
                }  
                else {
                    current_player = "X"
                }
                
            }

            if (turnPlayer === 11){
                tictactoeGridIA = [...caseGame].map(choix => choix.innerText)
                turnPlayer = turnPlayer + 1
                
                
                console.log("current player :",current_player)
    
                //Initialisation de la variable de fin
                let nextGame = 0
                
                random_pick = Math.floor(Math.random() * caseGame.length);
                while (tictactoeGridIA[random_pick] === "X" || tictactoeGridIA[random_pick] === "O"){ 
                    random_pick = Math.floor(Math.random() * caseGame.length);
                    console.log(random_pick)
                }
                caseGame[random_pick].innerText = current_player
                nextGame = winCondition(current_player)
                if (nextGame === true) {
                    localStorage.winner = current_player
                    console.log("Le joueur IA a gagné 11",current_player)
                    window.open("./lastName.html", "_self")
                }
                //changement de joueur si la winCondition n'est pas réalisée
                if (current_player==="X"){
                    current_player = "O"
    
                }  
                else {
                    current_player = "X"
                }
                
            }

            if (turnPlayer === 13){
                tictactoeGridIA = [...caseGame].map(choix => choix.innerText)
                turnPlayer = turnPlayer + 1
                
                
                console.log("current player :",current_player)
    
                //Initialisation de la variable de fin
                let nextGame = 0
                
                random_pick = Math.floor(Math.random() * caseGame.length);
                while (tictactoeGridIA[random_pick] === "X" || tictactoeGridIA[random_pick] === "O"){ 
                    random_pick = Math.floor(Math.random() * caseGame.length);
                    console.log(random_pick)
                }
                caseGame[random_pick].innerText = current_player
                nextGame = winCondition(current_player)
                if (nextGame === true) {
                    localStorage.winner = current_player
                    window.open("./lastName.html", "_self")
                }
                //changement de joueur si la winCondition n'est pas réalisée
                if (current_player==="X"){
                    current_player = "O"
    
                }  
                else {
                    current_player = "X"
                }
                
            }

            }
            ,{once:true})
    }

    if(player1 != "IA" && player2 != "IA"){
        //permet 1 seul click sur la div avec once:true
        choix.addEventListener("click", function () {
            //Au clic, je met X ou O dans la case correspondante
            event.target.innerText = current_player




            // La fonction retourne true si il y a victoire ou égalité
            nextGame = winCondition(current_player)

            //si la condition de victoire est réalisé, on bascule sur une autre page
            if (nextGame === true) {
                localStorage.winner = current_player
                window.open("./lastName.html", "_self")
            }

            //cchangement de joueur si la winCondition n'est pas réalisée
            if (current_player === "X") {
                current_player = "O"
                document.querySelector(".now-playing").style.backgroundColor = "black"
                document.querySelector(".now-playing2").style.backgroundColor = "white"

            } else {
                current_player = "X"
                document.querySelector(".now-playing").style.backgroundColor = "white"
                document.querySelector(".now-playing2").style.backgroundColor = "black"


            }
            console.log("joueur 1 :", player1)
            console.log("joueur 2 :", player2)
        }, {
            once: true
        })
    }
})

function winCondition(icon) {
    let tictactoeGrid = [...caseGame].map(choix => choix.innerText)
    console.log(tictactoeGrid)
    if (tictactoeGrid[0] === tictactoeGrid[1] && tictactoeGrid[0] === tictactoeGrid[2] && tictactoeGrid[0] != "") {
        console.log(icon, "Partie gagné !")
        return true
    } else if (tictactoeGrid[3] === tictactoeGrid[4] && tictactoeGrid[3] === tictactoeGrid[5] && tictactoeGrid[3] != "") {
        console.log(icon, "Partie gagné !")
        return true
    } else if (tictactoeGrid[6] === tictactoeGrid[7] && tictactoeGrid[6] === tictactoeGrid[8] && tictactoeGrid[6] != "") {
        console.log(icon, "Partie gagné !")
        return true
    } else if (tictactoeGrid[0] === tictactoeGrid[3] && tictactoeGrid[0] === tictactoeGrid[6] && tictactoeGrid[0] != "") {
        console.log(icon, "Partie gagné !")
        return true
    } else if (tictactoeGrid[1] === tictactoeGrid[4] && tictactoeGrid[1] === tictactoeGrid[7] && tictactoeGrid[1] != "") {
        console.log(icon, "Partie gagné !")
        return true
    } else if (tictactoeGrid[2] === tictactoeGrid[5] && tictactoeGrid[2] === tictactoeGrid[8] && tictactoeGrid[2] != "") {
        console.log(icon, "Partie gagné !")
        return true
    } else if (tictactoeGrid[0] === tictactoeGrid[4] && tictactoeGrid[0] === tictactoeGrid[8] && tictactoeGrid[0] != "") {
        console.log(icon, "Partie gagné !")
        return true
    } else if (tictactoeGrid[2] === tictactoeGrid[4] && tictactoeGrid[2] === tictactoeGrid[6] && tictactoeGrid[2] != "") {
        console.log(icon, "Partie gagné !")
        return true
    } else if (tictactoeGrid[0] != "" && tictactoeGrid[1] != "" && tictactoeGrid[2] != "" && tictactoeGrid[3] != "" && tictactoeGrid[4] != "" && tictactoeGrid[5] != "" && tictactoeGrid[6] != "" && tictactoeGrid[7] != "" && tictactoeGrid[8] != "") {
        console.log("Draw, aucun gagnant")
        return true
    }
}

document.querySelector(".start").addEventListener("click", function () {

    localStorage.player1 = document.getElementById("player1").value
    console.log("joueur test :", localStorage.player1)
    localStorage.player2 = document.getElementById("player2").value

    var choix1 = document.querySelector('input[name="player1icon"]:checked').value;
    var choix2 = document.querySelector('input[name="player2icon"]:checked').value;
    console.log("Le choix 1 est :", choix1)
    console.log("Le choix 2 est :", choix2)



    //on reste sur la page tant que les 2 icones sont identiques
    if (choix1 === choix2) {
        alert("Deux joueurs ne peuvent pas avoir la même icone")
    }

    //je store le choix du joueur 1 pour utliser sont icone en premier dans la page de jeu
    if (choix1 != choix2) {
        localStorage.choix1 = choix1
        localStorage.choix2 = choix2
        window.open("./play.html", "_self")
    }



})


