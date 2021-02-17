/*
Lexicographic permutations

A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4.
If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

https://projecteuler.net/problem=24

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

import _ from 'lodash';

let gLength, permute;
export default function problem24(n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], i = 1000000) {
    permute = [];
    gLength = n.length - 1;
    permutation(n);
    permute.sort();
    return Number(permute[i - 1].join(''));
}

function permutation(n, fixed = 0) { // I learned some basic permutations!
    if (fixed >= gLength) {
        permute.push(n);
    } else {
        for (let i = fixed; i <= gLength; i++) {
            let temp = _.cloneDeep(n);
            let a = temp[i];
            temp[i] = temp[fixed];
            temp[fixed] = a;
            permutation(temp, fixed + 1);
        }
    }
} // Instead of finding all permutations, just find them in order! It would be O(n) instead of O(n!) 
