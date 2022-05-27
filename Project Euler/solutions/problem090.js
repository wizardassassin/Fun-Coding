/*
Cube digit pairs

Each of the six faces on a cube has a different digit (0 to 9) written on it;
the same is done to a second cube. By placing the two cubes side-by-side in different positions
we can form a variety of 2-digit numbers.

For example, the square number 64 could be formed:

[Image]

In fact, by carefully choosing the digits on both cubes it is possible to display all of the
square numbers below one-hundred: 01, 04, 09, 16, 25, 36, 49, 64, and 81.

For example, one way this can be achieved is by placing {0, 5, 6, 7, 8, 9} on one cube and
{1, 2, 3, 4, 8, 9} on the other cube.

However, for this problem we shall allow the 6 or 9 to be turned upside-down so that an
arrangement like {0, 5, 6, 7, 8, 9} and {1, 2, 3, 4, 6, 7} allows for all nine square numbers
to be displayed; otherwise it would be impossible to obtain 09.

In determining a distinct arrangement we are interested in the digits on each cube, not the order.

{1, 2, 3, 4, 5, 6} is equivalent to {3, 6, 4, 1, 2, 5}
{1, 2, 3, 4, 5, 6} is distinct from {1, 2, 3, 4, 5, 9}

But because we are allowing 6 and 9 to be reversed, the two distinct sets in the last example both
represent the extended set {1, 2, 3, 4, 5, 6, 9} for the purpose of forming 2-digit numbers.

How many distinct arrangements of the two cubes allow for all of the square numbers to be displayed?

https://projecteuler.net/problem=90

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

const vals = [
    [0, 1],
    [0, 4],
    [0, 9],
    [1, 6],
    [2, 5],
    [3, 6],
    [4, 9],
    [6, 4],
    [8, 1],
];

const equ = [
    [6, 9],
];

const def = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const siz = def.length;
const r = 6;

export default function problem90(n = -1) {
    let store = [];
    (function gen(arr, ind, len) {
        if (len == r) {
            store.push(arr);
            return;
        }
        while (siz - ind + len >= r) {
            gen([...arr, def[ind]], ind + 1, len + 1);
            ind++;
        }
    })([], 0, 0);
    store = store.map(x => {
        let ret = new Set(x);
        for (const [a, b] of equ) {
            if (ret.has(a)) {
                ret.add(b);
            }
            if (ret.has(b)) {
                ret.add(a);
            }
        }
        return ret;
    });
    let len = store.length;
    let sum = 0;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (canDisplay(store[i], store[j])) {
                sum++;
            }
        }
    }
    return sum;
}

function canDisplay(set1, set2) {
    for (let [f, s] of vals) {
        if (!((set1.has(f) && set2.has(s)) || (set2.has(f) && set1.has(s)))) {
            return false;
        }
    }
    return true;
}