

// let expense ={
//     type:'Business',
//     amount:'$45'
// }
// let type = expense.type;
// let amount = expense.amount;

// //Other  way 
//  let {type} = expense;
//  let {amount} = amount;

//  //More Better Way 

//  let {type,amount} = expense;

 //Make Sure the name of the toye and the Valiue Matches 

//  let Person = {
//      name:'Vidit',
//      age:22,
//      sex:'M'
//  }

// let summary = ({name,age,sex})=>{ return `${name} age :${age} sex: ${sex}`}
// console.log(summary(Person))

let companies =['Google','Uber','Facebook'];
let [name] = companies;
console.log(name)
// let [length,yo,yooo] = companies
// console.log(length + yo + yooo)
let {length} = companies;
console.log(length)
