// GAMEBOARD
const gameBoard = (function(){
   let board =
    [
        ['','',''],
        ['','',''],
        ['','','']
    ];

    function getBoard() {
        return board;
    }

    function makeMove(row, col, symbol) {
        if (row < 0 || row > 2 || col < 0 || col > 2) {
            console.log("Invalid Position")
        }

        if (board[row][col] === "") {
            board[row][col] = symbol
        } else {
            console.log("Space is already taken")
        }
    }

function resetBoard() {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            board[row][col] === ""
        }
    }
}

    return {
        getBoard,
        makeMove,
        resetBoard
    };

}) ();

// PLAYERS
function createPlayer(name, symbol) {
    return {
        name: name,
        symbol: symbol,
    }
};

// GAME LOGIC
const Game = (function() {
    let playerOne;
    let playerTwo;
    let currentPlayer;

        function startNewGame() {

        }

        function getCurrentPlayer() {

        }

        function makeMove() {

        }

        function determineWinner() {

        }
})