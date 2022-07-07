/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
   * Adds the chosen phrase to the DOM
   * - Added line breaks between words so words don't get cut at edge of screen
   */
  addPhraseToDisplay() {
    const ul = document.querySelector("#phrase ul");
    ul.innerHTML = ""; // clear board
    for (let letter of this.phrase) {
      if (letter === " ") {
        ul.insertAdjacentHTML("beforeend", "<li class='space'> </li><br />");
      } else {
        ul.insertAdjacentHTML("beforeend", `<li class="hide letter ${letter}">${letter}</li>`);
      }
    }
  }

  /**
   * Check if the input letter is in the phrase
   * @param {string} inputLetter coming indirectly from click event in app.js
   * @returns {boolean} true if letter is in phrase
   */
  checkLetter(inputLetter) {
    const letters = document.querySelectorAll("#phrase li");
    let lettersStart = 0;
    letters.forEach(letter => {
      if (letter.classList.contains("hide")) lettersStart++;
    });
    this.showMatchedLetters(inputLetter);
    let lettersEnd = 0;
    letters.forEach(letter => {
      if (letter.classList.contains("hide")) lettersEnd++;
    });

    return lettersStart !== lettersEnd;
  }

  /**
   * Make the correct letters visible on the board
   * @param {string} inputLetter coming indirectly from click event in app.js
   */
  showMatchedLetters(inputLetter) {
    const letters = document.querySelectorAll("#phrase li");
    letters.forEach(letter => {
      if (letter.innerText === inputLetter) {
        letter.classList.remove("hide");
        letter.classList.add("show");
      }
    });
  }
}
