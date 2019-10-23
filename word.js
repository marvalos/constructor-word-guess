var Letter = require("./letter")
var Word = function (word) {
    this.wordArr = word.split("").map(letter => new Letter(letter, false));
    this.word = word;
    this.showWord = function () {
        this.wordArr.forEach(letter => letter.characterReturner());
        word = this.wordArr.map(elem => elem.isLetterGuessed ? elem.letter : "_").join(" ");
        return word;
    }
    this.isCorrectLetter = function (letter) {
        var something;
        for (i = 0; i < this.wordArr.length; i++) {
            something = this.wordArr[i].guess(letter);
        }
        return something;
    }
}
module.exports = Word;