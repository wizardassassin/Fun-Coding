let num = 10;

let loop = 1000;

let ratio = loop / num;

let arr = Array(num).fill(0);

for (var i = 0; i < loop; i++)
    arr[Math.floor(Math.random() * num)]++;

arr = arr.map((x) => (x - ratio) / loop);
console.log(arr);