/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor(missed, phrases, activePhrase) {
    this.missed = missed;
    this.phrases = phrases;
    this.activePhrase = activePhrase;
  }

  startGame() {
    document.getElementById("overlay").style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }

  handleInteraction(key) {
    if (this.activePhrase.checkLetter(key.textContent)) {
      this.activePhrase.showMatchedLetter(key.textContent);
    } else {
      key.classList.add("wrong");
      this.removeLife();
    }
  }

  removeLife() {
    this.missed++;
    const imgs = document.getElementsByClassName("tries");
    console.log(this.missed);
    imgs[imgs.length - this.missed].firstElementChild.src =
      "images/lostHeart.png";
    if (this.missed === 5) {
      this.gameOver();
    }
  }

  gameOver() {
    document.getElementById("overlay").style.display = "flex";
    document.getElementById("game-over-message").textContent = "YOU LOST 😢";
  }
}
