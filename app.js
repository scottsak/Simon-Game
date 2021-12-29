let colorSequence = [];
let userInput = [];
let level = 0;
let correct = true;
const colorSelection = ["red", "green", "blue", "yellow"];


//-------------------------------------
//gets user input
function addRed() {
  userInput.push("red");
};

function addBlue() {
  userInput.push("blue");
};

function addYellow() {
  userInput.push("yellow");
};

function addGreen() {
  userInput.push("green");
};

//-------------------------------------

//gets the next color for sequence
function getNextColor(nextColor){
  switch (nextColor) {
    case 0:
      colorSequence.push("red");
      document.
      break;
    case 1:
      colorSequence.push("green");
      break;
    case 2:
      colorSequence.push("blue");
      break;
    case 3:
      colorSequence.push("yellow");
      break;
  }
};

function nextSequence() {
  return Math.floor(Math.random() * 4);
};

//-------------------------------------

//sleep function
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}


//lights up buttons
function lightButton(buttonColor){
  switch (buttonColor) {
    case 0:
      console.log("red");
      document.getElementById("red").style.backgroundColor = "purple";
      sleep(2000);
      //document.getElementById("red").style.backgroundColor = "red";
      break;
    case 1:
      console.log("green");
      document.getElementById("green").style.backgroundColor = "purple";
      sleep(2000);
      //document.getElementById("green").style.backgroundColor = "green";
      break;
    case 2:
      console.log("blue");
      document.getElementById("blue").style.backgroundColor = "purple";
      sleep(5000);
      //document.getElementById("blue").style.backgroundColor = "blue";
      break;
    case 3:
      console.log("yellow");
      document.getElementById("yellow").style.backgroundColor = "purple";
      sleep(2000);
      //document.getElementById("yellow").style.backgroundColor = "yellow";
      break;
  }
};

function startGame() {
  colorSequence = [];
  userInput = [];
  correct=true;
  while (correct === true) {
    getNextColor(nextSequence());
    console.log(colorSequence);
    for(let i=0; i<colorSequence.length; i++){
      let buttonColor = (colorSelection.indexOf(colorSequence[i]));
      lightButton(buttonColor);
      console.log(buttonColor);
      console.log("start");
      sleep(3000);
      console.log("end");
    };
    sleep(4000);
    console.log("pause over");
    if (userInput === colorSequence) {
      // alert("you got it right");
    } else {
      // alert("You got it wrong");
      correct=false;
      console.log("game ended");
      break;
    }
  }
};
