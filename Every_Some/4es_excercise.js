var users = [{
        id: 21,
        hasSubmitted: true
    },
    {
        id: 62,
        hasSubmitted: false
    },
    {
        id: 4,
        hasSubmitted: true
    }
];

var hasSubmitted = users.every((user) => {
    return user.hasSubmitted
})
console.log(hasSubmitted)
var requests = [{
        url: '/photos',
        status: 'complete'
    },
    {
        url: '/albums',
        status: 'pending'
    },
    {
        url: '/users',
        status: 'failed'
    }
];

var inProgress = requests.some((request) => {
    return request.status === 'pending'
})
console.log(inProgress)