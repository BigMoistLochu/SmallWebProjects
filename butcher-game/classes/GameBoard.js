export class GameBoard{

    #mapImage;

    #tileSize = 32;

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
           this.#mapImage.src = "./assets/images/grass.png";
       }
    }

    draw(ctx){
        for (let row = 0; row < this.#board.length; row++) {
            for (let column = 0; column < this.#board[row].length; column++) {

                let tileId = this.#board[row][column];
                ctx.drawImage(this.#mapImage,
                    0,0,this.#tileSize,this.#tileSize,  //Image draw
                    column * this.#tileSize, row * this.#tileSize,this.#tileSize,this.#tileSize); //Canvas draw
            }
        }
    }








}