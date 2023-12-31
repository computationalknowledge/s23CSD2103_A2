// Global variables
const diceElements = Array.from(document.querySelectorAll('.dice'));
const scoreElement = document.getElementById('score');

// Function to generate random dice rolls
function rollDice() {
  const rolls = diceElements.map(() => Math.floor(Math.random() * 6) + 1);

  // Display the rolls on the dice elements
  for (let i = 0; i < diceElements.length; i++) {
    diceElements[i].textContent = rolls[i];
  }

  // Calculate and update the score
  const score = calculateScore(rolls);
  scoreElement.textContent = score;
}

// Function to calculate the score
function calculateScore(rolls) {
    function calculateScore(rolls) {
        let score = 0;
      
        // Calculate the score based on the dice rolls
        // You need to implement the scoring rules of the Ferengi Game of Daboo here.
      
        // Example scoring logic (modify according to the game rules):
        for (const roll of rolls) {
          if (roll === 1) {
            score += 10;
          } else if (roll === 6) {
            score += 6;
          } else {
            score += roll;
          }
        }
      
        return score;
      }
      
}

// Event listener for the "Roll Dice" button
const rollButton = document.getElementById('roll-button');
rollButton.addEventListener('click', rollDice);
