const colorSequence = [];
userInput=[];
const colorSelection=["red","green","blue", "yellow"];




function addRed(){
  userInput.push("red");
}
function addBlue(){
  userInput.push("blue");
}
function addYellow(){
  userInput.push("yellow");
}
function addGreen(){
  userInput.push("green");
}

function nextSequence(){
  return Math.floor(Math.random() * 4);
}
