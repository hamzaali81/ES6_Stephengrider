function Field(value) {
    this.value = value;
}
Field.prototype.validate = function () {
    return this.value.length > 0
}
let username = new Field('2Cool');
let password = new Field('My Password');
let fields = [username, password]
let formIsValid = fields.formIsValid((field) => {
    return field.validate()
})
console.log(formIsValid)