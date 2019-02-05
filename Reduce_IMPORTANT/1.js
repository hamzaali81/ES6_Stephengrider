let numbers = [10, 20, 30]
let sum = 0;

numbers.forEach(num => {
    sum += num
})
console.log(sum)
//reduce --> Condencing Array a Single Sumber
let red_sum = numbers.reduce((sum_0, number) => { //sum_0 === 0
    return sum_0 + number //             |
}, 0) //<----------------------------------------

console.log(red_sum)