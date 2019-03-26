computers  =[
    {
        computer_name : 'Apple',
        RAM:16
    },
    {
        computer_name:'Windows',
        RAM:16
    } ,
    {
        computer_name:'Acer',
        RAM:8
    },
    {
        computer_name :'Compaq',
        RAM:4
    },
    {
        computer_name:'Samsung',
        RAM:6
    }
]

//Using Filter Function
let RAM=computers.filter(computer =>{
    return computer.RAM==4
})
console.log(RAM)
let check_every =computers.every((computer)=>{
    return computer.RAM >16
})
console.log(check_every)
let check_some = computers.some((computer)=>{
    return computer.RAM>=16
})
console.log(check_some
    )