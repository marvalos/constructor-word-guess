var Letter = function (letter, isLetterGuessed) {
    this.letter = letter;
    isLetterGuessed = false;
    this.isLetterGuessed = isLetterGuessed;
    this.characterReturner = function (letter) {
        console.log("CharReturner is called");
        if (isLetterGuessed) {
            console.log(letter);
            return letter;
        }
        else {
            return "_";
        }
    }
    this.guess = function (guess) {
        if (guess === letter) {
            isLetterGuessed = true;
            console.log(isLetterGuessed);
            return true
        }
    }
}
module.exports = Letter;