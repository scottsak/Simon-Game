let colorSequence = [];
let userInput = [];
let level = 0;
let correct = true;
let started = false;
let nextColor = 0;
let count = 0;
let patternShowing = true;
const colorSelection = ["red", "green", "blue", "yellow"];

//starts game
$(document).keypress(function() {
  if (!started) {
    $("#level").text("Level " + level);
    getNextColor();
    showSequence();
    started = true;
  }
});

//-------------------------------------

function showSequence() {
  console.log(colorSequence.length);
  patternShowing=true;
  setTimeout(function() {
    patternShowing=false;
  }, 500*colorSequence.length);
  for (let i = 0; i < colorSequence.length; i++) {
    console.log(colorSequence[i]);
    lightUp(colorSelection.indexOf(colorSequence[i]), i);
  }
};

//-------------------------------------

//-------------------------------------
//gets user input
$(".btn").click(function() {
  if(patternShowing===false){
    let x = $(this).attr("id");
    userInput.push(x);
    lightUp(colorSelection.indexOf(x), 0);
    checkAnswer();
  }
});


//-------------------------------------
//check if wrong or right
function checkAnswer() {
  count++;
  console.log(userInput);
  console.log(colorSequence);
  //checks if lengths are the same
  if (JSON.stringify(userInput.slice(0, count)) == JSON.stringify(colorSequence.slice(0, count))) {
    if (userInput.length === colorSequence.length) {
      correct = true;
      count = 0;
      userInput = [];
      getNextColor();
      setTimeout(() =>{
      showSequence();}, 800);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level").text("Game Over, Press Any Key to Restart");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    level = 0;
    colorSequence = [];
    userInput = [];
    count = 0;
    started = false;

  }
}
//-------------------------------------
//gets the next color for sequence
function getNextColor() {
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
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

// -------------------------------------
function lightUp(button, i) {
  restoreColor();
  setTimeout(() =>{
    switch (button) {
      case 0:
        console.log("went through r");
        document.querySelector("#red").style.backgroundColor = "#FF3131";
        playSound("0");
        setTimeout(() =>{document.querySelector("#red").style.backgroundColor = "#b22222";}, 200);
        break;
      case 1:
        console.log("went through g");
        document.querySelector("#green").style.backgroundColor = "#7fff00";
        playSound("1");
        setTimeout(() =>{document.querySelector("#green").style.backgroundColor = "green";}, 200);
        break;
      case 2:
        console.log("went through b");
        document.querySelector("#blue").style.backgroundColor = "#0096FF";
        playSound("3");
        setTimeout(() =>{document.querySelector("#blue").style.backgroundColor = "blue";}, 200);
        break;
      case 3:
        console.log("went through y");
        document.querySelector("#yellow").style.backgroundColor = "#FAFA33";
        playSound("4");
        setTimeout(() =>{document.querySelector("#yellow").style.backgroundColor = "#FFC000";}, 200);
        break;
    }
  }, i*500);
};

function restoreColor(){
  console.log("kk");
  document.querySelector("#blue").style.backgroundColor = "blue";
  document.querySelector("#yellow").style.backgroundColor = "#FFC000";
  document.querySelector("#green").style.backgroundColor = "green";
  document.querySelector("#red").style.backgroundColor = "#b22222";
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
