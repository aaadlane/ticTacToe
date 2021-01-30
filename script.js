let current_player = "X"
let caseGame = document.querySelectorAll("#grid-play .cell")
//let player1 = document.getElementById("player1").value
let player2 = ""
var player1 = ""


caseGame.forEach(function(choix){
    player1 = localStorage.player1
    player2 = localStorage.player2

    let nextGame = 0
    //permet 1 seul click sur la div avec once:true
    choix.addEventListener("click", function(){
        //Au clic, je met X ou O dans la case correspondante
        event.target.innerText = current_player
       
        nextGame = winCondition(current_player)

        if (nextGame === true){
            window.open("./lastName.html", "_self")
        }

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


// On attribue un nom a chaque joueur
document.querySelector(".start").addEventListener("click",function(){
    console.log("blablabla")
    //player1=document.getElementById("player1").value
    localStorage.player1 = document.getElementById("player1").value
    console.log("joueur test :", localStorage.player1)
    localStorage.player2 = document.getElementById("player2").value

    window.open("./play.html","_self")

})

// function myFunction() {
//     var player1 = document.getElementById("player1").value;
//     var player2 = document.getElementById("player2").value;
//     submitOK = "true";
// }  


