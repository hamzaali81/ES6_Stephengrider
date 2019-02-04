let products = [{
        name: 'cucumber',
        type: 'vegetable',
        quantity: 0,
        price: 1
    }, {
        name: 'banana',
        type: 'fruit',
        quantity: 10,
        price: 15
    },
    {
        name: 'celery',
        type: 'vegetable',
        quantity: 30,
        price: 13
    },
    {
        name: 'orange',
        type: 'fruit',
        quantity: 3,
        price: 5
    }
]
let filteredProducts = []
for (let i = 0; i < products.length; i++) {
    if (products[i].type == 'fruit') {
        filteredProducts.push(products[i])
    }
}
console.log(filteredProducts)

let x = products.filter(function (product) { // No need to write if  statemnet;
    return product.type === 'vegetable';
})
console.log(x)
let y = products.filter(function (product) {
    return ((product.type === 'fruit') && (product.quantity > 0) && (product.price < 10))
})
console.log(y)