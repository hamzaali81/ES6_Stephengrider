var users = [{
        id: 1,
        admin: false
    },
    {
        id: 2,
        admin: false
    },
    {
        id: 3,
        admin: true
    }
];

var admin = users.find(user => {
    return user.admin
})
console.log(admin)
var accounts = [{
        balance: -10
    },
    {
        balance: 12
    },
    {
        balance: 0
    }
];

var account = accounts.find(acc => {
    return acc.balance === 12
})
console.log(account)