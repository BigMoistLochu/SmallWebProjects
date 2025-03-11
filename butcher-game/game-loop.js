import { playerKeyboardController } from "./eventListeners/player-controller-listener.js";
import {GameBoard} from "./classes/GameBoard.js";
import {getAllPlayers} from "./PersistentDataContainer.js";


const canvas = document.getElementById("game-board");

const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;

const gameBoard = new GameBoard();


function gameLoop(timestamp) {
    update();
    draw();

    requestAnimationFrame(gameLoop); // Kolejna klatka
}

function update() {}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    gameBoard.draw(ctx);
    getAllPlayers().forEach((player) => player.draw(ctx));
}

function initEvents(){
    playerKeyboardController()
}

//-----DONT OVERRIDE THIS CODE BELOW:
initEvents();
// Start gry
requestAnimationFrame(gameLoop);