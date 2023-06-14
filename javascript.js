// a function called that will randomly return 
// either ‘Rock’, ‘Paper’ or ‘Scissors’. 
function getComputerChoice() {
    var textArray = [
        "Rock",
        "Paper",
        "Scissors"
    ];
    var randomIndex = Math.floor(Math.random() * textArray.length);
    var randomText = textArray[randomIndex];
    return randomText;
}

function game() {
    var yourScore = 0;
    var computerScore = 0;
    let i = 0;
    while (i < 5) {
        function playRound(playerSelection, computerSelection) {
            var playerSelection = prompt("Please enter your choice:");
            var computerSelection = getComputerChoice();
            
            if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
                alert("You tied!");
            } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
                alert("You Lose! Paper beats Rock");
                computerScore += 1;
            } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
                alert("You Lose! Scissors beats Paper");
                computerScore += 1;
            } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
                alert("You Lose! Rock beats Scissors");
                computerScore += 1;
            } else {
                alert ("You win!");
                yourScore += 1;
            }
        }
        playRound();
        i++;
    }
    if(yourScore === computerScore) {
        console.log("This is a tie game!");
    } else if(yourScore > computerScore) {
        console.log("Look at you! You win!");
    } else {
        console.log("Whoops.")
    }
    console.log("You scored " + yourScore + "." + " Computer scored " + computerScore + ".");
}
