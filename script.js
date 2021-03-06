'use strict';

//set up the player scores as zero initially.

let currentScore = 0;
let activePlayer = 0;
const playerScores = [0,0];

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const diceElement = document.querySelector('.dice');
const playerZeroScoreElement = document.querySelector('#score--0');
const playerOneScoreElement = document.querySelector('#score--1');

const btnNewElement = document.querySelector('.btn--new');
const btnRollElement = document.querySelector('.btn--roll');
const btnHoldElement = document.querySelector('.btn--hold');

const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

const startGame = ()=>{
    //playerZeroScore = 0;
    //playerOneScore = 0;
    playerZeroScoreElement.textContent = 0;
    playerOneScoreElement.textContent = 0;
    diceElement.classList.add('hidden');

}

//when you click on New game:
btnNewElement.addEventListener('click', startGame);

//start state
startGame();

//when you roll the dice 
btnRollElement.addEventListener('click', ()=>{
    let randomNumber = Math.trunc(Math.random() * 6) + 1;
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${randomNumber}.png`;
    
    //check if a 1 is rolled since that will zero the points of whichever player is active - player 0 or player 1;
    if(randomNumber !== 1){
        currentScore += randomNumber;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }else{
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1:0;
        currentScore = 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
        
    }
    
})