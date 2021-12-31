let colorSequence = ["red", "green", "blue"];
let userInput = [];
let level = 0;
let correct = true;
let started = false;
let nextColor = 0;
let count=0;
const colorSelection = ["red", "green", "blue", "yellow"];

//starts game
$(document).keypress(function() {
  if (!started) {
    $("#level").text("Level " + level);
    getNextColor();
    showSequence();
    started=true;
  }
});

//-------------------------------------

function showSequence() {
  console.log(colorSequence.length);
  for(let i=0; i<colorSequence.length; i++){
    console.log(colorSequence[i]);
    lightUp(colorSelection.indexOf(colorSequence[i]));
  }
};

//-------------------------------------

//-------------------------------------
//gets user input
$(".btn").click(function(){
  let x = $(this).attr("id");
  userInput.push(x);
  checkAnswer();
});

//-------------------------------------
//check if wrong or right
function checkAnswer(){
  count++;
  console.log(userInput);
  console.log(colorSequence);
  //checks if lengths are the same
  if(JSON.stringify(userInput.slice(0,count))==JSON.stringify(colorSequence.slice(0,count))){
    if(userInput.length===colorSequence.length){
      correct=true;
      count=0;
      userInput=[];
      getNextColor();
      showSequence();
    }
  }
  else{
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level").text("Game Over, Press Any Key to Restart");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    level = 0;
    colorSequence = [];
    userInput=[];
    count=0;
    started=false;

  }
}
//-------------------------------------
//gets the next color for sequence
function getNextColor(){
  level++;
  $("#level").text("Level " + level);
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
  switch (button) {
    case 0:
    console.log("went through r");
      $("#red").fadeIn(100).fadeOut(100).fadeIn(100).delay(800);
      playSound("0");
      break;
    case 1:
    console.log("went through g");
      $("#green").fadeIn(100).fadeOut(100).fadeIn(100).delay(800);
      playSound("1");
      break;
    case 2:
    console.log("went through b");
      $("#blue").fadeIn(100).fadeOut(100).fadeIn(100).delay(800);
      playSound("3");
      break;
    case 3:
    console.log("went through y");
      $("#yellow").fadeIn(100).fadeOut(100).fadeIn(100).delay(800);
      playSound("4");
      break;
  }
};

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
