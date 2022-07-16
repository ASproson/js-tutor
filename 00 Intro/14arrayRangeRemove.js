// Create a function that removes the middle three values of the provided array

let providedArray = [1, 2, 3, 4, 5]

const arrayRangeRemove = (arr) => {
    arr.splice(1, 3)
    return arr
}

console.log(arrayRangeRemove(providedArray))