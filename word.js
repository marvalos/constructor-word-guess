var Letter = require("./letter")

var Word = function (word) {
    this.wordArr = word.split("").map(letter => new Letter(letter, false));
    this.word = word;
    this.showWord = function () {
        word = this.wordArr.map(elem => elem.isLetterGuessed ? elem.letter : "_").join(" ");
        return word;
    }

    this.isCorrectLetter = function (letter) {
        for (i = 0; i < this.wordArr.length; i++) {
            wordArr[i].guess(letter);
        }
    }
}

module.exports = Word;