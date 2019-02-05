let primaryColors = [{
    color: 'red'
}, {
    color: 'yellow'
}, {
    color: 'blue'
}];

let map = primaryColors.map(col => {
    return col.color
})

let red = primaryColors.reduce((previous, color) => {
    previous.push(color.color);
    return previous;

}, []) // [] ==previous

console.log(map)
console.log(red)