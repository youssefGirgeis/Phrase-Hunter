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
const game = new Game(0, phrases, null);
const startGameBtn = document.getElementById("btn__reset");

startGameBtn.addEventListener("click", () => {
  game.startGame();
});

const keyboardKeys = document.getElementsByClassName("key");
for (const key of keyboardKeys) {
  key.addEventListener("click", function () {
    game.handleInteraction(key);
  });
}
