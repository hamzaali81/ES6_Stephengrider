function Field(value){
    this.value = value;
}
let userName = new Field("2cool")
let password = new Field("2Hot")

Field.prototype.validate = function(){
    return this.value.length>=4;
}
let data =[userName,password]
let check = data.every((dat)=>{
    return dat.validate();
})
console.log(check)
