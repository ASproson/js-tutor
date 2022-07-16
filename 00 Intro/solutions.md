## 00returnString

```JavaScript
const returnString = () => {
    return 'Hello world'
}
```

## 01convertNum

```JavaScript
const convertNum = (5) => {
    return String(num)
}
```

## 02arrayInsert

```JavaScript
const arrayInsert = () => {
    let array = []
    array.push(1)
    array.push('hello world')
    array.push({name: 'arrayInsert'})
    array.push(['nested array'])
    return array
}
```

## 03loopArrayInsert

```JavaScript
const loopArrayInsert = () => {
    let array = []
    for(let i = 0; i < 4; i ++){
        array.push(i)
    }
    return array
}
```

## 04reversedLoopArray

```JavaScript
const reversedLoopArray = () => {
    let array = []
    for(let i = 3; i >= 0; i--){
        array.push(i)
    }
    return array
}
```

## 05evenArray

```JavaScript
const evenArray = () => {
    let array = []
    for(let i = 0; i <= 10; i++){
        if(i % 2 === 0){
            array.push(i)
        }
    }
    return array
}
```

## 06 oddArray

```JavaScript
const oddArray = () => {
    let array = []
    for(let i = 0; i <= 10; i++){
        if(i % 2 === 1){
            array.push(i)
        }
    }
    return array
}
```

## 07deleteArray

```JavaScript
const deleteArray = (arr) => {
    arr.pop()
    return arr
}
```

## 08addToArray

```JavaScript
const addToArray = (arr) => {
    arr.unshift(2)
    return arr
}
```

## 09removeFirstElementArray

```JavaScript
const removeFirstElementArray = (arr) => {
    arr.shift()
    return arr
}
```

## 10filterArray

```JavaScript
const filterArray = (arr) => {
    return arr.filter((val) => val % 2 == 0)
}
```

## 11 sumArray

```JavaScript
const sumArray = (arr) => {
    return arr.reduce((a, b) => a + b)
}

// Alternative
const sumArray = (arr) => {
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}
```

## 12 mapArray

```JavaScript
const mapArray = (arr) => {
    return arr.map((num) => num * 2)
}

// Alternative

const mapArray = (arr) => {
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i] * 2
    }
    return arr
}
```

## 13 arrayRangeReturn

```JavaScript
const arrayRangeReturn = (arr) => {
    return arr.slice(1, 4)
}
```

## 14 arrayRangeRemove

```JavaScript
const arrayRangeRemove = (arr) => {
    arr.splice(1, 3)
    return arr
}
```

## 15 arrayShallowCopy

```JavaScript
const arrayShallowCopy = (arr) => {
    return [...arr]
}
```

## 16 arrayDeepCopy

```JavaScript
const arrayDeepCopy = (arr) => {
    let deepCopy = JSON.parse(JSON.stringify(arr))
    return deepCopy
}
```