/*Create an Array of numbers
create a Variable to hold the sum
Loop over the array,incrementing the sum of Variable
*/
let numbers = [1, 2, 3, 4, 5];
let sum = 0;

function add(number) {
    sum += number;
}
numbers.forEach(add); //not passsing () as functions here

// numbers.forEach(function (number) {
//     sum += number;
// })

console.log(sum);