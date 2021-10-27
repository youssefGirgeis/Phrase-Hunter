/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay() {
    const phrase = document.getElementById("phrase");
    // phrase.textContent = `${this.phrase}`;
    console.log(this.phrase);
    const ul = document.createElement("ul");

    for (const letter of this.phrase) {
      const li = document.createElement("li");
      if (letter !== " ") {
        li.textContent = `${letter}`;
        li.classList.add("letter", "hide");
      } else {
        li.classList.add("space");
      }
      ul.appendChild(li);
    }
    phrase.appendChild(ul);
  }

  checkLetter(selectedLetter) {
    return this.phrase.includes(selectedLetter);
  }

  showMatchedLetter(selectedLetter) {
    const letters = document.querySelectorAll(".letter");
    for (const letter of letters) {
      if (selectedLetter === letter.textContent) {
        letter.classList.add("show");
        letter.classList.remove("hide");
      }
    }
  }
}
