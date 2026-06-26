import gameState from './GameState.js';
import {player1,player2} from './Players.js';
import tilesMapping from './TilesMapping.js'

export const gameStateManager = (()=>{

    // must be called by an external actor object
    let addValueToTile= function(tileName)
    {
        let tile = tilesMapping[`${tileName}`];
        tile = gameState.currentPlayer.value;
    }

    let increaseCurrentPlayerScore= function()
    {
        gameState.currentPlayer.score++;
    }

    let switchPlayers= function()
    {
        tempPlayer = gameState.lastPlayer;
        gameState.lastPlayer = currentPlayer;
        gameState.currentPlayer = tempPlayer; 
    }


    let resetBoard = function()
    {
        gameState.gameBoard = [];
        gameState.currentPlayer = gameState.players[0];
        gameState.lastPlayer = gameState.players[1];
        gameState.lastPlayedTileIndex=[];
        gameState.nextTileValue = null;
        gameState.lastTurnPlayer = null;
    }
    let initializeGameState= function()
    {

        gameState.players[0]=player1;
        gameState.players[1]=player2;
        resetBoard();

     
    }
    let setLastPlayedTileString = function (tileNameString)
    {
        gameState.lastPlayedTileString=tileNameString;
    }

    return {addValueToTile,increaseCurrentPlayerScore,switchPlayers,resetBoard,initializeGameState,setLastPlayedTileString}

})()

 
   

