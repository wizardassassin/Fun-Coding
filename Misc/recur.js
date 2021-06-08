function recurFloor(n) {
    n = Math.floor(n);
    if (n <= 10)
        return n * 2;
    return recurFloor(recurFloor(n / 3));
}

function recur(n) {
    if (n <= 10)
        return n * 2;
    return recur(recur(n / 3));
}

function nonRecurFloor(n) {
    while (n >= 10) {
        n = Math.floor(n / 1.5);
    }
    return n * 2;
}

function nonRecur(n) {
    while (n >= 10) {
        n = n / 1.5;
    }
    return n * 2;
}

for (let i = 0; i <= 100; i++)
    console.log(i, recurFloor(i), nonRecurFloor(i), recur(i), nonRecur(i));