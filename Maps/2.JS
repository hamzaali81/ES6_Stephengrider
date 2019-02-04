let cars = [{
        model: 'Buick',
        price: 'cheap'
    },
    {
        model: 'Camero',
        price: 'expensive'
    },
    {
        model: 'CameroMin',
        price: 'cheap'
    }
]
let prices = cars.map(function (car) {
    return car.price
})
console.log(prices)