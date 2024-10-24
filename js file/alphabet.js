function playNow(){
//    const peleground =  document.getElementsByClassName("playground");
 
const homeSec = document.getElementById("homeSection")
homeSec.classList.add("hidden")

const playgroundSec = document.getElementById("playgroundSection");
playgroundSec.classList.remove("hidden")
continueGame()
}
function getRandomAlphabet(){

    const alphabetLowercase = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
      ];

    const number = Math.random()*25
    const integerNumber = Math.round(number);
    // console.log(integerNumber);

    const alphabet = alphabetLowercase[integerNumber];

    // console.log("your Random ALphabet",alphabet);

    const show = document.getElementById("currentAlpha")

    show.innerText = alphabet.toUpperCase();

    setBackgroundColor(alphabet)
    return alphabet;
}

function handleKeyboardButtonPress(event){
    const playerPressed = event.key.toUpperCase();
    // console.log("player pressed",playerPressed);

    const screenAlphabet = document.getElementById("currentAlpha");
    // console.log("screen alphabet:",screenAlphabet.innerText);

    const screalphabet = screenAlphabet.innerText;

    console.log(playerPressed, screalphabet);

    if(playerPressed === screalphabet){
        // removeBackgroundColor(screalphabet);
        console.log(screalphabet);
        removeBackgroundColor(screalphabet.toLowerCase());

        const score = document.getElementById("scorCount");
        // console.log(score.innerText)
        const currentScoreText = score.innerText;
const currentScore = parseInt(currentScoreText);

const newScore = currentScore + 1;

score.innerText = newScore;
        continueGame();
        

    }
    else{
        const curLife = document.getElementById("life");
        const currentLifeText = curLife.innerText;
        console.log(currentLifeText);
        const currentLifeNumber = parseInt(currentLifeText);
        
        const newLife = currentLifeNumber - 1;

        curLife.innerText = newLife;

        const score = document.getElementById("scorCount");
        // console.log(score.innerText)
        const currentScoreText = score.innerText;
const currentScore = parseInt(currentScoreText);
const restScore = currentScore - 1;
score.innerText = restScore;
// console.log(currentScore);
const scoreDisplay = document.getElementById("scoreBoard")
const playgroun = document.getElementById('playgroundSection')
const finalScoreDisplay = document.getElementById("finalScore")
if(newLife === 0){
  playgroun.classList.add("hidden");
  scoreDisplay.classList.remove("hidden")
  finalScoreDisplay.innerText = restScore;
}

    }

}

document.getElementById("playAgainBtn").addEventListener('click', function(){
  // console.log("button clicked")
// console.log(scoreDisplay);

const scoreDisplay = document.getElementById("scoreBoard")
// console.log(scoreDisplay);

scoreDisplay.classList.add("hidden")

const playgroun = document.getElementById('playgroundSection')

playgroun.classList.remove("hidden");

const curLife = document.getElementById("life");

curLife.innerText = parseInt(5);

const score = document.getElementById("scorCount");
score.innerText = parseInt(0)



})

document.addEventListener("keyup", handleKeyboardButtonPress)

  function continueGame(){
   const alphabet = getRandomAlphabet();
  }

  function setBackgroundColor(elementID){
const element = document.getElementById(elementID)

element.classList.add("bg-orange-400");
return element;
// element.classList.remove("bg-orange-400")
  }

  function removeBackgroundColor(elementID){
    const element = document.getElementById(elementID)
    element.classList.remove("bg-orange-400")

//    console.log(element)
  
  }

