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

    }

    function resetBoard() {
       let board =
        [
            ['','',''],
            ['','',''],
            ['','','']
        ];
    }


});

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