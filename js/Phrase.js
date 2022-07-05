/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  //      <li class="hide letter w">w</li>
  //      <li class="space"> </li>

  addPhraseToDisplay() {
    const ul = document.querySelector("#phrase ul");
    for (let letter of this.phrase.split("")) {
      console.log(letter);
      if (letter === " ") {
        ul.insertAdjacentHTML("beforeend", "<li class='space'> </li>");
      } else {
        ul.insertAdjacentHTML("beforeend", `<li class="hide letter ${letter}">${letter}</li>`);
      }
    }
  }

  checkLetter() {
    const letters = document.querySelectorAll("#phrase>li");
  }

  showMatchedLetters() {}
}
