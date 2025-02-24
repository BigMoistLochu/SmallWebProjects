import { Player } from "../classes/Player.js";

export const gameBoardCanvas = document.getElementById("game-board");
gameBoardCanvas.width = 600;
gameBoardCanvas.height = 600;
export const tileSize = 16;

export const mapPath = "./assets/images/map.png";

const player1 = new Player(1,"Konrad");
const player2 = new Player(2,"Pawel");
const player3 = new Player(3,"James");


export const players = [player1,player2,player3];


