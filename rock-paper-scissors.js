   /*
        const socr = {  
        wins: 0,
        lose: 0,
        Tie:0
        };
        */

        let score = JSON.parse(localStorage.getItem('score'))
        || {
                wins: 0,
                lose: 0, // short cut default operator
                tie: 0
            };
        // the json storage is save file
        //pwede den to
        //if(!score) || if(score === null)
        /*
        if(!score) { //  if the condition is tru the statment will return a true
            score = {
                wins: 0,
                lose: 0,
                tie: 0
            };
        }
*/
            updateScoreElement();
            
            let isAutoPlaying = false; // global variable
            let intervalId;
            // document.querySelector('.js-score').innerHTML = `Win: ${score.wins}, Lose: ${score.lose}, Tie: ${score.tie}`;
            // const autoPlay = () => {

            // };
            function autoPlay(){
                if(!isAutoPlaying){
                   intervalId = setInterval(() => {
                    const playerMove = pickComputerMove();
                    playGame(playerMove);
                    },1000);
                    isAutoPlaying = true;
                } else {
                    clearInterval(intervalId);
                    isAutoPlaying = false;
                }
            }

        document.body.addEventListener('keydown', (event) => {
            if(event.key === 'r'){
                playGame('rock');
            } else if (event.key === 'p') {
                playGame('paper');
            } else if (event.key === 's'){
                playGame('scissors');
            }
        });

        document.querySelector(".js-rock-button").addEventListener('click', () => {
            playGame('rock');
        });
        document.querySelector(".js-paper-button").addEventListener('click', () => {
            playGame('paper');
        });

        document.querySelector(".js-scissors-button").addEventListener('click', () => {
            playGame('scissors');
        });

        function playGame(playerMove){
            const computerMove = pickComputerMove();
            
        let resultTwo = '';

         if(playerMove === 'scissors'){
            
            if(computerMove === 'rock'){
                resultTwo = 'You Lose.';
            } else if (computerMove === 'paper') {
                resultTwo = 'You Win.';
            } else if (computerMove === 'scissors') {
                resultTwo = 'Tie.';
            }
    } else if(playerMove === 'paper') {
        if(computerMove === 'rock'){
                resultTwo = 'You Win.';
            } else if (computerMove === 'paper') {
                resultTwo = 'Tie.';
            } else if (computerMove === 'scissors') {
                resultTwo = 'You Lose.';
            }
    } else if(playerMove === 'rock'){
        if(computerMove === 'rock'){
                resultTwo = 'Tie.';
            } else if (computerMove === 'paper') {
                resultTwo = 'You Lose.';
            } else if (computerMove === 'scissors') {
                resultTwo = 'You Win.';
            }
    }

        if(resultTwo === 'You Win.'){
            score.wins += 1;
        } else if (resultTwo === 'You Lose.') {
            score.lose += 1;
        } else if(resultTwo === 'Tie.'){
            score.tie += 1;
        }

        localStorage.setItem('score', JSON.stringify(score)); //this is the shortcut key localstorage when you are saving the file
        updateScoreElement();

        
        
        document.querySelector('.js-result').innerHTML = resultTwo;
        document.querySelector('.js-moves').innerHTML = ` You
        <img src="images/${playerMove}-emoji.png" alt="" class="move-icon">
        <img src="images/${computerMove}-emoji.png" alt="" class="move-icon">
        Computer`;

//         alert(`You pick ${playerMove}. Computer picked ${computerMove}. ${resultTwo}
// Win: ${score.wins}, Lose: ${score.lose}, Tie: ${score.tie}`);
        }

        function updatePlayer(){

        }

        function updateScoreElement(){
            document.querySelector('.js-score')
            .innerHTML = `Win: ${score.wins}, Lose: ${score.lose}, Tie: ${score.tie}`;
        }

        
        function pickComputerMove() {
            const randomNumber = Math.random();
            if(randomNumber >= 0 && randomNumber < 1 / 3) {
                computerMove = 'rock';
            } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
                computerMove = 'paper';
            } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
            computerMove = 'scissors';
            }
            return computerMove;
        }