import { drawBoard } from './game-board.js';


function gameLoop(timestamp) { // timestamp przekazywany automatycznie
    update();
    draw();

    requestAnimationFrame(gameLoop); // Kolejna klatka
}

function update() {
    console.log("Update ruchu postaci"); // Możesz tu dodać ruch postaci
}

function draw() {
    drawBoard();
}

// Start gry
requestAnimationFrame(gameLoop);