## 00canDivideBy

```JavaScript
const canDivideBy = (num) => {
    let divisors = []
    for(let i = 0; i < num; i++){
        if(num % i === 0){
            divisors.push(i)
        }
    }
    return divisors
}
```

## 01 camelCase

```JavaScript
const camelCase = (str) => {
    let strSplit = str.split(' ')
    for(let i = 1; i < strSplit.length; i++){
        strSplit[i] = strSplit[i][0].toUpperCase() + strSplit[i].substr(1)
    }
    return strSplit.join('')
}
```