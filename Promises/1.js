let promise = new Promise((resolve, reject) => {
    resolve()
})

promise.then(() => {
    console.log('Resolved')
}).then(() => {
    console.log("I Also Got Resolved Bro!!!")
})