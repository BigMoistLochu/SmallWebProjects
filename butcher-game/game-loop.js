import {drawPlayers} from "./draws/player-draw.js";
import { playerKeyboardController } from "./eventListeners/player-controller-listener.js";
import {GameBoard} from "./classes/GameBoard.js";


const canvas = document.getElementById("game-board"); // Pobieramy element canvas
const ctx = canvas.getContext("2d"); // Pobieramy kontekst rysowania
canvas.width = 600;  // Ustawiamy szerokość na elemencie canvas
canvas.height = 600; // Ustawiamy wysokość na elemencie canvas
const gameBoard = new GameBoard();


function gameLoop(timestamp) {
    update();
    draw();

    requestAnimationFrame(gameLoop); // Kolejna klatka
}

function update() {}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    gameBoard.drawBoard(ctx);
    drawPlayers(ctx);
}

function initEvents(){
    playerKeyboardController()
}

//-----DONT OVERRIDE THE CODE BELOW:
initEvents();
// Start gry
requestAnimationFrame(gameLoop);