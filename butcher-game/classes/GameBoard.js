import {tileSize} from "../cache/PersistentDataContainer.js";

export class GameBoard {

    #mapImage;

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

    constructor() {
       if(this.#mapImage === undefined || this.#mapImage === null){
           this.#mapImage = new Image();
           this.#mapImage.src = "./assets/images/map.png";
       }
    }

    drawBoard(ctx){
        for (let row = 0; row < this.#board.length; row++) {
            for (let column = 0; column < this.#board[row].length; column++) {

                let tileId = this.#board[row][column];
                let tilePosition = this.#getTilePositionXYById(tileId);
                if(tilePosition === null) continue;

                const [tileX, tileY] = tilePosition;

                ctx.drawImage(this.#mapImage,
                    tileX * tileSize,tileY * tileSize,tileSize,tileSize,  //Image draw
                    column * tileSize, row * tileSize,tileSize,tileSize); //Canvas draw
            }
        }
    }

    #getTilePositionXYById(id){
        if(!Number.isInteger(id)) throw new Error("ID musi być liczbą całkowitą!");
        if(id === 0) return [1,1];
        if(id === 1) return [0,0];
        else return [0,0];
    }






}