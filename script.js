'use strict';
let secretNumber = Math.trunc(Math.random() * 30) + 1;
let score = 15;
console.log(secretNumber, typeof secretNumber);
let highscore = 0;
document.querySelector('.score').textContent = score;

function displayMessage(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
   const userInput =  Number(document.querySelector('.guess').value);

   // When there is no input
   if( !userInput ){
    displayMessage('⛔️ No number!');
   } else if (userInput === secretNumber){
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor =' #60b347';
    document.querySelector('.number').style.width = '30rem';
    if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
   } else if( userInput !== secretNumber){
    if (score > 1){
        displayMessage(userInput > secretNumber ? '📈 Too high!' : '📉 Too low!');
        score--;
        document.querySelector('.score').textContent = score;

    }else{
        displayMessage('💥 You lost the game!');
        document.querySelector('.message').classList.add('large-text');
        document.querySelector('.score').textContent = 0;
        document.querySelector('.check').style.display = 'none';
    }
   }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 15;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    console.log(secretNumber, typeof secretNumber);
    document.querySelector('.score').textContent = score;
    document.querySelector('.check').style.display = 'block';

    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.message').classList.remove('large-text');
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
  