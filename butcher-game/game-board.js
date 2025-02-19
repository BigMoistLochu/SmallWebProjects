const gameBoardDiv  = document.getElementById("game-board");
var isBoardRendered = false;

const board = [
    [1, 0, 0, 0, 1, 0 , 1 , 1, 0, 1],
    [1, 0, 1, 0, 1, 0 , 1 , 1, 0, 0],
    [1, 0, 0, 0, 1, 0 , 1 , 1, 0, 1],
    [1, 0, 1, 0, 1, 0 , 1 , 1, 0, 0],
    [1, 0, 0, 0, 1, 0 , 1 , 1, 0, 0],
    [1, 0, 0, 0, 1, 0 , 1 , 1, 0, 0],
    [1, 0, 0, 0, 1, 0 , 1 , 1, 0, 1],
    [1, 0, 1, 0, 1, 0 , 1 , 1, 0, 0],
    [1, 0, 0, 0, 1, 0 , 1 , 1, 0, 0],
    [1, 0, 0, 0, 1, 0 , 1 , 1, 0, 0]
];


export function drawBoard(){
    if(isBoardRendered) return;

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if(board[i][j] === 0) drawTileGrass();
            if(board[i][j] === 1) drawTileTree();
        }
    }
    isBoardRendered = true;
}

function drawTileGrass(){
    var grassTileDiv = document.createElement('div');
    grassTileDiv.className = "tile-grass";
    gameBoardDiv.appendChild(grassTileDiv);
}

function drawTileTree(){
    var treeTileDiv = document.createElement('div');
    treeTileDiv.className = "tile-tree";
    gameBoardDiv.appendChild(treeTileDiv);
}
