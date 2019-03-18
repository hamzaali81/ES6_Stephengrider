let products =[
    {name:'Cucumber',type:'vegetable'},
    {name:'mango',type:'fruit'},
    {name:'orange',type:'fruit'},
    {name:'ladyfinger',type:'vegetable'}
]
let filterProduct =[];
for(let i=0;i<products.length;i++){
    if(products[i].type=='vegetable') {
        filterProduct.push(products[i])
    }
}
console.log(filterProduct)

let fruits =products.filter((product)=>{
    return product.type =='fruit' //avoid using if statemnets s
})
console.log(fruits)