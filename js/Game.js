/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      "Hungry Like the Wolf",
      "Blue Monday",
      "Major Tom",
      "Every Breath You Take",
      "Run to You",
      "Kids in America",
      "Running Up That Hill",
    ];
    this.activePhrase = null;
    this.phrase = null;
  }

  startGame() {
    document.getElementById("overlay").style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.phrase = new Phrase(this.activePhrase);
    this.phrase.addPhraseToDisplay();
  }

  /**
   * Select random phrase from array
   * @returns {string} phrase
   */
  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }

  handleInteraction(inputLetter) {
    const isLetterOnBoard = this.phrase.checkLetter(inputLetter);
    const keyboard = document.querySelectorAll("#qwerty button");
    keyboard.forEach(letter => {
      if (letter.innerText === inputLetter) {
        if (isLetterOnBoard) letter.classList.add("chosen");
        else letter.classList.add("wrong");
      }
    });
    if (isLetterOnBoard) this.checkForWin();
    if (!isLetterOnBoard) this.removeLife();
  }

  removeLife() {
    const hearts = document.querySelectorAll("#scoreboard li img");
    hearts[this.missed].setAttribute("src", "images/lostHeart.png");

    this.missed += 1;
    if (this.missed === 5) {
      this.gameOver();
    }
  }

  checkForWin() {
    const letters = document.querySelectorAll("#phrase li");
    let countLetters = 0;
    letters.forEach(letter => {
      if (letter.classList.contains("hide")) countLetters++;
    });

    console.log(countLetters, letters.length);
    if (countLetters === 0) {
      console.log("YOU WIN");
      this.gameOver();
    }
  }

  /**
   * After game loss return all properties and DOM elements back to default
   */
  gameOver() {
    // hide game board
    document.getElementById("overlay").style.display = "";

    //set properties back to default
    this.activePhrase = null;
    this.missed = 0;

    // return the keyboard back to default
    const keyboard = document.querySelectorAll("#qwerty button");
    keyboard.forEach(letter => {
      letter.classList.remove("wrong", "chosen");
    });

    // make all the hearts solid
    const hearts = document.querySelectorAll("#scoreboard li img");
    hearts.forEach(heart => heart.setAttribute("src", "images/liveHeart.png"));
  }
}
