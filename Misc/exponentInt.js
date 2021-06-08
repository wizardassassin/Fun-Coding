let lim = 100000;

let arr = [];


for (let i = 1; i < lim; i++) {
    let a = i;
    let b = 0;
    do {
        b++;
        a *= 1.5;
    } while (a == Math.floor(a));
    if (!arr[b])
        arr[b] = [];
    arr[b].push(i);
}

console.log(arr);

console.log(arr.length - 1, arr[arr.length - 1]);

/*
min: y = 2^x
steps: x (1.5)
max: y = 3^x

*/