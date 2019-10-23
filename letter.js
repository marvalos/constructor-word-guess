var Letter = function (letter, isLetterGuessed) {
    this.letter = letter;
    this.isLetterGuessed = isLetterGuessed;
    this.characterReturner = function (letter) {
        console.log("CharReturner is called");
        if (isLetterGuessed) {
            return letter;
        }
        else {
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