import { players } from "../cache/PersistentDataContainer.js";

const canvas = document.getElementById("playerDraw");
const ctx = canvas.getContext("2d");
const x = canvas.width = 64;
const y = canvas.height = 64;
const spriteSheet = new Image();
spriteSheet.src = "./assets/images/player-01-walk.png";

export function drawPlayers(){
    ctx.drawImage(spriteSheet, 0, 0, x, y);
}