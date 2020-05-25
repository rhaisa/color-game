let numSquares = 6;
let colors = [];
let pickedColor;
 const squares = document.querySelectorAll(".square");
 const messageDisplay = document.querySelector("#message");
 const colorDisplay = document.getElementById("colorDisplay");
 const h1 = document.querySelector("h1");
 const resetButton = document.querySelector("#reset");
//  it was like this before, but to adjust the code we did the "modeButtons"
//  var easyBtn = document.querySelector("#easyBtn");
//  var hardBtn = document.querySelector("#hardBtn");
const modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  steUpModeButtons();
  setUpSquares();
  reset();
}

function steUpModeButtons(){
  // figure out how many squares to show
    // pick new colers
    // pick a new pickedColor
    // update page to reflect changes
    for(var i = 0; i < modeButtons.length; i++){
      modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        // short and longer version of the "if statement"
        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        // if(this.textContent === "Easy"){
        //   numSquares = 3;
        // } else {
        //   numSquares = 6;
        // }
        reset();
      });
    }
}

function setUpSquares(){
  for(var i = 0; i < squares.length; i++){
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
      //grab color of clicked square
    const clickedColor = this.style.backgroundColor;
    //compare color to the pickedColor
    if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct!"
      messageDisplay.classList.add("correct");
      messageDisplay.classList.remove("wrong");
      resetButton.textContent = "Play Again?"
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else{
     this.style.backgroundColor = "#232323";
     messageDisplay.textContent = "Try Again"
     messageDisplay.classList.add("wrong");
     messageDisplay.classList.remove("correct");
     }
  });
}
}

function reset(){
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
   pickedColor = pickColor();
  //change the colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  // change colors of the squares
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
 }
h1.style.backgroundColor = "#90949c"

}


// it was like this before, I cleaning up the code as both fuctions worked in a similar way.
//  easyBtn.addEventListener("click", function(){
//    hardBtn.classList.remove("selected");
//    easyBtn.classList.add("selected");
//    numSquares = 3;
//    colors = generateRandomColors(numSquares);
//    pickedColor = pickColor();
//    colorDisplay.textContent = pickedColor;
//    for(var i = 0; i < squares.length; i++){
//     if(colors[i]){ squares[i].style.backgroundColor = colors[i];
//     } else {
//       squares[i].style.display = "none";
//     }
//   }
//  });

//  hardBtn.addEventListener("click", function(){
//   hardBtn.classList.add("selected");
//   easyBtn.classList.remove("selected");
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//    pickedColor = pickColor();
//    colorDisplay.textContent = pickedColor;
//    for(var i = 0; i < squares.length; i++){
//     squares[i].style.backgroundColor = colors[i];
//     squares[i].style.display = "block";
//   }
// });


 resetButton.addEventListener("click", function(){
reset();

//generate all new colors
//    colors = generateRandomColors(numSquares);
//pick a new random color from array
//     pickedColor = pickColor();
//change the colorDisplay to match picked color
//    colorDisplay.textContent = pickedColor;
//    this.textContent = "New Colors";
//    messageDisplay.textContent = "";
//change colors of the squares
//    for(var i = 0; i < squares.length; i++){
//     squares[i].style.backgroundColor = colors[i];
//   }
// h1.style.backgroundColor = "#90949c"
 })
 
 colorDisplay.textContent = pickedColor;

 function changeColors(color){
   for(var i = 0; i < squares.length; i++){
   squares[i].style.backgroundColor = color;}
 }

 function pickColor(){
   const random = Math.floor(Math.random() * colors.length);
   return colors[random];
 }

 function generateRandomColors(num){
   const arr = [];
   for(var i = 0; i < num; i++){
     arr.push(randomColor());
   }
   return arr;
 }

 function randomColor(){
   //pick a "red" from 0 - 255
  const red = Math.floor(Math.random() * 256);
   //pick a "Green" from 0 - 255
  const green = Math.floor(Math.random() * 256);
   //pick a "Blue" from 0 - 255
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
 
 }