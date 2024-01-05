
function getComputerChoice(){
    const choice = ["rock","paper", "sizzors"]
    //let out = choice[Math.floor(Math.random() * choice.length)]// the code in brackits picks the index 
     let out = "sizzors"
    return out

}
getComputerChoice()

let computerSelection = getComputerChoice()
let playerSelection = prompt("test");

function winLogic(winningInupt){
    if(playerSelection === winningInupt){
        console.log("you win")
    }else{
        console.log("you loose")
    }
}

function logic(computerSelection, playerSelection){
    computerSelection = computerSelection.toLowerCase()
    switch(computerSelection){
        case(playerSelection):{
            console.log("draw")
            playerSelection = prompt("draw pick again")
            logic(computerSelection,playerSelection)
            break
        }
        case('rock'):{
            winLogic("paper")
            break
        }
        case("sizzors"):{
            winLogic("rock")
            break
        }
        case("paper"):{
            winLogic("sizzors")
            break
        }
    }
}
   

logic(computerSelection,playerSelection)
