var Word = require("./word")
var inquirer = require("inquirer");
var things = ['rock', 'paper', 'scissor'];
var thing = things[Math.floor(Math.random() * things.length)];
var word = new Word(thing);
var guessesLeft = 10;
var n = word.showWord();
console.log(typeof n);
function playGame() {
    if (n.includes("_") === false) {
        endGame();
    }
    else if (0 < guessesLeft) {
        playRound();
    } else {
        endGame();
    }
}
function playRound() {
    console.log(word.showWord());
    inquirer.prompt([
        {
            name: "getGuess",
            type: "input",
            message: "Which letter do you guess?",
        }
    ])
        .then(function (answer) {
            var isLetterGuessed = word.isCorrectLetter(answer.getGuess);
            if (isLetterGuessed === false) {
                guessesLeft--;
            }
            console.log(`Guesses left: ${guessesLeft}`);
            console.log(n.includes("_"));
            playGame();
        })
}
function endGame() {
    if (guessesLeft === 0) {
        console.log("Too bad, you didn't get it.")
    }
    else {
        console.log("Nice job!")
    }
    inquirer
        .prompt({
            name: "again",
            type: "confirm",
            message: "Would you like to play another game?"
        })
        .then(function (answer) {
            if (answer.again === true) {
                guessesLeft = 10;
                lettersGuessed = [];
                playGame();
            } else {
                console.log("Come back again soon!");
                process.exit;
            }
        });
}
playGame();