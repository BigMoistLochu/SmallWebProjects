const gameBoardDiv  = document.getElementById("game-board");
var isBoardRendered = false;

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


export function drawBoard(){
    if(isBoardRendered) return;

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if(board[i][j] === 0) drawTileGrass();
            if(board[i][j] === 1) drawTileTree();
            if(board[i][j] === 2) drawTileStone();
        }
    }
    isBoardRendered = true;
}

function drawTileGrass(){
    let grassTileDiv = document.createElement('div');
    grassTileDiv.className = "tile-grass";
    gameBoardDiv.appendChild(grassTileDiv);
}

function drawTileTree(){
    let treeTileDiv = document.createElement('div');
    treeTileDiv.className = "tile-tree";
    gameBoardDiv.appendChild(treeTileDiv);
}

function drawTileStone(){
    let treeTileDiv = document.createElement('div');
    treeTileDiv.className = "tile-stone";
    gameBoardDiv.appendChild(treeTileDiv);
}
