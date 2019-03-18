let users = [
    {
        name:'Jill'
    },
    {
    name:'Vidit'},
    {
    name:'Rahul'},
    {
    name:'qweerty'}
]

let x = users.find(user=>{
    return user.name ==='Vidit'
})

console.log(x)