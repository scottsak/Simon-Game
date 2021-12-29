let colorSequence = [];
let userInput = [];
let level = 0;
let correct = true;
let started = false;
let nextColor = 0;
const colorSelection = ["red", "green", "blue", "yellow"];

//starts game
$(document).keypress(function() {
  if (!started) {
    $("#level").text("Level " + level);
    //start game
    startGame();
    //get colorSequence
    //see if it matches
    started=true;
  }
});

//-------------------------------------

function startGame() {
  level++;
  getNextColor();
  for(let i=0; i<colorSequence.length; i++){
    lightUp(colorSelection.indexOf(colorSequence[i]));
    sleep(2000);
  }
};

//-------------------------------------

//-------------------------------------
//gets user input
$("btn").click(function(){
  userInput.push($(this).attr("id"));
});

//-------------------------------------

//gets the next color for sequence
function getNextColor(){
  level++;
  nextColor = Math.floor(Math.random() * 4);
  switch (nextColor) {
    case 0:
      colorSequence.push("red");
      $("#red").fadeIn(100).fadeOut(100).fadeIn(100);
      break;
    case 1:
      colorSequence.push("green");
      $("#green").fadeIn(100).fadeOut(100).fadeIn(100);
      break;
    case 2:
      colorSequence.push("blue");
      $("#blue").fadeIn(100).fadeOut(100).fadeIn(100);
      break;
    case 3:
      colorSequence.push("yellow");
      $("#yellow").fadeIn(100).fadeOut(100).fadeIn(100);
      break;
  }
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

//-------------------------------------

function lightUp(button){
  switch (nextColor) {
    case 0:
      $("#red").fadeIn(100).fadeOut(100).fadeIn(100);
      break;
    case 1:
      $("#green").fadeIn(100).fadeOut(100).fadeIn(100);
      break;
    case 2:
      $("#blue").fadeIn(100).fadeOut(100).fadeIn(100);
      break;
    case 3:
      $("#yellow").fadeIn(100).fadeOut(100).fadeIn(100);
      break;
  }
};

// function startGame() {
//   colorSequence = [];
//   userInput = [];
//   correct=true;
//   while (correct === true) {
//     getNextColor(nextSequence());
//     console.log(colorSequence);
//     for(let i=0; i<colorSequence.length; i++){
//       let buttonColor = (colorSelection.indexOf(colorSequence[i]));
//       lightButton(buttonColor);
//       console.log(buttonColor);
//       console.log("start");
//       sleep(3000);
//       console.log("end");
//     };
//     sleep(4000);
//     console.log("pause over");
//     if (userInput === colorSequence) {
//       // alert("you got it right");
//     } else {
//       // alert("You got it wrong");
//       correct=false;
//       console.log("game ended");
//       break;
//     }
//   }
// };


//
//
// //lights up buttons
// function lightButton(buttonColor){
//   switch (buttonColor) {
//     case 0:
//       console.log("red");
//       document.getElementById("red").style.backgroundColor = "purple";
//       sleep(2000);
//       //document.getElementById("red").style.backgroundColor = "red";
//       break;
//     case 1:
//       console.log("green");
//       document.getElementById("green").style.backgroundColor = "purple";
//       sleep(2000);
//       //document.getElementById("green").style.backgroundColor = "green";
//       break;
//     case 2:
//       console.log("blue");
//       document.getElementById("blue").style.backgroundColor = "purple";
//       sleep(5000);
//       //document.getElementById("blue").style.backgroundColor = "blue";
//       break;
//     case 3:
//       console.log("yellow");
//       document.getElementById("yellow").style.backgroundColor = "purple";
//       sleep(2000);
//       //document.getElementById("yellow").style.backgroundColor = "yellow";
//       break;
//   }
// };
