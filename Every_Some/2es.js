let names = ['Vidit', 'Shah', 'Rahul']
let every = names.every((name) => {
    return name.length > 4
})
console.log(every)
let some = names.some((name) => {
    return name.length > 4
})
console.log(some)