function computerPlay() {
    let rand = Math.floor(Math.random() * 3); 
    switch(rand) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    switch(playerSelection) {
        case "rock":
            if(computerSelection == "scissors"){
                update("win");
                return "You win! Rock beats Scissors";
            }
            if(computerSelection == "paper"){
                update("loss");
                return "You lose! Paper beats Rock";
            }
            update("tie");
            return "Tie!";
        case "paper":
            if(computerSelection == "rock"){
                update("win");
                return "You win! Paper beats Rock";
            }
            if(computerSelection == "scissors"){
                update("loss");
                return "You lose! Scissors beats Paper";
            }
            update("tie");
            return "Tie!";
        case "scissors":
            if(computerSelection == "paper"){
                update("win");
                return "You win! Scissors beats Paper";
            }
            if(computerSelection == "rock"){
                update("loss");
                return "You lose! Rock beats Scissors";
            }
            update("tie");
            return "Tie";
    }
}


function select(str){
    playerSelection = str;
    computerSelection = computerPlay();
    if(counter < 5) {
        counter ++;
        playRound(playerSelection, computerSelection);
    } else {
        win = loss = tie = 0;
        document.getElementById("win").innerHTML = 0;
        document.getElementById("loss").innerHTML = 0;
        document.getElementById("tie").innerHTML = 0;

        counter = 1;
        playRound(playerSelection, computerSelection);
    }
}

let counter, win, loss, tie;
    coutner = win = loss = tie = 0;
let playerSelection;
let computerSelection;

function update(result) {
    switch(result){
        case "win":
            win++;
            document.getElementById("win").innerHTML = win;
            break;
        case "loss":
            loss++;
            document.getElementById("loss").innerHTML = loss;
            break;
        case "tie":
            tie++;
            document.getElementById("tie").innerHTML = tie;
            break;
    }
}


document.getElementById("rock").onclick = function() {
    select("rock");
}
document.getElementById("paper").onclick = function() {
    select("paper");
}
document.getElementById("scissors").onclick = function() {
    select("scissors");
}