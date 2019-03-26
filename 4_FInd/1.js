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

let x = users.findIndex(user=>{
    return user.name ==='Vidit'
})


console.log(x)

let names =['Vidit','Rahul','Joes']

let len = names.every((name)=>{
    return name.length>4;
})
console.log(len)