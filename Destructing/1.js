let expense ={
    type:'Business',
    amount:'$45'
}
let type = expense.type;
let amount = expense.amount;

//Other  way 
 let {type} = expense;
 let {amount} = amount;

 //More Better Way 

 let {type,amount} = expense;

 //Make Sure the name of the toye and the Valiue Matches 