import { Player } from "../classes/Player.js";

const player1 = new Player("hash1","Konrad");
const player2 = new Player("hash2","Pawel");
const player3 = new Player("hash3","James");

export const players = [player1,player2,player3];

export function getPlayerByUUID(UUID){
    return players.find((credential)=> credential.uuid === UUID);
}

