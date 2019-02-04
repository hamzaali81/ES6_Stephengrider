let numbers = [1, 2, 3]
let doubleNumbers = []
for (let i = 0; i < numbers.length; i++) {
    doubleNumbers.push(numbers[i] * 2)
}
console.log(doubleNumbers)
console.log('----------------------------')
//using Maps-- gives new Array-- return keyword is critical
// Map is basically Plucking the data  Provided
let doubled = numbers.map(function (number) {
    return number * 2;
})
console.log(doubled)