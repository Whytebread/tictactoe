// GAMEBOARD
const gameBoard = () => {
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


};

// PLAYERS
function createPlayer(name, symbol) {
    return {
        name: name,
        symbol: symbol,
    }
};

// GAME LOGIC