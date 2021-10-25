/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game(0, ["this is a test"], null);
const startGameBtn = document.getElementById("btn__reset");

startGameBtn.addEventListener("click", () => {
  game.startGame();
});
