var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject("Arguments must be numbers");
            }

        }, 1500);
    });
};

var asyncMinus = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a - b);
            } else {
                reject("Arguments must be numbers");
            }

        }, 5000);
    });
};

asyncAdd(23, 4).then(
    (res) => {
        console.log(res);
        return asyncMinus(res, 7);
    },
).then(
    (res) => {
        console.log('Final result:' + res);
    },
).catch(
    (msg) => {
        console.log(msg);
    }
);

var somePromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        //resolve('Process completed');
        reject('Process error');
    }, 2500);

});

somePromise.then(
    (msg) => {
        console.log("Success: " + msg);
    },

    (msg) => {
        console.log("Failed: " + msg);
    }
);
