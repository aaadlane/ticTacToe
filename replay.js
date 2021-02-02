function show_victory(){
    var writeVictory = document.querySelector(".victory")
    let text = ""

    if (localStorage.winner === localStorage.choix1){
        text = localStorage.player1        
    }
    else {
        console.log("gloubiboulga",text)
        text = localStorage.player2   
    }

    writeVictory.innerHTML = text + " a gagné"
    
}

show_victory()