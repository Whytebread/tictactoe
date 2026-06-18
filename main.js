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

    function getPlayerBySymbol(symbol) {
        if (playerOne.symbol === symbol) return playerOne;
        if (playerTwo.symbol === symbol) return playerTwo;
    }

    function makeMove(row, col) {
        if (determineWinner() !== null) {
            return;
        }

        const player = getCurrentPlayer();
        const currentBoard = gameBoard.getBoard();

        if (currentBoard[row][col] !== '') {
            console.log("Spot already taken!");
            return;
        }

        gameBoard.makeMove(row, col, player.symbol)

        const result = determineWinner();
        if (result === null) {
            currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
        }
    }

    function determineWinner() {
        const b = gameBoard.getBoard();
        const lines = [
            // rows
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            // cols
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            // diagonals
            [[0, 0], [1, 1], [2, 2]],
            [[0, 2], [1, 1], [2, 0]],
        ];

        for (const [[r1, c1], [r2, c2], [r3, c3]] of lines) {
            if (b[r1][c1] !== '' &&
                b[r1][c1] === b[r2][c2] &&
                b[r2][c2] === b[r3][c3]) {
                return b[r1][c1]; // returns 'X' or 'O'
            }
        }

        // Check tie — is every cell filled?
        const isTie = b.flat().every(cell => cell !== '');
        if (isTie) return 'tie';

        return null; // game still going
    }

    return {
        startNewGame,
        getCurrentPlayer,
        getPlayerBySymbol,
        makeMove,
        determineWinner
    };

})();

// GAME DISPLAY
const displayController = (function () {
    function renderBoard() {
        const board = gameBoard.getBoard();

        for (let i = 0; i < boardSquare.length; i++) {
            const row = Math.floor(i / 3);
            const col = i % 3;

            boardSquare[i].textContent = board[row][col];
        }
    }

    function updateTurnDisplay() {
        const player = Game.getCurrentPlayer();
        if (player) {
            playerDisplay.textContent = `${player.name}'s Turn`;
        } else {
            playerDisplay.textContent = '';
        }
    }

    function showWinner() {
        const result = Game.determineWinner();
        if (result === 'tie') {
            winnerDisplay.textContent = "It's a Tie!";
        } else if (result) {
            const winner = Game.getPlayerBySymbol(result);
            winnerDisplay.textContent = `${winner.name} Wins!`;
        } else {
            winnerDisplay.textContent = '';
        }
    }

    function handleSquareClick(e) {
        const index = e.target.dataset.index;
        const row = Math.floor(index / 3);
        const col = index % 3;

        Game.makeMove(row, col);
        renderBoard();
        updateTurnDisplay();
        showWinner();
    }

    function addEventListeners() {
        boardSquare.forEach(square => {
            square.addEventListener('click', handleSquareClick);
        });

        newGameButton.addEventListener('click', () => {
            Game.startNewGame();
            renderBoard();
            updateTurnDisplay();
            winnerDisplay.textContent = '';
        });
    }

    return {
        renderBoard,
        updateTurnDisplay,
        showWinner,
        addEventListeners
    };

})();