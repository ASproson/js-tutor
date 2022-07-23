// Using the function below in conjunction with JT00multiplyString...
// You will be passed two strings, multiply them as numbers and return the end result as a string
// Some strings will start with zeroes, the returned number (as a string) should not start with zeroes

const multiplyString = (firstStr, secondStr) => {
    let firstNum = firstStr.split('')
    let secondNum = secondStr.split('')
    let firstValues = []
    let secondValues = []

    let firstIdxNonZero;
    for (let i = 0; i < firstNum.length; i++) {
      if (firstNum[i] !== "0") {
        firstIdxNonZero = i;
      }
      firstIdxNonZero = 0;
    }
  
    for (let i = firstIdxNonZero; i < firstNum.length; i++) {
      firstValues.push(Number(firstNum[i]));
    }
  
    let secondIdxNonZero;
    for (let i = 0; i < secondNum.length; i++) {
      if (secondNum[i] !== "0") {
        secondIdxNonZero = i;
      }
      secondIdxNonZero = 0;
    }
  
    for (let i = secondIdxNonZero; i < secondNum.length; i++) {
      secondValues.push(Number(secondNum[i]));
    }
  
    let sum = firstValues.join("") * secondValues.join("");
    return sum.toString();
}

module.exports = multiplyString