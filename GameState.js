export let gameState = (
    ()=>
    {
        let gameBoard=[];
        let players = [];
        let lastPlayer = {};
        let currentPlayer = {};
        let lastPlayedTileString='';
        let nextTileValue = null;

        return {gameBoard,players,lastPlayer,currentPlayer,lastPlayedTileString,nextTileValue}

    }

)()
