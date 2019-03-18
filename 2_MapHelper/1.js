let numbers =[2,4,6]
let doubled_num =[]
for(let i=0;i<numbers.length;i++){
    doubled_num.push(numbers[i]*2)
}
console.log(doubled_num)

let map_doubled = numbers.map((number)=>{
    return number * 2;
})
console.log(map_doubled)