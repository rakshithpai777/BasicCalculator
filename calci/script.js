let displayValue = '';

// Function to display numbers and operators
function display(val) {
  displayValue += val;
  document.getElementById('result').value = displayValue;
}

// Function to clear the screen
function clearScreen() {
  displayValue = '';
  document.getElementById('result').value = '';
}

// Function to calculate the result
function calculate() {
  try {
    let result = eval(displayValue);
    document.getElementById('result').value = result;
    displayValue = '';
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}
