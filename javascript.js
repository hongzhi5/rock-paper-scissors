const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound));

const resultsBox  = document.querySelector('#resultsBox');
const playAgain = document.querySelector('.playAgain');

const yourScoreText = document.createElement('div');
resultsBox.appendChild(yourScoreText);

const computerScoreText = document.createElement('div');
resultsBox.appendChild(computerScoreText);

const roundResultNotice = document.createElement('div');
resultsBox.appendChild(roundResultNotice);

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

var yourScore = 0;
var computerScore = 0;
let roundResult = "";
function playRound(e) {
    var playerSelection = e.target.value;
    var computerSelection = getComputerChoice();
    

    if (playerSelection === computerSelection) {
        roundResult = "You tied!";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        computerScore += 1;
        roundResult = "You Lose! Paper beats Rock";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        computerScore += 1;
        roundResult = "You Lose! Scissors beats Paper";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        computerScore += 1;
        roundResult = "You Lose! Rock beats Scissors";
    } else {
        yourScore += 1;
        roundResult = "You won!";
    }
    updateResults();
    updateScoreText();

}
function updateScoreText() {
    yourScoreText.textContent = `You: ${yourScore}`;
    computerScoreText.textContent = `Computer: ${computerScore}`;
    roundResultNotice.textContent = `${roundResult}`;
  }
function updateResults() {

    let fiveRoundResult = "";

    if(yourScore === 5 || computerScore === 5){
        if(yourScore === computerScore) {
            fiveRoundResult = "This is a tie game!";
        } else if(yourScore > computerScore) {
            fiveRoundResult = "Look at you! You won!";
        } else {
            fiveRoundResult = "No way! Let's try it again.";
        }

        resultsBox.removeChild(roundResultNotice);

        const finalResultText = document.createElement('div');
        finalResultText.textContent = fiveRoundResult;
        resultsBox.appendChild(finalResultText);

        const finalScoreText = document.createElement('div');
        finalScoreText.textContent = "You scored " + yourScore + "." + " Computer scored " + computerScore + ".";
        resultsBox.appendChild(finalScoreText);

        buttons.forEach(button => button.removeEventListener('click', playRound));
        
        const playAgainButton = document.createElement('button');
        playAgainButton.classList.add('playAgainButton');
        playAgainButton.textContent = "Play Again";
        function reloadPage() {
            location.reload();
        }
        playAgain.appendChild(playAgainButton);
        playAgainButton.addEventListener('click', reloadPage);
    }
}