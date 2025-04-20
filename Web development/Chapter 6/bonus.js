// index.js

// DOM Elements
const rgbValueDisplay = document.getElementById("rgbValue");
const colorOptions = document.getElementById("colorOptions");
const message = document.getElementById("message");
const livesDisplay = document.getElementById("lives");
const scoreDisplay = document.getElementById("score");
const restartBtn = document.getElementById("restartBtn");

let correctColor;
let lives = 3;
let score = 0;

// Generate random RGB color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return 'rgb(${r}, ${g}, ${b})';
}

// Start new round
function generateGame() {
  colorOptions.innerHTML = "";
  message.textContent = "";

  // Generate correct color and options
  correctColor = getRandomColor();
  rgbValueDisplay.textContent = correctColor.toUpperCase();

  const options = [correctColor];

  // Add two more random (wrong) options
  while (options.length < 3) {
    const color = getRandomColor();
    if (!options.includes(color)) {
      options.push(color);
    }
  }

  // Shuffle colors
  options.sort(() => 0.5 - Math.random());

  // Create clickable color boxes
  options.forEach(color => {
    const div = document.createElement("div");
    div.classList.add("color-option");
    div.style.backgroundColor = color;
    div.addEventListener("click", () => checkAnswer(color));
    colorOptions.appendChild(div);
  });
}

// Check if user clicked the correct color
function checkAnswer(selectedColor) {
  if (selectedColor === correctColor) {
    message.textContent = "Correct!";
    score++;
    scoreDisplay.textContent = 'Score: ${score}';
    generateGame();
  } else {
    lives--;
    message.textContent = "Wrong! Try Again.";
    livesDisplay.textContent = 'Lives: ${lives}';
    if (lives === 0) endGame();
  }
}

// End the game and show restart button
function endGame() {
  message.textContent = 'Game Over! Your score was ${score}.';
  colorOptions.innerHTML = "";
  restartBtn.style.display = "inline-block";
}

// Restart game setup
function restartGame() {
  lives = 3;
  score = 0;
  scoreDisplay.textContent = 'Score: ${score}';
  livesDisplay.textContent = 'Lives: ${lives}';
  restartBtn.style.display = "none";
  generateGame();
}

// Event Listener for restart
restartBtn.addEventListener("click", restartGame);

// Start the game for the first time
generateGame();


