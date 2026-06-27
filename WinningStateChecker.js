import {tileClassToActionArrayMap} from './TilesToActionMap.js';
import {tileToIndexMap} from './TileToIndexMap';
import {gameStateManager} from './GameStateManager';
import {gameState} from './GameState.js'
export const winningStateChecker = (
    ()=>
    {
        let cordinates = [];
        let cordinatesString = '';
        let currentX=null;
        let currentY=null;
        let actions    = [];
        let matchFound = true;
        let tileValue  = null;
        let successRecord = null;


        let setCordinatesString = function()
        {
            cordinatesString = tileToIndexMap[gameState.lastPlayedTileString];
        }
        let getCordinatesFromString = function()
        {
            cordinates = cordinatesString.split(',');
            currentX = Number(cordinates[0]);
            currentY = Number(cordinates[1]);
        }


        
        


        let decideActions = function()
        {
            actions = tileClassToActionArrayMap[gameState.lastPlayedTileString];
        }

        let performActions = function()
        {
            actions.forEach((action)=>action());
        }


        let decideSuccess = function()
        {
            if(matchFound===true)
            {
                successRecord = 
                {
                    winner : gameState.lastPlayer
                }
            }
            else 
            {
                successRecord = null;
            }
        }

        let resetState = function()
        {
            cordinates = [];
            cordinatesString = '';
            currentX = null;
            currentY = null;
            actions = [];
            matchFound = true;
            tileValue = null;   
            successRecord = null;
        }


        let checkPossibleMatches = function() 
        {
            setCordinatesString();
            getCordinatesFromString();
            decideActions();
            performActions();
            decideSuccess();
        }

        let checkUp = function ()
        {
            if(gameState.gameBoard[currentX-1][currentY]!==tileValue)
                matchFound = false;

        }
        let checkDown = function()
        {
            if(gameState.gameBoard[currentX+1][currentY]!==tileValue)
                matchFound = false;
        }

        let checkLeft = function()
        {
            if(gameState.gameBoard[currentX][currentY-1]!==tileValue)
                matchFound = false;
        }
        let checkRight = function()
        {
            if(gameState.gameBoard[currentX][currentY+1]!==tileValue)
                matchFound = false;
        }

        let checkTwoDowns = function()
        {
            if(gameState.gameBoard[currentX+1][currentY]!==tileValue || gameState.gameBoard[currentX+2][currentY]!==tileValue)
            {
                matchFound = false;
            }
        }
        let checkTwoUps = function()
        {
            if(gameState.gameBoard[currentX-1][currentY]!==tileValue || gameState.gameBoard[currentX-2][currentY]!==tileValue)
            {
                matchFound = false;
            }
        }

        let checkTwoLefts = function()
        {
            if(gameState.gameBoard[currentX][currentY-1]!==tileValue || gameState.gameBoard[currentX][currentY-2]!==tileValue)
            {
                matchFound = false;
            }
        }



        let checkTwoRights = function()
        {
            if(gameState.gameBoard[currentX][currentY+1]!==tileValue || gameState.gameBoard[currentX][currentY+2]!==tileValue)
            {
                matchFound = false;
            }
        }
        let checkSlantDownFromRight= function ()
        {
            if(gameState.gameBoard[currentX+1][currentY-1]!==tileValue || gameState.gameBoard[currentX+2][currentY-2!==tileValue])
            {
                matchFound = false;
            }
        }
        let checkSlantDownFromLeft = function()
        {
            if(gameState.gameBoard[currentX+1][currentY+1]!==tileValue || gameState.gameBoard[currentX+2][currentY+2!==tileValue])
            {
                matchFound = false;
            }   
        }

        let checkSlantUpFromLeft = function ()
        {
            if(gameState.gameBoard[currentX-1][currentY+1]!==tileValue || gameState.gameBoard[currentX-2][currentY+2!==tileValue])
            {
                matchFound = false;
            }   

        }
        let checkSlantUpFromRight = function ()
        {
            if(gameState.gameBoard[currentX-1][currentY-1]!==tileValue || gameState.gameBoard[currentX-2][currentY-2!==tileValue])
            {
                matchFound = false;
            }   

        }
        let checkTopRight = function ()
        {
        if(gameState.gameBoard[currentX-1][currentY+1]!==tileValue)
            {
                matchFound = false;
            }   
        }
        let checkTopLeft = function ()
        {
        if(gameState.gameBoard[currentX-1][currentY-1]!==tileValue)
            {
                matchFound = false;
            }   
        }
        let checkBottomRight = function ()
        {
        if(gameState.gameBoard[currentX+1][currentY+1]!==tileValue)
            {
                matchFound = false;
            }   
        }
        let checkBottomLeft = function ()
        {
        if(gameState.gameBoard[currentX+1][currentY-1]!==tileValue)
            {
                matchFound = false;
            }   
        }

        return {setCordinatesString,getCordinatesFromString,decideActions,performActions,resetState,decideSuccess,checkPossibleMatches,
            checkBottomLeft,checkBottomRight,checkDown,checkLeft,checkRight,checkSlantDownFromLeft,checkSlantDownFromRight,checkSlantUpFromLeft,checkSlantUpFromRight,checkTopLeft,checkTopRight,checkTwoDowns,checkTwoLefts,checkTwoRights,checkTwoUps,checkUp}






    }
)();