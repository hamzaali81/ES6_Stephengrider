let sum =0
let arr =[10,20,30]

let x =arr.forEach(a =>{
    sum+=a
})
console.log(x)
let sum_reduce = arr.reduce((sum,a)=>{
return sum+=a;
},0)
console.log(sum_reduce)


let primaryColors =[
    {color:'red'},
    {color:'blue'},
    {color:'yellow'}
]
//reduce to Single example

function balanceParams(string){
   return  !string.split('').reduce((previous,char)=>{
        if(previous<0){ return previous}
        if(char ==="("){return ++previous}
        if(char===")") {return --previous}
        return previous
   },0)


}
console.log(balanceParams(')('))
var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

let dis = trips.reduce((start,trip)=>{return start +=trip.distance},0)
console.log(dis)
var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
  ];
  
  var deskTypes = desks.reduce(function(desk) {
    
  }, { sitting: 0, standing: 0 });