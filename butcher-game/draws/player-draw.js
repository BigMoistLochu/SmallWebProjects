import {gameBoardCanvas,tileSize} from "../cache/PersistentDataContainer.js";

const playerCanvas = gameBoardCanvas.getContext("2d");
const playerImage = new Image();
playerImage.src = "./assets/images/character.png"

export function drawPlayers(){
    playerCanvas.drawImage(playerImage, 0, 0, tileSize, tileSize);
}