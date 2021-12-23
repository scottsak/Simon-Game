const colorSequence = [];

const colorSelection=["red","green","blue", "yellow"];

let d = document.querySelect("red").addEventListener("click", test);

d.onclick()=test();

function test(){
  alert("works");
}

function nextSequence(){
  return Math.floor(Math.random() * 4);
}
