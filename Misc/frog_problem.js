/*
Simulates frogs jumping into a pond

The video I got the idea from:
https://www.youtube.com/watch?v=ZLTyX4zL2Fc
*/
const pondSize = process.argv[2] || 10;
const pondTests = process.argv[3] || 100000;

function simulation(pondLength = pondSize, tries = pondTests) {
    let acc = 0;
    let arr = Array(pondLength + 1).fill(0);
    for (let i = 0; i < tries; i++) {
        let pos = 0;
        let tempAcc = acc;
        while (pos < pondLength)
            pos += Math.floor(Math.random() * (pondLength - pos) + 1),
            acc++;
        arr[acc - tempAcc]++;
    }
    return [acc / tries,acc, tries, arr];
}
let acc = 0;
let div = 0;
let arr = Array(11).fill(0);
function jumps(pondLength = length, jump = 0) {
    if (pondLength == 0) {
        div++;
        acc += jump;
        arr[jump]++;
    }
    for (let i = 1; i <= pondLength; i++) {
        jumps(pondLength - i, jump + 1);
    }
}

console.log(simulation())
jumps();
console.log(acc / div, acc, div, arr)
// let arr = [];
// for (let i = 0; i < 200; i++) {
//     let a = simulation(i, 10000)
//     console.log(a)
//     arr.push(a)
// }
// console.log("----------")
// for (let i = 0; i < 199; i++) {
//     console.log(arr[i + 1] - arr[i])
// }