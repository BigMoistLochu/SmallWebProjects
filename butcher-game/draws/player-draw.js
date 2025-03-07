import {players} from "../cache/PersistentDataContainer.js";

const tileSize = 32;

export function drawPlayers(ctx){
    let player = getPlayerByUUID(localStorage.getItem("jwt"));
    ctx.drawImage(player.image, player.x * tileSize, player.y * tileSize, tileSize, tileSize);
}

function getPlayerByUUID(UUID){
    return players.find((player)=> player.uuid === UUID);
}
