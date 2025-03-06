import {drawPlayers} from "./draws/player-draw.js";
import { playerKeyboardController } from "./eventListeners/player-controller-listener.js";
import {GameBoard} from "./classes/GameBoard.js";


const canvas = document.getElementById("game-board").getContext("2d");
canvas.height = 600;
canvas.width = 600;
const gameBoard = new GameBoard();


function gameLoop(timestamp) {
    update();
    draw();

    requestAnimationFrame(gameLoop); // Kolejna klatka
}

function update() {}

function draw() {
    canvas.clearRect(0, 0, canvas.width, canvas.height);
    gameBoard.drawBoard(canvas);
    drawPlayers(canvas);
}

function initEvents(){
    playerKeyboardController()
}

//-----DONT OVERRIDE THE CODE BELOW:
initEvents();
// Start gry
requestAnimationFrame(gameLoop);