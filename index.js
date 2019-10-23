var Word = require("./word")
var inquirer = require("inquirer");
var things = ['rock', 'paper', 'scissor'];
var thing = things[Math.floor(Math.random() * things.length)];
var word = new Word(thing);
var guessesLeft = 5;
var roundNumber = 1;
function playGame() {
    if (0 < guessesLeft) {
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
            console.log("This function is hit");
            var isLetterGuessed = word.isCorrectLetter(answer.getGuess);
            if (isLetterGuessed === false) {
                guessesLeft--;
            }
            // if ((word.includes("_") === false)) {
            //     endGame();
            // }
            roundNumber++;
            answer.getGuess = "";
            playGame();
        })
    
}
function endGame() {
    // Prints the final score
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
            message: "Would you like to play another match?"
        })
        .then(function (answer) {
            if (answer.again === true) {
                // Starts new match with the same players
                roundNumber = 1;
                guessesLeft = 5;
                lettersGuessed = [];
                playGame();
            } else {
                console.log("Come back again soon!");
                process.exit;
            }
        });
}
playGame();