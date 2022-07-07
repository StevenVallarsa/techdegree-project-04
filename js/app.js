/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const start = document.getElementById("btn__reset");
const keyboard = document.querySelector("#qwerty");

let game;

// listen for click event on "Start Game" button
start.addEventListener("click", () => {
  game = new Game();
  game.startGame();
});

// listen for click events on screen keyboard
keyboard.addEventListener("click", e => {
  const letter = e.target.innerText;
  if (letter.length === 1) {
    game.handleInteraction(letter);
  }
});

// listen for keydown events on user's physical keyboard
document.addEventListener("keydown", e => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const letter = e.key.toLowerCase();
  if (document.getElementById("overlay").style.display === "none") {
    if (letters.includes(letter)) {
      game.handleInteraction(letter);
    }
  }
});
