let computerScore = 0
let playerScore = 0

const playerScoreOutput = document.getElementById("playerScore")
const comperterScoreOutput = document.querySelector("#botScore")
console.log(playerScoreOutput,comperterScoreOutput)
console.log(`bot:${computerScore}, you:${playerScore}`)

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const skizzors = document.querySelector("#skizzors")

rock.addEventListener("click",()=>{ logic("rock")})
paper.addEventListener("click",()=>{logic("paper")})
skizzors.addEventListener("click",()=>{logic("skizzors")})

function getComputerChoice(){
    const choice = ["rock","paper", "skizzors"]
    let out = choice[Math.floor(Math.random() * choice.length)]// the code in brackits picks the index 
    return out
}

function winLogic(winningInupt, playerSelection,computerSelection){
    if( playerSelection === computerSelection){
        return ""
    }else if(playerSelection === undefined){
        return ""
    }else if(playerSelection === winningInupt){
        console.log(`${playerSelection} beets ${computerSelection}`)
       
       return true // win  
    }
    else{
        console.log(`${playerSelection} looses to ${computerSelection}`)
        return false
    }
}

function logic(playerSelection){
    let computerSelection = getComputerChoice()
    
    
    switch(computerSelection){
        case(playerSelection):{
            console.log("draw")
            break;
        }
        case('rock'):{
             winLogic("paper", playerSelection,computerSelection) 
        }
        case("skizzors"):{
             winLogic("rock", playerSelection,computerSelection) 
        }
        case("paper"):{
            winLogic("skizzors", playerSelection,computerSelection)  
        }
       
    }
}

