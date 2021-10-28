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
    overlay.style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }

  handleInteraction(key) {
    key.disabled = true;
    if (this.activePhrase.checkLetter(key.textContent)) {
      key.classList.add("chosen");
      this.activePhrase.showMatchedLetter(key.textContent);
      if (this.checkForWin()) this.gameOver("win");
    } else {
      key.classList.add("wrong");
      this.removeLife();
    }
  }

  removeLife() {
    this.missed++;
    imgs[imgs.length - this.missed].firstElementChild.src =
      "images/lostHeart.png";
    if (this.missed === 5) {
      this.gameOver("lose");
    }
  }

  checkForWin() {
    for (const letter of letters) {
      if (letter.classList.contains("hide")) return false;
    }
    return true;
  }

  gameOver(result) {
    overlay.style.display = "flex";
    overlay.classList.remove("start");
    if (result === "win") {
      gameOverMessage.textContent = "YOU WON 🏆";
      overlay.classList.add(`${result}`);
    } else {
      gameOverMessage.textContent = "YOU LOST 💩";
      overlay.classList.add(`${result}`);
    }
  }

  resetGame() {
    document.querySelector("ul").remove();
    for (const key of keyboardKeys) {
      if (key.disabled) {
        key.disabled = false;
        key.classList.contains("wrong")
          ? key.classList.remove("wrong")
          : key.classList.remove("chosen");
      }
    }
    for (const image of imgs) {
      image.firstElementChild.src = "images/liveHeart.png";
    }
  }
}
