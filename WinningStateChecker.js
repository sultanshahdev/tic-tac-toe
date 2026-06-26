import tileClassToActionArrayMap from './CheckMap.js';
import tileToIndexMap from './TileToIndexMap';
import gameState from './GameState.js'
const winningStateChecker = (
    ()=>
    {
        let cordinates = [];
        let gameBoard = gameState.gameBoard[];
        let cordinatesString = '';
        let currentX=null;
        let currentY=null;
        let actions    = [];
        let matchFound = false;
        let tileValue  = null;
        let successRecord = null;


        let setCordinatesString = function()
        {
            this.cordinatesString = tileToIndexMap[gameState.lastPlayedTileString];
        }
        let getCordinatesFromString = function()
        {
            this.cordinates = cordinatesString.split(',');
            this.currentX = Number(cordinates[0]);
            this.currentY = Number(cordinates[1]);
        }


        
        


        let decideActions = function()
        {
            this.actions = tileClassToActionArrayMap[gameState.lastPlayedTileString];
        }

        let performActions = function()
        {
            this.actions.forEach((action)=>action());
        }


        let decideSuccess = fucntion()
        {
            if(this.matchFound===true)
            {
                this.successRecord = 
                {
                    winner : gameState.lastTurnPlayer
                }
            }
            else 
            {
                this.successRecord = null;
            }
        }



        let checkPossibleMatches = function() 
        {
            setCordinateString();
            getCordinatesFromString();
            decideActions();
            performActions();
            decideSuccess();
        }

        let checkUp = function ()
        {
            if(this.gameBoard[currentX-1][currentY]!==this.tileValue)
                this.matchFound = false;

        }
        let checkDown = function()
        {
            if(this.gameBoard[currentX+1][currentY]!==this.tileValue)
                this.matchFound = false;
        }

        let checkLeft = function()
        {
            if(this.gameBoard[currentX][currentY-1]!==this.tileValue)
                this.matchFound = false;
        }
        let checkRight = function()
        {
            if(this.gameBoard[currentX][currentY+1]!==this.tileValue)
                this.matchFound = false;
        }

        let checkTwoDowns = function()
        {
            if(this.gameBoard[currentX+1][currentY]!==this.tileValue || this.gameBoard[currentX+2][currentY]!==this.tileValue)
            {
                this.matchFound = false;
            }
        }
        let checkTwoUps = function()
        {
            if(this.gameBoard[currentX-1][currentY]!==this.tileValue || this.gameBoard[currentX-2][currentY]!==this.tileValue)
            {
                this.matchFound = false;
            }
        }

        let checkTwoLefts = function()
        {
            if(this.gameBoard[currentX][currentY-1]!==this.tileValue || this.gameBoard[currentX][currentY-2]!==this.tileValue)
            {
                this.matchFound = false;
            }
        }



        let checkTwoRights = function()
        {
            if(this.gameBoard[currentX][currentY+1]!==this.tileValue || this.gameBoard[currentX][currentY+2]!==this.tileValue)
            {
                this.matchFound = false;
            }
        }
        let checkSlantDownFromRight= function ()
        {
            if(this.gameBoard[currentX+1][currentY-1]!==this.tileValue || this.gameBoard[currentX+2][currentY-2!==this.tileValue])
            {
                this.matchFound = false;
            }
        }
        let checkSlantDownFromLeft = function()
        {
            if(this.gameBoard[currentX+1][currentY+1]!==this.tileValue || this.gameBoard[currentX+2][currentY+2!==this.tileValue])
            {
                this.matchFound = false;
            }   
        }

        let checkSlantUpFromLeft = function ()
        {
            if(this.gameBoard[currentX-1][currentY+1]!==this.tileValue || this.gameBoard[currentX-2][currentY+2!==this.tileValue])
            {
                this.matchFound = false;
            }   

        }
        let checkSlantUpFromRight = function ()
        {
            if(this.gameBoard[currentX-1][currentY-1]!==this.tileValue || this.gameBoard[currentX-2][currentY-2!==this.tileValue])
            {
                this.matchFound = false;
            }   

        }
        let checkTopRight = function ()
        {
        if(this.gameBoard[currentX-1][currentY+1]!==this.tileValue)
            {
                this.matchFound = false;
            }   
        }
        let checkTopLeft = function ()
        {
        if(this.gameBoard[currentX-1][currentY-1]!==this.tileValue)
            {
                this.matchFound = false;
            }   
        }
        let checkBottomRight = function ()
        {
        if(this.gameBoard[currentX+1][currentY+1]!==this.tileValue)
            {
                this.matchFound = false;
            }   
        }
        let checkBottomLeft = function ()
        {
        if(this.gameBoard[currentX+1][currentY-1]!==this.tileValue)
            {
                this.matchFound = false;
            }   
        }






    }
)();