import {gameBoardCanvas,tileSize,players} from "../cache/PersistentDataContainer.js";

const playerCanvas = gameBoardCanvas.getContext("2d");
const playerImage = new Image();
playerImage.src = "./assets/images/character.png";

export function drawPlayers(){
    let player = players[0];
    playerCanvas.drawImage(player.image, player.x * tileSize, player.y * tileSize, tileSize, tileSize);
}