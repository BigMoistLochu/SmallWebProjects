import { board, drawBoard } from './game-board.js';


function gameLoop(timestamp) { // timestamp przekazywany automatycznie
    update();
    draw();

    requestAnimationFrame(gameLoop); // Kolejna klatka
}

function update() {
    console.log("Update: "); // Możesz tu dodać ruch postaci
}

function draw() {
    drawBoard();
    console.log("Renderowanie Obiektow np graczy itp"); // Tu możesz rysować
}

// Start gry
requestAnimationFrame(gameLoop);