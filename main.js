// GLOBAL VARIABLES

const boardSquare = document.querySelectorAll(".board-square");
const playerDisplay = document.querySelector(".player-display");
const winnerDisplay = document.querySelector(".winner-display");
const newGameButton = document.querySelector(".new");
const resetButton = document.querySelector(".reset");
const playerOneInput = document.querySelector("#player-one");
const playerTwoInput = document.querySelector("#player-two");

// GAMEBOARD
const gameBoard = (function () {
    let board =
        [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
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
                board[row][col] = "";
            }
        }
    }

    return {
        getBoard,
        makeMove,
        resetBoard
    };

})();

// PLAYERS
function createPlayer(name, symbol) {
    return {
        name: name,
        symbol: symbol,
    }
};

// GAME LOGIC
const Game = (function () {
    let playerOne;
    let playerTwo;
    let currentPlayer;

    function startNewGame() {
        // Clear gameboard
        gameBoard.resetBoard();

        // Create players
        playerOne = createPlayer("Player X", "X")
        playerTwo = createPlayer("Player O", "O")

        // Decide who goes first
        if (Math.random() > 0.5) {
            currentPlayer = playerOne;
        } else {
            currentPlayer = playerTwo;
        }

        console.log(`${currentPlayer.name}'s turn`);
    }

    function getCurrentPlayer() {
        return currentPlayer;
    }

    function makeMove(row, col) {

        // Determine if game is still going
        if (determineWinner() === true) {
            return;
        }

        const player = getCurrentPlayer();

    // Check if the spot is already taken
        const currentBoard = gameboard.getBoard();
        if (currentBoard[row][col] !== '') {
        console.log("Spot already taken!");
        return;                    
    }
        gameBoard.makeMove(row, col, player.symbol)
        
        //  Check if the game ended
        if (determineWinner()) {
        // Game over - handle win/tie later
        return;
    }
        if (determineWinner() === false) {
            if (currentPlayer === playerOne) {
                currentPlayer = playerTwo;
            } 
                else if (currentPlayer === playerTwo) {
                    currentPlayer = playerOne;
            }
            
        }
    }

    function determineWinner() {

    }

    return {
        startNewGame,
        getCurrentPlayer,
        makeMove,
        determineWinner
    };

})();