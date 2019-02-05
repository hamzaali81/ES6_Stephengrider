var trips = [{
    distance: 34
}, {
    distance: 12
}, {
    distance: 1
}];

var totalDistance = trips.reduce((previous, trip) => {
    previous += trip.distance;
    return previous
}, 0)
console.log(totalDistance)

var desks = [{
        type: 'sitting'
    },
    {
        type: 'standing'
    },
    {
        type: 'sitting'
    },
    {
        type: 'sitting'
    },
    {
        type: 'standing'
    }
];


//Not working
var deskTypes = desks.reduce(function (previous, desk) {
    if (desk.type === 'standing') {
        return previous.standing++;
    }
    if (desk.type === 'sitting') {
        return previous.sitting++;
    }


}, {
    sitting: 0,
    standing: 0
});
console.log(deskTypes)