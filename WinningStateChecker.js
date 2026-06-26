import tileClassToActionArrayMap from './TilesToActionMap.js';
import tileToIndexMap from './TileToIndexMap';
import gameState from './GameState.js'
export const winningStateChecker = (
    ()=>
    {
        let cordinates = [];
        let gameBoard = gameState.gameBoard;
        let cordinatesString = '';
        let currentX=null;
        let currentY=null;
        let actions    = [];
        let matchFound = false;
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
                    winner : gameState.lastTurnPlayer
                }
            }
            else 
            {
                successRecord = null;
            }
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
            if(gameBoard[currentX-1][currentY]!==tileValue)
                matchFound = false;

        }
        let checkDown = function()
        {
            if(gameBoard[currentX+1][currentY]!==tileValue)
                matchFound = false;
        }

        let checkLeft = function()
        {
            if(gameBoard[currentX][currentY-1]!==tileValue)
                matchFound = false;
        }
        let checkRight = function()
        {
            if(gameBoard[currentX][currentY+1]!==tileValue)
                matchFound = false;
        }

        let checkTwoDowns = function()
        {
            if(gameBoard[currentX+1][currentY]!==tileValue || gameBoard[currentX+2][currentY]!==tileValue)
            {
                matchFound = false;
            }
        }
        let checkTwoUps = function()
        {
            if(gameBoard[currentX-1][currentY]!==tileValue || gameBoard[currentX-2][currentY]!==tileValue)
            {
                matchFound = false;
            }
        }

        let checkTwoLefts = function()
        {
            if(gameBoard[currentX][currentY-1]!==tileValue || gameBoard[currentX][currentY-2]!==tileValue)
            {
                matchFound = false;
            }
        }



        let checkTwoRights = function()
        {
            if(gameBoard[currentX][currentY+1]!==tileValue || gameBoard[currentX][currentY+2]!==tileValue)
            {
                matchFound = false;
            }
        }
        let checkSlantDownFromRight= function ()
        {
            if(gameBoard[currentX+1][currentY-1]!==tileValue || gameBoard[currentX+2][currentY-2!==tileValue])
            {
                matchFound = false;
            }
        }
        let checkSlantDownFromLeft = function()
        {
            if(gameBoard[currentX+1][currentY+1]!==tileValue || gameBoard[currentX+2][currentY+2!==tileValue])
            {
                matchFound = false;
            }   
        }

        let checkSlantUpFromLeft = function ()
        {
            if(gameBoard[currentX-1][currentY+1]!==tileValue || gameBoard[currentX-2][currentY+2!==tileValue])
            {
                matchFound = false;
            }   

        }
        let checkSlantUpFromRight = function ()
        {
            if(gameBoard[currentX-1][currentY-1]!==tileValue || gameBoard[currentX-2][currentY-2!==tileValue])
            {
                matchFound = false;
            }   

        }
        let checkTopRight = function ()
        {
        if(gameBoard[currentX-1][currentY+1]!==tileValue)
            {
                matchFound = false;
            }   
        }
        let checkTopLeft = function ()
        {
        if(gameBoard[currentX-1][currentY-1]!==tileValue)
            {
                matchFound = false;
            }   
        }
        let checkBottomRight = function ()
        {
        if(gameBoard[currentX+1][currentY+1]!==tileValue)
            {
                matchFound = false;
            }   
        }
        let checkBottomLeft = function ()
        {
        if(gameBoard[currentX+1][currentY-1]!==tileValue)
            {
                matchFound = false;
            }   
        }

        return {setCordinatesString,getCordinatesFromString,decideActions,performActions,decideSuccess,checkPossibleMatches}






    }
)();