const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

//Fisher Yates
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(color);
    newDiv.addEventListener("click", handleCardClick);
    gameContainer.append(newDiv);
  }
}


let clickedCards = [];
let cardOne = null;
let cardTwo = null;
let cardPair = 0;

function handleCardClick(event) {


  let clickPick = event.target; //specify the element linked to the click event
  clickPick.style.backgroundColor = clickPick.classList[0];// div
  clickPick.classList.add('clicked'); //card identified as clicked/chosen

  clickedCards.push(clickPick);
  if (clickedCards.length === 2){
    let cardOne = clickedCards[0];
    let cardTwo = clickedCards[1];


    switch(cardOne.classList[0] === cardTwo.classList[0]){
      case true:
        clickedCards = [];
        cardPair++;
        break;
      case false:
        setTimeout(function(){
          cardOne.style.backgroundColor = "";
          cardTwo.style.backgroundColor = "";
          cardOne.classList.remove('clicked');
          cardTwo.classList.remove('clicked');
          clickedCards = [];
        }, 1000);

    }

  }
  if (cardPair === (COLORS.length/2)){
    alert('Game Over');
  }

}


// when the DOM loads
createDivsForColors(shuffledColors);
