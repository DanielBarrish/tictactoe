let playerOneTurn = true;

const Square = () => {
    let occupied = false;
    let move = "";
    return { occupied, move }
}

const gameBoard = (() => {
    let arr = [];
    for (i = 0; i < 9; i++) {
        arr.push(Square());
    }

    const getArr = () => arr;
    let setSquare = (j, newOccupied, newMove) => {
        arr[j].occupied = newOccupied;
        arr[j].move = newMove;
    };

    let consoleTable = () => console.table(arr);

    let checkMove = (index) => !arr[index].occupied;

    let checkResult = () => {
        let x = "X";
        let o = "O";
        /*        *********** PLAYER ONE WINS ************** */
        if (arr[0].move == x && arr[1].move == x && arr[2].move == x) {
            drawLine(1, 2, 3);
            return 1;
        } else if (arr[3].move == x && arr[4].move == x && arr[5].move == x) {
            drawLine(4, 5, 6);
            return 1;
        } else if (arr[6].move == x && arr[7].move == x && arr[8].move == x) {
            drawLine(7, 8, 9);
            return 1;
        } else if (arr[0].move == x && arr[3].move == x && arr[6].move == x) {
            drawLine(1, 4, 7);
            return 1;
        } else if (arr[1].move == x && arr[4].move == x && arr[7].move == x) {
            drawLine(2, 5, 8);
            return 1;
        } else if (arr[2].move == x && arr[5].move == x && arr[8].move == x) {
            drawLine(3, 6, 9);
            return 1;
        } else if (arr[0].move == x && arr[4].move == x && arr[8].move == x) {
            drawLine(1, 5, 9);
            return 1;
        } else if (arr[2].move == x && arr[4].move == x && arr[6].move == x) {
            drawLine(3, 5, 7);
            return 1;
            /*        *********** PLAYER TWO WINS ************** */
        } else if (arr[0].move == o && arr[1].move == o && arr[2].move == o) {
            drawLine(1, 2, 3);
            return 2;
        } else if (arr[3].move == o && arr[4].move == o && arr[5].move == o) {
            drawLine(4, 5, 6);
            return 2;
        } else if (arr[6].move == o && arr[7].move == o && arr[8].move == o) {
            drawLine(7, 8, 9);
            return 2;
        } else if (arr[0].move == o && arr[3].move == o && arr[6].move == o) {
            drawLine(1, 4, 7);
            return 2;
        } else if (arr[1].move == o && arr[4].move == o && arr[7].move == o) {
            drawLine(2, 5, 8);
            return 2;
        } else if (arr[2].move == o && arr[5].move == o && arr[8].move == o) {
            drawLine(3, 6, 9);
            return 2;
        } else if (arr[0].move == o && arr[4].move == o && arr[8].move == o) {
            drawLine(1, 5, 9);
            return 2;
        } else if (arr[2].move == o && arr[4].move == o && arr[6].move == o) {
            drawLine(3, 5, 7);
            return 2;
            /*        *********** DRAW ************** */
        } else if (arr[0].occupied && arr[1].occupied && arr[2].occupied && arr[3].occupied && arr[4].occupied && arr[5].occupied && arr[6].occupied && arr[7].occupied && arr[8].occupied) {
            return 0;
            /*        *********** NO RESULT YET ************** */
        } else {
            return -1;
        }

    }

    return { getArr, setSquare, consoleTable, checkMove, checkResult };




})();


function drawLine(start, middle, end) {
    document.getElementById("square" + start).style.backgroundColor = "red";
    document.getElementById("square" + middle).style.backgroundColor = "red";
    document.getElementById("square" + end).style.backgroundColor = "red";

}


function drawMove(move, square) {
    document.getElementById("square" + square).textContent = move;
    if (move == "X") {
        document.getElementById("square" + square).style.color = "purple";
    } else {
        document.getElementById("square" + square).style.color = "orange";
    }
}

function makeMove(square, turn) {
    let letter = "";
    let result = -1;
    if (turn == true) {
        letter = "X";
    } else {
        letter = "O";
    }

    if (gameBoard.checkMove(square)) {
        gameBoard.setSquare(square, true, letter);
        drawMove(letter, square + 1);
        result = gameBoard.checkResult();
        if (result == 1) {
            alert("Player One Won!");
        } else if (result == 2) {
            alert("Player Two Won!");
        } else if (result == 0) {
            alert("Draw!");
        } else {
            playerOneTurn = !playerOneTurn;
        }
    } else {
        alert("Illegal Move!");
    }
}

document.getElementById("newgamebtn").addEventListener("click", () => {
    playerOneTurn = true;
    for (i = 0; i < 9; i++) {
        gameBoard.setSquare(i, false, "");

        document.getElementById("square" + (i + 1)).textContent = "";
        document.getElementById("square" + (i + 1)).style.backgroundColor = "";
    }

});



document.getElementById("square1").addEventListener("click", () => {
    makeMove(0, playerOneTurn);
});

document.getElementById("square2").addEventListener("click", () => {
    makeMove(1, playerOneTurn);
});

document.getElementById("square3").addEventListener("click", () => {
    makeMove(2, playerOneTurn);
});

document.getElementById("square4").addEventListener("click", () => {
    makeMove(3, playerOneTurn);
});

document.getElementById("square5").addEventListener("click", () => {
    makeMove(4, playerOneTurn);
});

document.getElementById("square6").addEventListener("click", () => {
    makeMove(5, playerOneTurn);
});

document.getElementById("square7").addEventListener("click", () => {
    makeMove(6, playerOneTurn);
});

document.getElementById("square8").addEventListener("click", () => {
    makeMove(7, playerOneTurn);
});

document.getElementById("square9").addEventListener("click", () => {
    makeMove(8, playerOneTurn);
});





