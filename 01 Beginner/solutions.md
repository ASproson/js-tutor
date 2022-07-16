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