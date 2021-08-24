/*
Video I got the problem from:
https://www.youtube.com/watch?v=iJ8pnCO0nTY
@ 16:00
*/

let limit = 666; // max strip length

limit += 1;

let strip1 = new Array(limit); // goes into the right

let strip2 = new Array(); // goes into the left; could be optimized

/* // First way of calculating strip2
let strip3 = new Array(limit); // creates strip 2; could be optimized

for (let i = 0; i < limit; i += 2)
    strip3[i] = i / 2 + 1; // 1, , 2, , 3, , 4...

for (let i = 1; i < limit; i += 2)
    strip3[i] = i + 2; // , 3, , 5, , 7, , 9...

// 1, 3, 2, 5, 3, 7, 4, 9...

strip2[0] = 1; // 1, ...

let i = 0;

while (strip2[i] < limit)
    strip2[i + 1] = strip2[i] + strip3[i++];

*/

// Second way of calculating strip2
// Using pentagonal numbers

let i = 0;

let k = 1;

strip2[i] = k * (3 * k - 1) / 2;

while (strip2[i] < limit) {
    k = -k;
    strip2[i + 1] = k * (3 * k - 1) / 2;
    k = -k + 1;
    strip2[i + 2] = k * (3 * k - 1) / 2;
    i += 2
}

//

strip1[0] = 1n; // 1, ...

for (let i = 1; i < limit; i++) {
    let val = 0n;
    let j;
    let k = 0;
    j = strip2[k++];
    while (j <= i) {
        if (Math.floor((k - 1) / 2) % 2 == 0)
            val += strip1[i - j];
        else
            val -= strip1[i - j];
        j = strip2[k++];
    }
    strip1[i] = val;
}

console.log(strip1)
console.log(strip2)
// console.log(strip3)

console.log(strip1[666])
console.log(strip1[100])
console.log(strip1[strip1.length - 1])