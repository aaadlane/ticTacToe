// //get data from input

// var radios = document.getElementsByName('rbtn');

// for (var i = 0, length = radios.length; i < length; i++) {
//     if (radios[i].checked) {
//         alert(radios[i].value);
//         break;
//     }
// }


// let caseGame = document.querySelectorAll("#grid-play div")
// console.log(caseGame)

// let x = null


// caseGame.forEach(function(choix){
//     x = choix
//     //permet 1 seul click sur la div
//     choix.addEventListener("click", choicePlace,{once:true})
// })


// // Fonction qui retourne l'index de la case selectionné
// function choicePlace(event){

//     let index;
//     caseGame.forEach((element,i)=> {
//         if (event.target === element){
//             console.log(element,i)
//             index=i

//         }
//     })
// }



//code david


let current_player = "X"
let caseGame = document.querySelectorAll("#grid-play .cell")


caseGame.forEach(function(choix){

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
    }
    else if (tictactoeGrid[6] === tictactoeGrid[7] && tictactoeGrid[6]=== tictactoeGrid[8] && tictactoeGrid[6] != ""){
        console.log(icon,"Partie gagné !")
    }
    else if (tictactoeGrid[0] === tictactoeGrid[3] && tictactoeGrid[0]=== tictactoeGrid[6] && tictactoeGrid[0] != ""){
        console.log(icon,"Partie gagné !")
    }
    else if (tictactoeGrid[1] === tictactoeGrid[4] && tictactoeGrid[1]=== tictactoeGrid[7] && tictactoeGrid[1] != ""){
        console.log(icon,"Partie gagné !")
    }
    else if (tictactoeGrid[2] === tictactoeGrid[5] && tictactoeGrid[2]=== tictactoeGrid[8] && tictactoeGrid[2] != ""){
        console.log(icon,"Partie gagné !")
    }
    else if (tictactoeGrid[0] === tictactoeGrid[4] && tictactoeGrid[0]=== tictactoeGrid[8] && tictactoeGrid[0] != ""){
        console.log(icon,"Partie gagné !")
    }
    else if (tictactoeGrid[2] === tictactoeGrid[4] && tictactoeGrid[2]=== tictactoeGrid[6] && tictactoeGrid[2] != ""){
        console.log(icon,"Partie gagné !")
    }
    else if (tictactoeGrid[0] != "" && tictactoeGrid[1] != "" && tictactoeGrid[2] != "" && tictactoeGrid[3] != "" && tictactoeGrid[4] != "" && tictactoeGrid[5] != "" && tictactoeGrid[6] != "" && tictactoeGrid[7] != "" && tictactoeGrid[8] != "" ){
        console.log("Draw, aucun gagnant")
    }
}
//event.target.innerText = current_player