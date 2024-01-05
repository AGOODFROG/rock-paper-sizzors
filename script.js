
function getComputerChoice(){
    const choice = ["rock","paper", "sizzors"]
    let out = choice[Math.floor(Math.random() * choice.length)]// the code in brackits picks the index 

    return out

}
getComputerChoice()

let computerSelection = getComputerChoice()
let playerSelection = prompt("test");
playerSelection = playerSelection.toLocaleLowerCase

function winLogic(winningInupt){
    if(playerSelection === winningInupt){
        console.log(`${playerSelection} beets ${computerSelection}`)
       return true // win
       
    }else{
        console.log(`${playerSelection} looses to ${computerSelection}`)
        return false
    }
}

function logic(computerSelection, playerSelection){

    
    
    switch(computerSelection){
        case(playerSelection):{
            console.log("draw")
            playerSelection = prompt("draw pick again")
            logic(computerSelection,playerSelection)
            break
        }
        case('rock'):{
             return winLogic("paper")
        }
        case("sizzors"):{
            return winLogic("rock") 
        }
        case("paper"):{
            return winLogic("sizzors")  
        }
    }
}
function game(){
    let computerScore = 0
    let playerScore = 0
    let playerWin
    for( let i = 0 ; i < 5; i++){
        playerWin = logic()
        if(playerWin){
            playerScore++
        }else{
            computerScore ++
        }
    }
}
game()

