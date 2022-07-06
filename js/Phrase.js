/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay() {
    const ul = document.querySelector("#phrase ul");
    ul.innerHTML = ""; // clear board
    for (let letter of this.phrase) {
      if (letter === " ") {
        ul.insertAdjacentHTML("beforeend", "<li class='space'> </li>");
      } else {
        ul.insertAdjacentHTML("beforeend", `<li class="hide letter ${letter}">${letter}</li>`);
      }
    }
  }

  checkLetter(inputLetter) {
    const letters = document.querySelectorAll("#phrase li");
    let lettersStart = 0;
    letters.forEach(letter => {
      if (letter.classList.contains("hide")) lettersStart++;
    });
    letters.forEach(letter => {
      if (letter.innerText === inputLetter) {
        letter.classList.remove("hide");
        letter.classList.add("show");
      }
    });
    let lettersEnd = 0;
    letters.forEach(letter => {
      if (letter.classList.contains("hide")) lettersEnd++;
    });

    return lettersStart !== lettersEnd;
  }

  showMatchedLetters(letter) {}
}
