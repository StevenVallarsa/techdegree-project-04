/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase("Hungry Like the Wolf"),
      new Phrase("Just Another Manic Monday"),
      new Phrase("Every Breath You Take"),
      new Phrase("Cuts Like A Knife"),
      new Phrase("Running Up That Hill"),
    ];
    this.activePhrase = null;
  }

  /**
   * Game starting point
   */
  startGame() {
    // remove previous play's win/lose colors from overlay
    document.getElementById("overlay").classList.remove("lose", "win");
    // hide overlay
    document.getElementById("overlay").style.display = "none";
    // get phrase and start game
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();

    // set background color from hour
    const hour = new Date().getHours();
    const body = document.getElementsByTagName("body")[0];
    if (hour < 5) body.style.backgroundColor = "#336699";
    else if (hour < 7) body.style.backgroundColor = "#cc6699";
    else if (hour < 9) body.style.backgroundColor = "#ffcc99";
    else if (hour < 18) body.style.backgroundColor = "#ffffcc";
    else if (hour < 20) body.style.backgroundColor = "#cc6699";
    else if (hour < 22) body.style.backgroundColor = "#ff9999";
    else body.style.backgroundColor = "#336699";
  }

  /**
   * Select random Phrase object from array
   * @returns {object} Phrase object
   */
  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }

  /**
   * Control center for handling game play.
   * Each click on a previously clicked button will be ignored.
   * @param {string} inputLetter letter from click & keydown events in app.js
   */
  handleInteraction(inputLetter) {
    let repeatValue = false; // boolean for checking if letter has already been selected
    let isLetterOnBoard = this.activePhrase.checkLetter(inputLetter);
    const keyboard = document.querySelectorAll("#qwerty button");
    keyboard.forEach(letter => {
      if (letter.innerText === inputLetter) {
        if (letter.classList.contains("chosen") || letter.classList.contains("wrong")) {
          repeatValue = true;
        }
        if (isLetterOnBoard && !repeatValue) letter.classList.add("chosen");
        else if (!isLetterOnBoard && !repeatValue) letter.classList.add("wrong");
        letter.setAttribute("disabled", "disabled");
      }
    });

    // if this is a repeated letter, jump out of method
    if (repeatValue) return;

    // if letter is on the board check for win, else lose a life
    if (isLetterOnBoard) this.checkForWin();
    else this.removeLife();
  }

  /**
   * Remove a heart from the screen for each wrong input.
   * Uses "this.missed" as index value
   */
  removeLife() {
    const hearts = document.querySelectorAll("#scoreboard li img");
    hearts[this.missed].setAttribute("src", "images/lostHeart.png");

    this.missed += 1;
    if (this.missed === 5) {
      document.getElementById("game-over-message").innerText = "Sorry, you lost.Try again?";
      document.getElementById("overlay").classList.add("lose");
      this.gameOver();
    }
  }

  /**
   * If all tiles are visible player has won
   */
  checkForWin() {
    const letters = document.querySelectorAll("#phrase li");
    let countLetters = 0;
    letters.forEach(letter => {
      if (letter.classList.contains("hide")) countLetters++;
    });
    // if no letters contain the class "hide", then board is completely revealed and player has won
    if (countLetters === 0) {
      document.getElementById("game-over-message").innerText = "Rock on! Play again?";
      document.getElementById("overlay").classList.add("win");
      this.gameOver();
    }
  }

  /**
   * After game loss hide game board and return all DOM elements back to default
   */
  gameOver() {
    // hide game board
    document.getElementById("overlay").style.display = "";

    // return colors from keyboard and re-able them
    const keyboard = document.querySelectorAll("#qwerty button");
    keyboard.forEach(letter => {
      letter.classList.remove("wrong", "chosen");
      letter.removeAttribute("disabled");
    });

    // return hearts to solid state
    const hearts = document.querySelectorAll("#scoreboard li img");
    hearts.forEach(heart => heart.setAttribute("src", "images/liveHeart.png"));
  }
}
