let display = document.getElementById("result");

function addToDisplay(value) {
  display.innerText += value;
}

function calculate() {
  try {
    let result = eval(display.innerText);
    display.innerText = result;
  } catch (error) {
    display.innerText = "Error";
  }
}

function clearDisplay() {
  display.innerText = "";
}