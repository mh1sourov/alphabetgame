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
    console.log(integerNumber);

    const alphabet = alphabetLowercase[integerNumber];

    console.log("your Random ALphabet",alphabet);

    const show = document.getElementById("currentAlpha")

    show.innerText = alphabet.toUpperCase();

    setBackgroundColor(alphabet)
    return alphabet;
    

}

  
  function continueGame(){
   const alphabet = getRandomAlphabet();


  }


  function setBackgroundColor(elementID){
const element = document.getElementById(elementID)

element.classList.add("bg-orange-400")
  }

