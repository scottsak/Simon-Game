let colorSequence = [];
let userInput = [];
const colorSelection = ["red", "green", "blue", "yellow"];
let correct = true;



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

function nextSequence() {
  return Math.floor(Math.random() * 4);
};

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function getNextNum(nextColor){
  switch (nextColor) {
    case 0:
      colorSequence.push("red");
      // document.getElementById("red").style.backgroundColor = "purple";
      // setTimeout(() => {  document.getElementById("red").style.backgroundColor = "red"; }, 20000);
      break;
    case 1:
      colorSequence.push("green");
      // document.getElementById("green").style.backgroundColor = "purple";
      // setTimeout(() => {  document.getElementById("green").style.backgroundColor = "green"; }, 2000);
      break;
    case 2:
      colorSequence.push("blue");

      break;
    case 3:
      colorSequence.push("yellow");
      // document.getElementById("yellow").style.backgroundColor = "purple";
      // setTimeout(() => {  document.getElementById("yellow").style.backgroundColor = "yellow"; }, 2000);
      break;
  }
};

function startGame() {
  colorSequence = [];
  userInput = [];
  correct=true;
  while (correct === true) {
    getNextNum(nextSequence());
    for(let i=0; i<colorSequence.length; i++){
      document.getElementById(colorSequence[i]).style.backgroundColor = "purple";
      console.log("start");
      sleep(3000);
      console.log("end");
      document.getElementById(colorSequence[i]).style.backgroundColor = colorSequence[i];
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
