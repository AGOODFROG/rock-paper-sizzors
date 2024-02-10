let computerScore = 0
let playerScore = 0

const playerScoreOutput = document.querySelector("#playerScore")
const comperterScoreOutput = document.querySelector("#botScore")
console.log(playerScoreOutput,comperterScoreOutput)


const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const skizzors = document.querySelector("#skizzors")

const scoreOutput = document.querySelector("#console")

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
        scoreOutput.textContent = `${playerSelection} beets ${computerSelection}`
        playerScore ++
        playerScoreOutput.textContent = playerScore
        
       return true // win  
    }
    else{
        scoreOutput.textContent = `${playerSelection} looses to ${computerSelection}`
        computerScore ++
        comperterScoreOutput.textContent = computerScore
        return false
    }

}

function logic(playerSelection){
    let computerSelection = getComputerChoice()
    console.log(playerScore,computerScore)
    
    
    switch(computerSelection){
        case(playerSelection):{
            scoreOutput.textContent ="draw"
            break;
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

