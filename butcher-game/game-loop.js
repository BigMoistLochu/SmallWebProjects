import {drawBoard} from './draws/game-board-draw.js';
import {drawPlayers} from "./draws/player-draw.js";
import { playerKeyboardController } from "./eventListeners/player-controller-listener.js";
import {GameBoard} from "./classes/GameBoard.js";


const gameBoardCanvas = document.getElementById("game-board");
const gameBoard = new GameBoard(gameBoardCanvas);

function gameLoop(timestamp) {
    update();
    draw();

    requestAnimationFrame(gameLoop); // Kolejna klatka
}

function update() {
    console.log("Update ruchu postaci");

}

function draw() {
    gameBoardCanvas.getContext("2d").clearRect(0, 0, gameBoardCanvas.width, gameBoardCanvas.height);
    gameBoard.drawBoard();
    drawPlayers();
}

function initEvents(){
    playerKeyboardController()
}

initEvents();
// Start gry
requestAnimationFrame(gameLoop);