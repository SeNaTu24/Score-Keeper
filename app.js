const p1button = document.querySelector("#p1button")
const p2button = document.querySelector("#p2button")
const resetButton = document.querySelector("#reset")
const playToSelect = document.querySelector("#playTo")

const p1Display = document.querySelector("#p1Display")
const p2Display = document.querySelector("#p2Display")

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;


p1button.addEventListener("click", function () {
   if (!isGameOver) {
      p1Score += 1;
      if (p1Score === winningScore) {
         isGameOver = true;
         // p1Display.classList.add('winner', 'loser')
         p1Display.style.color = 'green'
      }
      else {
         p1Display.style.color = 'red'
      }
      p1Display.textContent = p1Score
   }

})

p2button.addEventListener("click", function () {
   if (!isGameOver) {
      p2Score += 1;
      if (p2Score === winningScore) {
         isGameOver = true;
         // p2Display.classList.add('winner', 'loser')
         p2Display.style.color = 'green'
      }
      else {
         p2Display.style.color = 'red'
      }
      p2Display.textContent = p2Score
   } c

})


playToSelect.addEventListener('change', function () {
   winningScore = parseInt(playToSelect.value);
   reset();
})

resetButton.addEventListener("click", reset)

function reset() {
   isGameOver = false;
   p1Score = 0;
   p2Score = 0;
   p1Display.textContent = 0;
   p2Display.textContent = 0;

   // p1Display.classList.remove('winner', 'loser')
   // p2Display.classList.remove('winner', 'loser')
   p1Display.style.color = null
   p2Display.style.color = null

}