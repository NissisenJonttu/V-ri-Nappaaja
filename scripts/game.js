function startNewGame() {
  gameOver = false;

  resetGame();

  

  myLoop();



  console.log("Gameover from startgame= " + gameOver);
}


function catchColor(event) {
  const selectedElement = event.target;
  if (selectedElement.classList.contains("clicked")) {
    return;
  } else {
    currentScore++;
    selectedElement.style.backgroundColor = "rgb(243, 227, 255)";
    selectedElement.classList.remove("change");
    selectedElement.classList.add("clicked");
    
    
  }

  console.log("Score= " + currentScore);
}

function changeColor1() {
  square1Element.style.backgroundColor = "red";
  square1Element.classList.remove("clicked");
  square1Element.classList.add("change");
  
}

function changeColor2() {
  square2Element.style.backgroundColor = "red";
  square2Element.classList.remove("clicked");
  square2Element.classList.add("change");
  
}

function changeColor3() {
  square3Element.style.backgroundColor = "red";
  square3Element.classList.remove("clicked");
  square3Element.classList.add("change");
  
}

function changeColor4() {
  square4Element.style.backgroundColor = "red";
  square4Element.classList.remove("clicked");
  square4Element.classList.add("change");
  
}

function changeColor5() {
  square5Element.style.backgroundColor = "red";
  square5Element.classList.remove("clicked");
  square5Element.classList.add("change");
  
}

function changeColor6() {
  square6Element.style.backgroundColor = "red";
  square6Element.classList.remove("clicked");
  square6Element.classList.add("change");
  
}

function changeColor7() {
  square7Element.style.backgroundColor = "red";
  square7Element.classList.remove("clicked");
  square7Element.classList.add("change");
  
}

function changeColor8() {
  square8Element.style.backgroundColor = "red";
  square8Element.classList.remove("clicked");
  square8Element.classList.add("change");
  
}

function changeColor9() {
  square9Element.style.backgroundColor = "red";
  square9Element.classList.remove("clicked");
  square9Element.classList.add("change");
  
}

function checkIfLostGame() {
  if (
    square1Element.classList.contains("change") &&
    square2Element.classList.contains("change") &&
    square3Element.classList.contains("change") &&
    square4Element.classList.contains("change") &&
    square5Element.classList.contains("change") &&
    square6Element.classList.contains("change") &&
    square7Element.classList.contains("change") &&
    square8Element.classList.contains("change") &&
    square9Element.classList.contains("change")
  ) {
    gameOver = true;
    console.log("gameOver from function = " + gameOver);
    return gameOver;
  }
}

function resetGame() {
  square1Element.classList.add("clicked");
  square1Element.style.backgroundColor = "rgb(243, 227, 255)";

  square2Element.classList.add("clicked");
  square2Element.style.backgroundColor = "rgb(243, 227, 255)";

  square3Element.classList.add("clicked");
  square3Element.style.backgroundColor = "rgb(243, 227, 255)";

  square4Element.classList.add("clicked");
  square4Element.style.backgroundColor = "rgb(243, 227, 255)";

  square5Element.classList.add("clicked");
  square5Element.style.backgroundColor = "rgb(243, 227, 255)";

  square6Element.classList.add("clicked");
  square6Element.style.backgroundColor = "rgb(243, 227, 255)";

  square7Element.classList.add("clicked");
  square7Element.style.backgroundColor = "rgb(243, 227, 255)";

  square8Element.classList.add("clicked");
  square8Element.style.backgroundColor = "rgb(243, 227, 255)";

  square9Element.classList.add("clicked");
  square9Element.style.backgroundColor = "rgb(243, 227, 255)";

  currentScore = 0;
}


function myLoop() {         //  create a loop function
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    let rndMilliSeconds1 = Math.floor(Math.random() * 6000) + 2000;
    let rndMilliSeconds2 = Math.floor(Math.random() * 6000) + 2000;
    let rndMilliSeconds3 = Math.floor(Math.random() * 6000) + 2000;
    let rndMilliSeconds4 = Math.floor(Math.random() * 6000) + 2000;
    let rndMilliSeconds5 = Math.floor(Math.random() * 6000) + 2000;
    let rndMilliSeconds6 = Math.floor(Math.random() * 6000) + 2000;
    let rndMilliSeconds7 = Math.floor(Math.random() * 6000) + 2000;
    let rndMilliSeconds8 = Math.floor(Math.random() * 6000) + 2000;
    let rndMilliSeconds9 = Math.floor(Math.random() * 6000) + 2000;

    setTimeout(changeColor1, rndMilliSeconds1);
    setTimeout(changeColor2, rndMilliSeconds2);
    setTimeout(changeColor3, rndMilliSeconds3);
    setTimeout(changeColor4, rndMilliSeconds4);
    setTimeout(changeColor5, rndMilliSeconds5);
    setTimeout(changeColor6, rndMilliSeconds6);
    setTimeout(changeColor7, rndMilliSeconds7);
    setTimeout(changeColor8, rndMilliSeconds8);
    setTimeout(changeColor9, rndMilliSeconds9);

    console.log("loop starts over");   //  your code here
                 
    if (square1Element.classList.contains("clicked") ||
    square2Element.classList.contains("clicked") ||
    square3Element.classList.contains("clicked") ||
    square4Element.classList.contains("clicked") ||
    square5Element.classList.contains("clicked") ||
    square6Element.classList.contains("clicked") ||
    square7Element.classList.contains("clicked") ||
    square8Element.classList.contains("clicked") ||
    square9Element.classList.contains("clicked")){           //  if the counter < 10, call the loop function
      myLoop();             //  ..  again which will trigger another 
    }else if(true){
      console.log("Loop ends")
      return
    }                    //  ..  setTimeout()
  }, 3000)
  
}

