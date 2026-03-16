let currentPlayer = "X";
let cells = document.querySelectorAll(".cell");
let statusText = document.getElementById("status");

function play(cell){
    if(cell.innerHTML !== "") return;

    cell.innerHTML = currentPlayer;

    if(checkWinner()){
        statusText.innerHTML = "Player " + currentPlayer + " Wins!";
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.innerHTML = "Player " + currentPlayer + " Turn";
}

function checkWinner(){
    let combos = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];

    for(let combo of combos){
        let a = cells[combo[0]].innerHTML;
        let b = cells[combo[1]].innerHTML;
        let c = cells[combo[2]].innerHTML;

        if(a !== "" && a === b && b === c){
            return true;
        }
    }
    return false;
}

function restart(){
    cells.forEach(cell => cell.innerHTML = "");
    currentPlayer = "X";
    statusText.innerHTML = "Player X Turn";
}