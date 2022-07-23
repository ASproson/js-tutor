## 00multiplyString

```JavaScript
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
```

## 01incrementString

```JavaScript
const incrementString = (str) => {
    let split = str.split("");
    let newStr = "";
    let counter = 0;
    let firstIdx;
  
    for (let i = 0; i < split.length; i++) {
      if (isNaN(split[i])) {
        counter++;
      } else {
        firstIdx = i;
        break;
      }
  
      if (counter === split.length) {
        return (newStr += [...str].join("") + "1");
      }
    }
  
    let splicedVal = Number(split.splice(firstIdx).join(""));
    splicedVal++;
    newStr += split.join("");
  
    return newStr + splicedVal.toString();
  };
```