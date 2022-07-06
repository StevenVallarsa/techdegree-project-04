/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const start = document.getElementById("btn__reset");
const keyboard = document.querySelector("#qwerty");

let game;

start.addEventListener("click", () => {
  game = new Game();
  game.startGame();
});

keyboard.addEventListener("click", e => {
  const letter = e.target.innerText;
  if (letter.length === 1) {
    game.handleInteraction(letter);
  }
});
