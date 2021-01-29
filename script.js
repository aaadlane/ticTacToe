//let grid_list = [[null,null,null],[null],[]]

let caseGame = document.querySelectorAll("#grid-play div")
console.log(caseGame)

caseGame.forEach(function(choix){
    choix.addEventListener("click", choicePlace)
})

function choicePlace(){
    console.log("YO!")  
}