/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const phrases = [
  new Phrase("bite the bullet"),
  new Phrase("Break a leg"),
  new Phrase("Hang in there"),
  new Phrase("No pain no gain"),
  new Phrase("on the ball"),
];
const keyboardKeys = document.getElementsByClassName("key");
const startGameBtn = document.getElementById("btn__reset");
const imgs = document.getElementsByClassName("tries");
const letters = document.getElementsByClassName("letter");
const gameOverMessage = document.getElementById("game-over-message");
const overlay = document.getElementById("overlay");
let game = null;
let played = false;

startGameBtn.addEventListener("click", () => {
  game = new Game(0, phrases, null);
  if (played) {
    game.resetGame();
    game.startGame();
  } else {
    played = true;
    game.startGame();
  }
});

for (const key of keyboardKeys) {
  key.addEventListener("click", function () {
    game.handleInteraction(key);
  });
}
