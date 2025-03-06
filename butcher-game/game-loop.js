import {drawPlayers} from "./draws/player-draw.js";
import { playerKeyboardController } from "./eventListeners/player-controller-listener.js";
import {gameBoardCanvas} from "./cache/PersistentDataContainer.js";
import {GameBoard} from "./classes/GameBoard.js";

const canvas = document.getElementById("game-board").getContext("2d");
const gameBoard = new GameBoard();



function gameLoop(timestamp) {
    update();
    draw();

    requestAnimationFrame(gameLoop); // Kolejna klatka
}

function update() {
    console.log("Update ruchu postaci");
}

function draw() {
    canvas.clearRect(0, 0, gameBoardCanvas.width, gameBoardCanvas.height);
    gameBoard.drawBoard(canvas);
    drawPlayers();
}

function initEvents(){
    playerKeyboardController()
}

//-----DONT OVERRIDE THIS:
initEvents();
// Start gry
requestAnimationFrame(gameLoop);