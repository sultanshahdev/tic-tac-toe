import {gameState} from './GameState.js' 
import {winningStateChecker} from "./WinningStateChecker.js";
import {gameStateManager} from './GameStateManager.js';
export let eventManager= (
    ()=>
    {

        let tiles = document.querySelectorAll('.tile');

        tiles.forEach((tile)=>
        {
            tile.setAttribute('blocked','false');
            tile.addEventListener('click',(e)=>{gameEvent(e)})

        });

        let gameEvent = function(e) 
        {
            if(e.target.getAttribute('blocked') === 'true')return;
            else
            {
                addImageToTile(e.target);
                updateGameState(e.target);
                checkAndDisplayWin();

            }
        }
        let addImageToTile = function(targetElement)
        {
            let image = getImageType();
            targetElement.appendChild(image);
        };
        let updateGameState = function(targetElement)
        {
            
            gameStateManager.addValueToTile(targetElement.id);
            gameStateManager.switchPlayers();
            gameStateManager.setLastPlayedTileString(targetElement.id);


        }


    
        let checkAndDisplayWin = function()
        {
            winningStateChecker.checkPossibleMatches();
            if(winningStateChecker.successRecord!=null)
            {
                declareWinnerAndUpdateGameBoard();
            }
        }
        let declareWinnerAndUpdateGameBoard = function()
        {
            displayWinMessage();
            updateScoreForWinner(winner);
            gameStateManager.resetBoard();
            winningStateChecker.resetState();
            resetDisplay();

        }
        let resetDisplay = function()
        {
            tiles.forEach((tile)=>{resetTile(tile)})
        }

        let resetTile = function(element)
        {
            if(element.firstChild!==null)
            {
                element.removeChild(element.firstChild);
                element.setAttribute('blocked','false');
            }
        }

        let updateScoreForWinner = function()
        {
            gameState.lastPlayer.score++;
            if(gameState.lastPlayer.id===0)
            {
                document.querySelector('#player1-score').innerText = `SCORE : ${gameState.lastPlayer.score} `
            }
            else if (gameState.lastPlayer.id===1)
            {
                document.querySelector('#player2-score').innerText = `SCORE : ${gameState.lastPlayer.score} `   
            }
        }
        let displayWinMessage = function()
        {
            let winMsgElement = document.querySelector('.win-msg')
            {
                winMsgElement.innerText = `${winnerStateChecker.successRecord.winner.name} won this Round!`;
                winMsgElement.showModal();
            }    

            let newRoundBtn = document.querySelector('.new-round-btn');
            newRoundBtn.addEventListener('click',()=>{winMsgElement.close();})
        }

        let getImageType= function()
        {
            let image = null;
            if(gameState.currentPlayer.id===0)
            {
                image = createCrossImage();
            }
            else if(gameState.currentPlayer.id==1)
            {
                image = createCircleImage();
            }
            return image;
        }
        let createCrossImage = function()
        {
            let imageElemet = document.createElement('img');
            imageElement.setAttribute('src','./assets/cross.png');
            imageElement.classList.add('cross-img');
            return imageElement;

        }
        let createCircleImage = function()
        {
            let imageElemet = document.createElement('img');
            imageElement.setAttribute('src','./assets/circle.png');
            imageElement.classList.add('circle-img');
            return imageElement;

        }
       
        return{gameEvent,addImageToTile,checkAndDisplayWin,createCircleImage,createCrossImage,declareWinnerAndUpdateGameBoard,displayWinMessage,getImageType,resetDisplay,resetTile}
        
    }
)()
