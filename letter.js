var Letter = function (letter, isLetterGuessed) {
    let wrongLetters = [];
    this.letter = letter;
    this.isLetterGuessed = isLetterGuessed;
    this.characterReturner = function (letter) {
        if (isLetterGuessed) {
            return letter;
        }
        else {
            wrongLetters.push(letter);
            return "_";
        }
    }
    this.guess = function (guess) {
        if (guess === letter) {   
            this.isLetterGuessed = true; 
            return true;
        }
        else {
            return false;
        }
    }
}
module.exports = Letter;