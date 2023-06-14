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