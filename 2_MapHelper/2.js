let cars =[
    {
        model:'Buick',
        price:'CHEAP'
    },
    {
        model:'Camero',
        price:'EXPENSIVE'
    }
]
let price_cars =cars.map((car)=>{
    return car.price
})
console.log(price_cars)
