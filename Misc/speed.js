function wait(time) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve();
        }, time);
    });
}

console.log('yes')
await wait(10000)
console.log('yes')