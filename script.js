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
            return "Tie! You both chose Rock";
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
            return "Tie! You both chose Paper";
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
            return "Tie! You both chose Scissors";
    }
}

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

function select(str){
    let playerSelection = str;
    let computerSelection = computerPlay();
    if(counter < 5) {
        counter++;
        text.innerHTML = playRound(playerSelection, computerSelection);
    } else {
        win.innerHTML = loss.innerHTML = tie.innerHTML = counter = 0;
        select(str);
    }
}

function update(result) {
    switch(result){
        case "win":
            win.innerHTML++;
            break;
        case "loss":
            loss.innerHTML++;
            break;
        case "tie":
            tie.innerHTML++;
            break;
    }
}

let counter = 0;

let win, loss, tie, text;

win = document.getElementById("win");
loss = document.getElementById("loss");
tie = document.getElementById("tie");

text = document.getElementById("text");


document.getElementById("rock").onclick = function() {
    select("rock");
}
document.getElementById("paper").onclick = function() {
    select("paper");
}
document.getElementById("scissors").onclick = function() {
    select("scissors");
}