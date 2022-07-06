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
      "Thriller",
      "All Night Long",
    ];
    this.activePhrase = null;
    this.phrase = null;
  }

  /**
   * Game starting point
   */
  startGame() {
    document.getElementById("overlay").classList.remove("lose", "win");
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

  /**
   * Control center for handling game play.
   * Each click on a previously clicked button will not produce a result.
   * @param {string} inputLetter letter from click event in app.js
   */
  handleInteraction(inputLetter) {
    let repeatValue = false;
    let isLetterOnBoard = this.phrase.checkLetter(inputLetter);
    const keyboard = document.querySelectorAll("#qwerty button");
    keyboard.forEach(letter => {
      if (letter.innerText === inputLetter) {
        if (letter.classList.contains("chosen") || letter.classList.contains("wrong")) {
          repeatValue = true;
        }
        if (isLetterOnBoard && !repeatValue) letter.classList.add("chosen");
        else if (!isLetterOnBoard && !repeatValue) letter.classList.add("wrong");
      }
    });
    if (repeatValue) return;
    if (isLetterOnBoard) this.checkForWin();
    else this.removeLife();
  }

  /**
   * Remove a heart from the screen for each wrong input
   */
  removeLife() {
    const hearts = document.querySelectorAll("#scoreboard li img");
    hearts[this.missed].setAttribute("src", "images/lostHeart.png");

    this.missed += 1;
    if (this.missed === 5) {
      document.getElementById("game-over-message").innerText = "Sorry, you lost";
      document.getElementById("overlay").classList.add("lose");
      this.gameOver();
    }
  }

  /**
   * Check board to see if all tiles are visible
   */
  checkForWin() {
    const letters = document.querySelectorAll("#phrase li");
    let countLetters = 0;
    letters.forEach(letter => {
      if (letter.classList.contains("hide")) countLetters++;
    });

    if (countLetters === 0) {
      document.getElementById("game-over-message").innerText = "Yay, you win!";
      document.getElementById("overlay").classList.add("win");
      this.gameOver();
    }
  }

  /**
   * After game loss return all properties and DOM elements back to default
   */
  gameOver() {
    // hide game board
    document.getElementById("overlay").style.display = "";

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
