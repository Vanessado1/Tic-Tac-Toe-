const cells = document.querySelectorAll(".cell");
const staturText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
let options = ["","","","","","","","",""];
let currentPlayer = "X";
let running = false; 

initilizeGame();

function initilizeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("clicked", restartBtn);

}
function cellClicked(){

}
function updateCell(cell, index){

}
function changePlayer(){

}
function checkWinner(){

}
function restartGame(){

}