var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("#p2");
var h1 = document.querySelector("h1");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p2Button = document.querySelector("#p2");
var p3Button = document.querySelector("#p3");
var numInput = document.querySelector("input");
var paragraph = document.querySelector("p");
var winningScoreDisplay = document.querySelector("p span");
var input = document.querySelector("input");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
    if(gameOver == false) {
        p1Score++
        if(p1Score === winningScore) {
            p1Display.classList.add("winner");
            gameOver = true;
            
        }
        p1Display.textContent = p1Score;
    }
})

p2Button.addEventListener("click", function(){
    if(gameOver == false) {
        p2Score++
        if(p2Score === winningScore) {
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
})


p3Button.addEventListener("click", function () {
    reset();
})

numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = input.value;
    winningScore = Number(input.value);
    reset();
})


function reset() {
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    console.log("p3button clicked");
    
}
