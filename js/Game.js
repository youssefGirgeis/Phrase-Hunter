/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const imgs = document.getElementsByClassName("tries");
const letters = document.getElementsByClassName("letter");
const gameOverMessage = document.getElementById("game-over-message");
const overlay = document.getElementById("overlay");

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
    console.log(this.missed);
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
}
