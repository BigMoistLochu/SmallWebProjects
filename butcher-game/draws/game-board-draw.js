import { gameBoardCanvas,tileSize,mapPath } from "../cache/PersistentDataContainer.js";
const board = [
    [2 , 2 , 2 , 2 , 2, 2 , 2 , 2, 2 , 2],
    [2 , 0 , 1 , 0 , 1, 0 , 1 , 1, 0 , 2],
    [2 , 0 , 0 , 0 , 1, 0 , 1 , 1, 0 , 2],
    [2 , 0 , 1 , 0 , 1, 0 , 1 , 1, 0 , 2],
    [2 , 0 , 0 , 0 , 1, 0 , 1 , 1, 0 , 2],
    [2 , 0 , 0 , 0 , 1, 0 , 1 , 1, 0 , 2],
    [2 , 0 , 0 , 0 , 1, 0 , 1 , 1, 0 , 2],
    [2 , 0 , 1 , 0 , 1, 0 , 1 , 1, 0 , 2],
    [2 , 0 , 0 , 0 , 1, 0 , 1 , 1, 0 , 2],
    [2 , 2 , 2 , 2 , 2, 2 , 2 , 2 , 2 ,2]
];
const mapImage = createMapImage();
const map = gameBoardCanvas.getContext("2d");

export function drawBoardTest(){
    for (let row = 0; row < board.length; row++) {
        for (let column = 0; column < board[row].length; column++) {

            let tileId = board[row][column];
            let tilePosition = getTilePositionXYById(tileId);
            if(tilePosition === null) continue;

            const [tileX, tileY] = tilePosition;

            map.drawImage(mapImage,
                tileX * tileSize,tileY * tileSize,tileSize,tileSize,  //Image draw
                column * tileSize, row * tileSize,tileSize,tileSize); //Canvas draw
        }
    }
}


function getTilePositionXYById(id){
    if(!Number.isInteger(id)) throw new Error("ID musi być liczbą całkowitą!");
    if(id === 0) return [1,1];
    if(id === 1) return [0,0];
    else return [0,0];
}

function createMapImage(){
    const mapImage = new Image();
    mapImage.src = mapPath;
    return mapImage;
}
