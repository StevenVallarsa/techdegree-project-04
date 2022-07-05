/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      "to be or not to be",
      "all those memories will be lost forever like tears in the rain",
      "pale blue dot",
      "hungry like the wolf",
      "we stand on the shoulders of giants",
    ];
    this.activePhrase = null;
  }

  startGame() {
    document.getElementById("overlay").style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    const phrase = new Phrase(this.activePhrase);
    phrase.addPhraseToDisplay();
  }

  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }

  handleInteraction() {}

  removeLife() {
    this.misses += 1;
    if (this.misses === 5) {
      this.gameOver();
    }
  }

  checkForWin() {}

  gameOver() {
    document.getElementById("overlay").style.display = "";
  }
}
