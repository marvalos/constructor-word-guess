var Letter = function (letter, isLetterGuessed = false) {
    this.letter = letter;
    this.isLetterGuessed = isLetterGuessed;
    this.characterReturner = function () {
        if (isLetterGuessed) {
            return letter;
        }
        else {
            return "_";
        }
    }
    this.guess = function (guess) {
        if (guess === letter) {
            isLetterGuessed = true;
            return true
        }
    }
}
module.exports = Letter;