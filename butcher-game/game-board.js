const TILE_SIZE = 32;
const MAP_WIDTH = 10;
const MAP_HEIGHT = 10;
export const board = [
    [1, 0, 0, 0, 1, 0 , 1 , 1, 0, 0],
    [1, 0, 0, 0, 1, 0 , 1 , 1, 0, 0],
    [1, 0, 0, 0, 1, 0 , 1 , 1, 0, 0],
    [1, 0, 0, 0, 1, 0 , 1 , 1, 0, 0]
];



export function drawBoard(){
    drawPlayer();
}

function drawPlayer(){
    var div = document.createElement('div');
    div.style.width = '50px';   // Szerokość 300px
    div.style.height = '50px';  // Wysokość 200px
    div.style.backgroundColor = 'lightblue';  // Tło na niebiesko
    div.style.border = '2px solid black'; // Obramowanie czarne
    
    var boardDiv = document.getElementById("game-board");
    
    boardDiv.appendChild(div);
}
