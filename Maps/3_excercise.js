var images = [{
        height: '34px',
        width: '39px'
    },
    {
        height: '54px',
        width: '19px'
    },
    {
        height: '83px',
        width: '75px'
    },
];

var heights = images.map(function (image) {
    return image.height;
})

console.log(heights)
paints = [{
        color: 'red',
    },
    {
        color: 'green'
    }
]

function pluck(array, property) {
    let pluck = array.map(function (arr) {
        return arr[property]; //arr.property didn't work
    })
    return pluck

}
let x = pluck(paints, 'color')
console.log(x)