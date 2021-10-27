/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game = null;
const phrases = [
  new Phrase("bite the bullet"),
  new Phrase("Break a leg"),
  new Phrase("Hang in there"),
  new Phrase("No pain no gain"),
  new Phrase("on the ball"),
];
const keyboardKeys = document.getElementsByClassName("key");
const startGameBtn = document.getElementById("btn__reset");

startGameBtn.addEventListener("click", () => {
  game = new Game(0, phrases, null);
  game.startGame();
});

for (const key of keyboardKeys) {
  key.addEventListener("click", function () {
    game.handleInteraction(key);
  });
}
