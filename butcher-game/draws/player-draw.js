import {players} from "../cache/PersistentDataContainer.js";

const tileSize = 16;

export function drawPlayers(ctx){
    let player = players[0];
    ctx.drawImage(player.image, player.x * tileSize, player.y * tileSize, tileSize, tileSize);
}