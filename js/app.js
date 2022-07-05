/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const start = document.getElementById("btn__reset");
const hearts = document.querySelectorAll("#scoreboard li");
const querty = document.querySelector("#qwerty");

console.log(hearts[0].nextElementSibling);
// hearts[0].nextSiblingElement.removeAttribute("src").setAttribute("scr", "images/lostHeart.png");
// console.log(hearts);
start.addEventListener("click", () => {
  const game = new Game();
  game.startGame();
});

querty.addEventListener("click", e => {
  console.log(e.target.innerText);
});
