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
        board.splice(0, board.length)
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