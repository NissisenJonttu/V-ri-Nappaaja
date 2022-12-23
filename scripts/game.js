function startNewGame() {
  resetGame();

  scoreSpanElement.textContent = currentScore;

  myLoop();

  console.log("startNewGame function over");
}

function catchColor(event) {
  const selectedElement = event.target;
  if (selectedElement.classList.contains("game-is-over")) {
    return;
  } else if (selectedElement.classList.contains("clicked")) {
    return;
  } else {
    currentScore++;
    selectedElement.style.backgroundColor = "rgb(243, 227, 255)";
    selectedElement.classList.remove("change");
    selectedElement.classList.add("clicked");
  }

  if (currentScore > highscore) {
    highscore = currentScore;
  }
  highscoreSpanElement.textContent = highscore;
  scoreSpanElement.textContent = currentScore;
  console.log("Score= " + currentScore);
}

function changeColor1() {
  square1Element.style.backgroundColor = randomRGB();
  square1Element.classList.remove("clicked");
  square1Element.classList.add("change");
}

function changeColor2() {
  square2Element.style.backgroundColor = randomRGB();
  square2Element.classList.remove("clicked");
  square2Element.classList.add("change");
}

function changeColor3() {
  square3Element.style.backgroundColor = randomRGB();
  square3Element.classList.remove("clicked");
  square3Element.classList.add("change");
}

function changeColor4() {
  square4Element.style.backgroundColor = randomRGB();
  square4Element.classList.remove("clicked");
  square4Element.classList.add("change");
}

function changeColor5() {
  square5Element.style.backgroundColor = randomRGB();
  square5Element.classList.remove("clicked");
  square5Element.classList.add("change");
}

function changeColor6() {
  square6Element.style.backgroundColor = randomRGB();
  square6Element.classList.remove("clicked");
  square6Element.classList.add("change");
}

function changeColor7() {
  square7Element.style.backgroundColor = randomRGB();
  square7Element.classList.remove("clicked");
  square7Element.classList.add("change");
}

function changeColor8() {
  square8Element.style.backgroundColor = randomRGB();
  square8Element.classList.remove("clicked");
  square8Element.classList.add("change");
}

function changeColor9() {
  square9Element.style.backgroundColor = randomRGB();
  square9Element.classList.remove("clicked");
  square9Element.classList.add("change");
}

function resetGame() {
  square1Element.classList.remove("game-is-over");
  square1Element.classList.add("clicked");
  square1Element.style.backgroundColor = "rgb(243, 227, 255)";

  square2Element.classList.remove("game-is-over");
  square2Element.classList.add("clicked");
  square2Element.style.backgroundColor = "rgb(243, 227, 255)";

  square3Element.classList.remove("game-is-over");
  square3Element.classList.add("clicked");
  square3Element.style.backgroundColor = "rgb(243, 227, 255)";

  square4Element.classList.remove("game-is-over");
  square4Element.classList.add("clicked");
  square4Element.style.backgroundColor = "rgb(243, 227, 255)";

  square5Element.classList.remove("game-is-over");
  square5Element.classList.add("clicked");
  square5Element.style.backgroundColor = "rgb(243, 227, 255)";

  square6Element.classList.remove("game-is-over");
  square6Element.classList.add("clicked");
  square6Element.style.backgroundColor = "rgb(243, 227, 255)";

  square7Element.classList.remove("game-is-over");
  square7Element.classList.add("clicked");
  square7Element.style.backgroundColor = "rgb(243, 227, 255)";

  square8Element.classList.remove("game-is-over");
  square8Element.classList.add("clicked");
  square8Element.style.backgroundColor = "rgb(243, 227, 255)";

  square9Element.classList.remove("game-is-over");
  square9Element.classList.add("clicked");
  square9Element.style.backgroundColor = "rgb(243, 227, 255)";

  gameOverElement.style.display = "none";

  currentScore = 0;
}

function myLoop() {
  //  create a loop function
  setTimeout(function () {
    //  call a 3s setTimeout when the loop is called
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

    console.log("loop starts over"); //  your code here

    if (
      square1Element.classList.contains("clicked") ||
      square2Element.classList.contains("clicked") ||
      square3Element.classList.contains("clicked") ||
      square4Element.classList.contains("clicked") ||
      square5Element.classList.contains("clicked") ||
      square6Element.classList.contains("clicked") ||
      square7Element.classList.contains("clicked") ||
      square8Element.classList.contains("clicked") ||
      square9Element.classList.contains("clicked")
    ) {
      //  if the counter < 10, call the loop function
      myLoop(); //  ..  again which will trigger another
    } else if (true) {
      gameIsOver();
      console.log("Loop ends");
      return;
    } //  ..  setTimeout()
  }, 1500);
}

function randomRGB() {
  let rndRGBValue1 = Math.floor(Math.random() * 255);
  let rndRGBValue2 = Math.floor(Math.random() * 255);
  let rndRGBValue3 = Math.floor(Math.random() * 255);

  let rndRGBString =
    "rgb(" +
    rndRGBValue1.toString() +
    "," +
    rndRGBValue2.toString() +
    "," +
    rndRGBValue3.toString() +
    ")";

  return rndRGBString;
}

function gameIsOver() {
  gameOverElement.style.display = "block";

  square1Element.classList.add("game-is-over");
  square2Element.classList.add("game-is-over");
  square3Element.classList.add("game-is-over");
  square4Element.classList.add("game-is-over");
  square5Element.classList.add("game-is-over");
  square6Element.classList.add("game-is-over");
  square7Element.classList.add("game-is-over");
  square8Element.classList.add("game-is-over");
  square9Element.classList.add("game-is-over");
}
