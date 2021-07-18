'use strict';

// Creating the secret random number

let secretNum = Math.trunc(Math.random(1)*21);


// setting score
let score= 20;

//setting high score
let highScore = 0;


// adding event listener so that the button 'check' can check the input number to the secter number

document.querySelector('.check').addEventListener('click', function () {
    
    let guess = Number (document.querySelector('.guess').value);


    // when number is less than 1

    if (guess<1) {
        document.querySelector('.message').textContent = '<Enter between 1 to 20>'
    }


    // When there is no input

    /*else if (!guess){
        document.querySelector('.message').textContent = 'No number!'
    }*/


    // when the player wins

    else if (guess === secretNum) {
        document.querySelector('.number').textContent = secretNum;

        document.querySelector('.message').textContent = '🎉  HURRAY! You won!';

        score++;

        document.querySelector('.score').textContent = score;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score
            document.querySelector('.highscore').textContent = highScore;
        }
    }


    // when the player's guess is too high

    else if (guess > secretNum) {
        if (score > 1) {
            document.querySelector('.message').textContent = '😣  Too high!';
            //score --;
            document.querySelector('.score').textContent = score--;
        }
        else {
            lostLogic();
        }
    }


    // when the player's guess is too low
    else if (guess < secretNum) {
        if (score > 1) {
            document.querySelector('.message').textContent = '😫  Too low!';
            //score --;
            document.querySelector('.score').textContent = score --;
        }
        else {
           lostLogic();
        }
    }
});


// logic for update score to 0 after losing the game

function lostLogic () {
    document.querySelector('.message').textContent = '👎 You lost the game! Try again!';
    document.querySelector('.score').textContent = 0;
    score = 0
    //return score
}


// resetting page - configuration of 'Again' button
document.querySelector('.again').addEventListener('click', function () {
    score = 20
    
    secretNum = Math.trunc(Math.random(1)*21);
    
    document.querySelector('.guess').value = '';

    document.querySelector('.message').textContent = "🤔 Start guessing...";

    document.querySelector('.score').textContent = 20;

    document.querySelector('body').style.backgroundColor = 'rgb(83, 65, 126)';

    document.querySelector('.number').style.width = '15rem';

    document.querySelector('.number').textContent = '?';

})