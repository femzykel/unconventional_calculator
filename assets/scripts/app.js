const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//Get input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

//Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCal, calcNumber) {
  const calcDescription = `${resultBeforeCal} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); //From vendor file
}

function writeToLog(id, recentResult, operationNumber, endresult) {
  const logEntry = {
    operation: id,
    prevResult: recentResult,
    number: operationNumber,
    result: endresult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  if (
    (calculationType !== 'ADD' &&
      calculationType !== 'SUBTRACT' &&
      calculationType !== 'MULTIPLY' &&
      calculationType !== 'DIVIDE') ||
    !enteredNumber
  ) {
    return;
  }

  // if (
  //   calculationType == 'ADD' ||
  //   calculationType == 'SUBTRACT' ||
  //   calculationType == 'MULTIPLY' ||
  //   calculationType == 'DIVIDE'
  // ) {
    const initialValue = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
      currentResult += enteredNumber;
      mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
      currentResult -= enteredNumber;
      mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
      currentResult *= enteredNumber;
      mathOperator = '*';
    } else if (calculationType === 'DIVIDE') {
      currentResult /= enteredNumber;
      mathOperator = '/';
    }

    createAndWriteOutput(mathOperator, initialValue, enteredNumber);
    writeToLog(calculationType, initialValue, enteredNumber, currentResult);
  //}
}

function add() {
  calculateResult('ADD');
}

function subtract() {
  calculateResult('SUBTRACT');
}

function multiply() {
  calculateResult('MULTIPLY');
}

function divide() {
  calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
