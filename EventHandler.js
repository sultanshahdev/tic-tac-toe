import gameState from './GameState.js' 
let eventManager= (
    ()=>
    {

        let tiles = document.querySelectorAll('.tile');

        tiles.forEach((tile)=>
        {
            tile.addAttribute('blocked','false');
            tile.addEvenetListener('click',gameEvent(e))

        });

        let gameEvent = function(e) 
        {
            if(e.target.getAttribute('blocked'=== 'true'))return;
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
            gameStateManage.switchPlayers();
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
            this.displayWinMessage(winningStateChecker.winner.name);
            this.updateScoreForWinner(winner);
            gameStateManager.resetBoard();
            this.resetDisplay();

        }
        let resetDisplay = function()
        {
            tiles.forEach((tile)=>{resetTile(tile)})
        }

        let resetTile = function(element)
        {
            if(element.firstChild!==null)
            {
                element.removeChild(element.firstChild)
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
                document.querySelector('#player1-score').innerText = `SCORE : ${gameState.lastPlayer.score} `   
            }
        }
        let displayWinMessage = function()
        {
            let winMsgElement = document.querySelector('.win-msg')
            {
                winMsgElement.innexText = `${winnerStateCheck.successRecord.winner.name} won this Round!`;
                winMsgElement.showModal();
            }    

            let newRoundBtn = document.querySelector('.new-round-btn');
            newRoundBtn.addEventListener('click',()=>{winMsgElement.close();})
        }

        let getImageType= function()
        {
            let image = null;
            if(this.gameState.currentPlayer.id===0)
            {
                image = createCrossImage();
            }
            else if(this.gameState.currentPlayer.id==1)
            {
                image = createDotImage();
            }
            return image;
        }
        let createCrossImage = function()
        {
            let imageElemet = document.createElement('img');
            imageElement.addAttribute('src','./assets/cross.png');
            imageElement.appendClass('.cross-img');
            return imageElement;

        }
        let createCircleImage = function()
        {
            let imageElemet = document.createElement('img');
            imageElement.addAttribute('src','./assets/circle.png');
            imageElement.appendClass('.circle-img');
            return imageElement;

        }
       

    }
)()
