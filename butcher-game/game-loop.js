import { drawBoard } from './game-board.js';


function gameLoop(timestamp) {
    update();
    draw();

    requestAnimationFrame(gameLoop); // Kolejna klatka
}

function update() {
    console.log("Update ruchu postaci");
}

function draw() {
    drawBoard();
}

// Start gry
requestAnimationFrame(gameLoop);