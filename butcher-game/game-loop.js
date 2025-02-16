import { board, drawBoard } from './game-board.js';

let lastTime = 0; // Czas poprzedniej klatki
console.log(board[0][0]);
drawBoard();
// function gameLoop(timestamp) { // timestamp przekazywany automatycznie
//     let deltaTime = timestamp - lastTime; // Obliczanie różnicy czasu
//     lastTime = timestamp; // Aktualizacja czasu ostatniej klatki

//     update(deltaTime); // Aktualizacja logiki gry
//     draw(); // Renderowanie

//     requestAnimationFrame(gameLoop); // Kolejna klatka
// }

// // Funkcje gry
// function update(deltaTime) {
//     console.log("Update: ", deltaTime); // Możesz tu dodać ruch postaci, fizykę itp.
// }

// function draw() {
//     console.log("Renderowanie Obiektow np graczy itp"); // Tu możesz rysować na canvasie
// }

// // Start gry
// requestAnimationFrame(gameLoop); // Uruchomienie pętli