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

  startGame() {}

  getRandomPhrase() {
    return this.phrases[Math.random() * this.phrases.length];
  }

  handleInteraction() {}
}
