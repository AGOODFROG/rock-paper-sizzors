let computerScore = 0
let playerScore = 0
function getComputerChoice(){
    const choice = ["rock","paper", "skizzors"]
    let out = choice[Math.floor(Math.random() * choice.length)]// the code in brackits picks the index 
    return out
}

function winLogic(winningInupt, playerSelection,computerSelection){
    if( playerSelection === computerSelection){
        return ""
    }
    else if(playerSelection === winningInupt){
        console.log(`${playerSelection} beets ${computerSelection}`)
       
       return true // win  
    }else{
        console.log(`${playerSelection} looses to ${computerSelection}`)
        return false
    }
}

function logic(message){

    if( message === undefined) message = "rock paper or skizzors"
    let computerSelection = getComputerChoice()
    let input = prompt(message);
    let playerSelection = input.toLowerCase()
    
    switch(computerSelection){
        case(playerSelection):{
            console.log("draw")
            logic("draw")
        }
        case('rock'):{
             return winLogic("paper", playerSelection,computerSelection) 
        }
        case("skizzors"):{
            return winLogic("rock", playerSelection,computerSelection) 
        }
        case("paper"):{
            return winLogic("skizzors", playerSelection,computerSelection)  
        }
       
    }
}
function game(){
 
    let playerWin
    for( let i = 0 ; i < 5; i++){
        console.log(`bot:${computerScore}, you:${playerScore}`)
        playerWin = logic()
        if(playerWin){
            playerScore++
        }else if(playerWin === "draw"){
            logic()
        }
        else{
            computerScore ++
        }
    }
  
    
}
game()

