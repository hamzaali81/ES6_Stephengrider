let users = [{
    name: 'Jill'
}, {
    name: 'Alex'
}, {
    name: 'Bill'
}]
let user;
for (let i = 0; i < users.length; i++) {
    if (users[i].name === 'Alex') {
        user = users[i];
        break;
    }
}
console.log(user)

let y = users.find(function (user) {
    return user.name === 'Alex'
})
console.log(y)