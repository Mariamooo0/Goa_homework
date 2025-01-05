// ელემენტების მიღება
const welcomeScreen = document.getElementById('welcomeScreen');
const gameScreen = document.getElementById('gameScreen');
const nameInput = document.getElementById('nameInput');
const startBtn = document.getElementById('startBtn');
const greeting = document.getElementById('greeting');
const scoreDisplay = document.getElementById('score');
const colorPicker = document.getElementById('colorPicker');
const minRangeDisplay = document.getElementById('minRange');
const maxRangeDisplay = document.getElementById('maxRange');
const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const feedback = document.getElementById('feedback');

// local storage-ის მონაცემები
let playerName = localStorage.getItem('playerName');
let score = parseInt(localStorage.getItem('score')) || 0;
let minRange = 1;
let maxRange = parseInt(localStorage.getItem('maxRange')) || 2;
let randomNumber = generateRandomNumber(minRange, maxRange);

// ბექგრაუნდის ფერი აღდგენა
document.body.style.backgroundColor = localStorage.getItem('bgColor') || '#ffffff';

// პირველი შესვლა ან მონაცემების აღდგენა
if (playerName) {
    startGame();
} else {
    welcomeScreen.style.display = 'block';
}

// რენდომ რიცხვის გენერაცია
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// თამაშის დაწყება (პირველი შესვლის შემდეგ)
startBtn.addEventListener('click', () => {
    playerName = nameInput.value.trim();
    if (!playerName) return alert('Please enter your name.');
    
    localStorage.setItem('playerName', playerName);
    localStorage.setItem('score', score);
    localStorage.setItem('maxRange', maxRange);
    startGame();
});

function startGame() {
    welcomeScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    greeting.textContent = Hello, ${playerName}!;
    scoreDisplay.textContent = score;
    minRangeDisplay.textContent = minRange;
    maxRangeDisplay.textContent = maxRange;
}

// ბექგრაუნდის ფერის არჩევა
colorPicker.addEventListener('input', () => {
    const color = colorPicker.value;
    document.body.style.backgroundColor = color;
    localStorage.setItem('bgColor', color);
});

// რიცხვის გამოცნობა
guessBtn.addEventListener('click', () => {
    const guess = parseInt(guessInput.value);
    if (isNaN(guess)) return alert('Please enter a valid number.');

    if (guess === randomNumber) {
        score++;
        maxRange *= 2; // სირთულის გაზრდა
        randomNumber = generateRandomNumber(minRange, maxRange);
        feedback.textContent = 'Correct! The number has changed, try again!';
        localStorage.setItem('score', score);
        localStorage.setItem('maxRange', maxRange);
    } else {
        feedback.textContent = 'Wrong guess, try again!';
    }

    scoreDisplay.textContent = score;
    minRangeDisplay.textContent = minRange;
    maxRangeDisplay.textContent = maxRange;
    guessInput.value = '';
});