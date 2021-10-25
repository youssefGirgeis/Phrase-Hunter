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
    const ul = document.createElement("ul");

    for (const letter of this.phrase) {
      const li = document.createElement("li");
      if (letter !== " ") {
        li.textContent = `${letter}`;
        li.classList.add("letter");
      } else {
        li.classList.add("space");
      }
      ul.appendChild(li);
    }

    phrase.appendChild(ul);
  }
}
