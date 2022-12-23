let currentScore = 0;
let gameOver = false;

const square1Element = document.querySelector('.square-1');
const square2Element = document.querySelector('.square-2');
const square3Element = document.querySelector('.square-3');
const square4Element = document.querySelector('.square-4');
const square5Element = document.querySelector('.square-5');
const square6Element = document.querySelector('.square-6');
const square7Element = document.querySelector('.square-7');
const square8Element = document.querySelector('.square-8');
const square9Element = document.querySelector('.square-9');

const gameFieldElements = document.querySelectorAll('.game-board li')


const startNewGameElement = document.getElementById('start-new-game')

// square1Element.addEventListener('click', catchColor)
// square2Element.addEventListener('click', catchColor)
// square3Element.addEventListener('click', catchColor)
// square4Element.addEventListener('click', catchColor)
// square5Element.addEventListener('click', catchColor)
// square6Element.addEventListener('click', catchColor)
// square7Element.addEventListener('click', catchColor)
// square8Element.addEventListener('click', catchColor)
// square9Element.addEventListener('click', catchColor)

startNewGameElement.addEventListener('click', startNewGame)

for (const gameFieldElement of gameFieldElements) {
    gameFieldElement.addEventListener('click', catchColor)
}
