import compareNumbers from './compareNumbers.js';

const input = document.getElementById('number-guess');
const button = document.getElementById('submit-button');
const resetButton = document.getElementById('reset-button');
const triesLeft = document.getElementById('tries-left');
const highLow = document.getElementById('high-low');
const winLose = document.getElementById('win-lose');


const answerNumber = Math.ceil(Math.random() * 25);


let triesCount = 5;

button.addEventListener ('click', () => {     
    
    const userGuess = Number(input.value);

    triesCount--;
    triesLeft.textContent = `${triesCount} tries left`;

    const result = compareNumbers(userGuess, answerNumber);
    
    if (result === 0) {
        winLose.textContent = 'You\'ve won! You guessed the number correctly!';
        document.getElementById('high-low').style.visibility = 'hidden';
        button.disabled = true;
    }
    else if (result === 1) {
        highLow.textContent = 'The number you guessed is too high!';     
    }
    else if (result === -1) {
        highLow.textContent = 'The number you guessed is too low!';
    }

    if (triesCount === 0) {
        winLose.textContent = 'You lost! whomp whomp';
        document.getElementById('high-low').style.visibility = 'hidden';
        button.disabled = true;
    }
});

resetButton.addEventListener ('click', () => {
    // this is a stretch goal; function incomplete; will return to this when my brain isn't super loaded!

});