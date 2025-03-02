import {tileSize} from "../cache/PersistentDataContainer";

class GameBoard {

    #board = [
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

    #canvas;

    constructor(canvas) {
       this.#canvas = canvas.getContext("2d");
    }

    drawBoard(){
        for (let row = 0; row < board.length; row++) {
            for (let column = 0; column < board[row].length; column++) {

                let tileId = board[row][column];
                let tilePosition = getTilePositionXYById(tileId);
                if(tilePosition === null) continue;

                const [tileX, tileY] = tilePosition;

                this.#canvas.drawImage(mapImage,
                    tileX * tileSize,tileY * tileSize,tileSize,tileSize,  //Image draw
                    column * tileSize, row * tileSize,tileSize,tileSize); //Canvas draw
            }
        }
    }






}