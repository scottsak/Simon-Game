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
    showSequence();
    //get colorSequence
    //sleep((level*1000)+1000);
    //see if it matches
    started=true;
  }
});

//-------------------------------------

function showSequence() {
  level++;
  getNextColor();
  for(let i=0; i<colorSequence.length; i++){
    lightUp(colorSelection.indexOf(colorSequence[i]));
    // sleep(1000);
  }
};

//-------------------------------------

//-------------------------------------
//gets user input
$(".btn").click(function(){
  let x = $(this).attr("id");
  userInput.push(x);

  //count++
  //if count = length of level then check checkAnswer

  checkAnswer();
});

//-------------------------------------
//check if wrong or right
function checkAnswer(){
  console.log(userInput);
  console.log(colorSequence);
  if(userInput===colorSequence){
    correct=true;
  }
  else{
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level").text("Game Over, Press Any Key to Restart");
    level = 0;
    gamePattern = [];
    started=false;
  }
}
//-------------------------------------
//gets the next color for sequence
function getNextColor(){
  level++;
  nextColor = Math.floor(Math.random() * 4);
  switch (nextColor) {
    case 0:
      colorSequence.push("red");
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
      playSound("0");
      break;
    case 1:
      $("#green").fadeIn(100).fadeOut(100).fadeIn(100);
      playSound("1")
      break;
    case 2:
      $("#blue").fadeIn(100).fadeOut(100).fadeIn(100);
      playSound("3")
      break;
    case 3:
      $("#yellow").fadeIn(100).fadeOut(100).fadeIn(100);
      playSound("4")
      break;
  }
};

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
