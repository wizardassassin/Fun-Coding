/*
Cubic permutations

The cube, 41063625 (345^3), can be permuted to produce two other cubes: 56623104 (384^3) and 66430125 (405^3).
In fact, 41063625 is the smallest cube which has exactly three permutations of its digits which are also cube.

Find the smallest cube for which exactly five permutations of its digits are cube.

https://projecteuler.net/problem=62

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

export default function problem62(n = -1) {
    let a = 1;
    let prev = Math.cbrt(a);
    while (true) {
        a *= 10;
        let e = Math.cbrt(a)
        let arr1 = [];
        let arr2 = [];
        for (let i = Math.ceil(prev); i < e; i++) {
            arr1.push(i ** 3);
            arr2.push(String(i ** 3).split('').sort().join(''));
        }
        let o = 0;
        while (arr2.length) {
            let c = arr2.shift();
            if (arr2.filter(x => x == c).length == 4)
                return arr1[o];
            o++;
        }
        prev = e;
    }
}